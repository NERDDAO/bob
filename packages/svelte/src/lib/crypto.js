import { ethers } from "ethers"
import { get } from 'svelte/store'
import * as stores from "$lib/stores.svelte.js"
import * as utils from '$lib/utils.js'

export async function connectWallet(){
	const contractInfo = get(stores.currentContract)
	const chainInfo = contractInfo.chainInfo

	if (window.ethereum) {
		try {
			// Request account access
			await window.ethereum.request({ method: 'eth_requestAccounts' });


			// Add BASE testnet to MetaMask
			await window.ethereum.request({
				method: 'wallet_addEthereumChain',
				params: [chainInfo]
			});

			connect()

		} catch (error) {
			console.error(`User denied account access or failed to add ${chainInfo.chainName}`, error);
			return null;
		}
	} else {
		console.error("No Ethereum provider found. Install a wallet like MetaMask.");
		stores.installed.set(false)
		return null;
	}
}

export async function checkWallet() {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.BrowserProvider(window.ethereum);
		
        try {
            const accounts = await provider.listAccounts();
			
            if (accounts.length > 0) {
				connectWallet()
            } else {
                console.log('Wallet found but not connected.');
            }
        } catch (error) {
            console.error('An error occurred while checking the wallet. Please try again.', error);
        }
    } else {
		stores.installed.set(false)
        console.log('No web3 wallet found.');
    }
}

function subscribe(){
	window.ethereum.on('accountsChanged', handleAccountChange);
	const provider = get(stores.provider)
	const signer = get(stores.signer)
	const contractInfo = get(stores.currentContract)
	const contract = new ethers.Contract(contractInfo.address, contractInfo.abi, signer);


	provider.on("block", async (blockNumber) => {
		const logs = await provider.getLogs({
			address: contractInfo.address,
			fromBlock: blockNumber,
			toBlock: blockNumber,
		});

		logs.forEach((log) => {
			const parsedLog = contract.interface.parseLog(log);
			if (parsedLog.name === "LogRebase") {
				stores.disableButton.set(true)

				const { epoch, totalSupply } = parsedLog.args;
				console.log("LogRebase EVENT", { epoch, totalSupply });
				stores.EPOCH.set(epoch.toString());

				callGetCurrentEPOCH()
			}
		});
	});
}

function connect(){
	const provider = new ethers.BrowserProvider(window.ethereum);

	if (provider){
		stores.provider.set(provider)
		provider.getSigner().then(async (signer) => {
			stores.signer.set(signer)
			const address = await signer.getAddress()
			stores.selectedAccount.set(address)
			stores.connected.set(true)
			subscribe()
			callCanRebase()
			callGetCurrentEPOCH()
			
		});
	}
}

function handleAccountChange(accounts) {
	console.log("handleAccountChange")
	const provider = get(stores.provider)
	provider.getSigner().then(async (signer) => {
		stores.signer.set(signer)
		const address = await signer.getAddress()
		stores.selectedAccount.set(address)
	});
}

export async function callRebase(){
	const signer = get(stores.signer)
	const contractInfo = get(stores.currentContract)

	const contract = new ethers.Contract(contractInfo.address, contractInfo.abi, signer);

    try {
		stores.sending_tx.set(true)

		const tx = await contract.rebase();
        console.log('Transaction sent:', tx);

        // Wait for the transaction to be confirmed
        const receipt = await tx.wait();
		console.log({receipt});
        
        console.log("Transaction successful:", tx);
		callCanRebase()
    } catch (error) {
        if (error.message.includes("MonetaryPolicy: Insufficient balance")) {
			window.alert("Need CBDC Token Balance to run UPPIFIER")
            console.error("Need CBDC Token Balance to run UPPIFIER");
        } else {
            console.error("Unexpected error:", error);
        }
    } finally {
		stores.sending_tx.set(false)
	}
}

export async function callGetCurrentEPOCH(){
	const signer = get(stores.signer)
	const contractInfo = get(stores.currentContract)

	const contract = new ethers.Contract(contractInfo.address, contractInfo.abi, signer);

    try {
        const result = await contract.EPOCH();
		console.log({result})
		stores.EPOCH.set(result.toString())
    
    } catch (error) {
        console.error("Error calling contract method:", error);
    }
}

export async function callCanRebase(){
	console.log("Calling CanRebase")
	const signer = get(stores.signer)
	const contractInfo = get(stores.currentContract)

	const contract = new ethers.Contract(contractInfo.address, contractInfo.abi, signer);

    try {
        const result = await contract.canRebase();
		console.log({result})    

		if (!result){
			stores.disableButton.set(true)
			callGetLastRebase()
		}else{
			stores.disableButton.set(false)
		}

		return result

    } catch (error) {
        console.error("Error calling contract method:", error);
    }
}

export async function callGetLastRebase(){
	const signer = get(stores.signer)
	const contractInfo = get(stores.currentContract)

	const contract = new ethers.Contract(contractInfo.address, contractInfo.abi, signer);

    try {
        const result = await contract.LAST_REBASE_BLOCK();  
		console.log({result}) 
		const rebaseAvailable = utils.getNextRebaseAvailable(result, contractInfo.rebase_delay_sec)
		console.log({rebaseAvailable})
		const delay = utils.calculateDelay(rebaseAvailable)
		console.log({delay})

		if (delay > 0){
			stores.nextRebaseDelaySec.set(delay / 1000)
			console.log({delay})
			setTimeout(callCanRebase, delay)
		}else{
			stores.disableButton.set(false)
		}

    } catch (error) {
        console.error("Error calling contract method:", error);
    }
}


export async function addTokenToWallet(tokenAddress) {
	console.log({tokenAddress})
    if (window.ethereum) {
        try {
            // Request MetaMask to add the token
            const wasAdded = await window.ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {address: tokenAddress}
				},
            });

            if (wasAdded) {
                console.log('Token was added or is already present in MetaMask.');
            } else {
                console.log('Token addition declined.');
            }
        } catch (error) {
            console.error('Error adding token:', error);
        }
    } else {
        console.error('MetaMask is not installed.');
    }
}