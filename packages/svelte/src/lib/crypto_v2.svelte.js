import { dataLength, ethers } from "ethers"
import { createScaffoldReadContract } from "$lib/runes/scaffoldReadContract.svelte";

import mainnet from '$lib/mainnet.js'


export async function addTokenToWallet(tokenAddress) {
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

export async function callRebase(){
	return true
}


export function callGetCurrentEPOCH(){
	const { data: currentEPOCH } = $derived.by(
		createScaffoldReadContract(() => ({
		  contractName: "rebaseContract",
		  functionName: "EPOCH"
		})),
	  );
	
	  console.log(currentEPOCH)

	  return currentEPOCH
/*
	const signer = get(stores.signer)
	const contractInfo = get(stores.currentContract)

	const contract = new ethers.Contract(contractInfo.address, contractInfo.abi, signer);

    try {
        const result = await contract.EPOCH();
		console.log({result})
		stores.EPOCH.set(result.toString())
    
    } catch (error) {
        console.error("Error calling contract method:", error);
    }*/
}
