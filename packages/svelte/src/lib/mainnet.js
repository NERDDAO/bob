import chainInfoObject from './chainInfo'

export default {
	chainInfo: chainInfoObject["Base"],
	pool_address: "0xE2807F2058d6C618d20267C71FA0316c9ab6cb0C",
	token_address: "0xBA5eDF631828EBbe81B850F476FA5936e3C15783",
	address: "0xE5FaDd0bcBdf5FBCDac7d3823c27133D8ed60b5a",
	rebase_delay_sec: 3600, //300 for prod
	original_supply: "42000000000",
	abi:[
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "pairAddress",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "tokenAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "rebaseInterval",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "epoch",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "totalSupply",
					"type": "uint256"
				}
			],
			"name": "LogRebase",
			"type": "event"
		},
		{
			"inputs": [],
			"name": "EPOCH",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "LAST_REBASE_BLOCK",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "REBASE_INTERVAL",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "canRebase",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "pair",
			"outputs": [
				{
					"internalType": "contract IUniswapV2Pair",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "rebase",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "token",
			"outputs": [
				{
					"internalType": "contract IRebaseableERC20",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]
}