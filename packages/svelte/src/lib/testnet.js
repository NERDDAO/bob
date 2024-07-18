import chainInfoObject from './chainInfo'

export default {
	chainInfo: chainInfoObject["Base Sepolia"],
	pool_address: "",
	address: "0x5aa1acb70EB6600b129620024A956D010B2f111e",
	rebase_delay_sec: 3600,
	original_supply: "42000000000",
	abi: [
		{
		  "type": "constructor",
		  "inputs": [
			{
			  "name": "name_",
			  "type": "string",
			  "internalType": "string"
			},
			{
			  "name": "symbol_",
			  "type": "string",
			  "internalType": "string"
			},
			{
			  "name": "rebaseInterval",
			  "type": "uint256",
			  "internalType": "uint256"
			}
		  ],
		  "stateMutability": "nonpayable"
		},
		{
		  "type": "function",
		  "name": "DECIMALS",
		  "inputs": [
			
		  ],
		  "outputs": [
			{
			  "name": "",
			  "type": "uint8",
			  "internalType": "uint8"
			}
		  ],
		  "stateMutability": "view"
		},
		{
		  "type": "function",
		  "name": "EPOCH",
		  "inputs": [
			
		  ],
		  "outputs": [
			{
			  "name": "",
			  "type": "uint32",
			  "internalType": "uint32"
			}
		  ],
		  "stateMutability": "view"
		},
		{
		  "type": "function",
		  "name": "LAST_REBASE_BLOCK",
		  "inputs": [
			
		  ],
		  "outputs": [
			{
			  "name": "",
			  "type": "uint256",
			  "internalType": "uint256"
			}
		  ],
		  "stateMutability": "view"
		},
		{
		  "type": "function",
		  "name": "REBASE_INTERVAL",
		  "inputs": [
			
		  ],
		  "outputs": [
			{
			  "name": "",
			  "type": "uint256",
			  "internalType": "uint256"
			}
		  ],
		  "stateMutability": "view"
		},
		{
		  "type": "function",
		  "name": "allowance",
		  "inputs": [
			{
			  "name": "owner",
			  "type": "address",
			  "internalType": "address"
			},
			{
			  "name": "spender",
			  "type": "address",
			  "internalType": "address"
			}
		  ],
		  "outputs": [
			{
			  "name": "",
			  "type": "uint256",
			  "internalType": "uint256"
			}
		  ],
		  "stateMutability": "view"
		},
		{
		  "type": "function",
		  "name": "allowances",
		  "inputs": [
			{
			  "name": "account",
			  "type": "address",
			  "internalType": "address"
			},
			{
			  "name": "spender",
			  "type": "address",
			  "internalType": "address"
			}
		  ],
		  "outputs": [
			{
			  "name": "",
			  "type": "uint256",
			  "internalType": "uint256"
			}
		  ],
		  "stateMutability": "view"
		},
		{
		  "type": "function",
		  "name": "approve",
		  "inputs": [
			{
			  "name": "spender",
			  "type": "address",
			  "internalType": "address"
			},
			{
			  "name": "value",
			  "type": "uint256",
			  "internalType": "uint256"
			}
		  ],
		  "outputs": [
			{
			  "name": "",
			  "type": "bool",
			  "internalType": "bool"
			}
		  ],
		  "stateMutability": "nonpayable"
		},
		{
		  "type": "function",
		  "name": "balanceOf",
		  "inputs": [
			{
			  "name": "account",
			  "type": "address",
			  "internalType": "address"
			}
		  ],
		  "outputs": [
			{
			  "name": "",
			  "type": "uint256",
			  "internalType": "uint256"
			}
		  ],
		  "stateMutability": "view"
		},
		{
		  "type": "function",
		  "name": "balances",
		  "inputs": [
			{
			  "name": "account",
			  "type": "address",
			  "internalType": "address"
			}
		  ],
		  "outputs": [
			{
			  "name": "",
			  "type": "uint256",
			  "internalType": "uint256"
			}
		  ],
		  "stateMutability": "view"
		},
		{
		  "type": "function",
		  "name": "canRebase",
		  "inputs": [
			
		  ],
		  "outputs": [
			{
			  "name": "",
			  "type": "bool",
			  "internalType": "bool"
			}
		  ],
		  "stateMutability": "view"
		},
		{
		  "type": "function",
		  "name": "decimals",
		  "inputs": [
			
		  ],
		  "outputs": [
			{
			  "name": "",
			  "type": "uint8",
			  "internalType": "uint8"
			}
		  ],
		  "stateMutability": "view"
		},
		{
		  "type": "function",
		  "name": "name",
		  "inputs": [
			
		  ],
		  "outputs": [
			{
			  "name": "",
			  "type": "string",
			  "internalType": "string"
			}
		  ],
		  "stateMutability": "view"
		},
		{
		  "type": "function",
		  "name": "rebase",
		  "inputs": [
			
		  ],
		  "outputs": [
			{
			  "name": "",
			  "type": "uint256",
			  "internalType": "uint256"
			}
		  ],
		  "stateMutability": "nonpayable"
		},
		{
		  "type": "function",
		  "name": "symbol",
		  "inputs": [
			
		  ],
		  "outputs": [
			{
			  "name": "",
			  "type": "string",
			  "internalType": "string"
			}
		  ],
		  "stateMutability": "view"
		},
		{
		  "type": "function",
		  "name": "totalSupply",
		  "inputs": [
			
		  ],
		  "outputs": [
			{
			  "name": "",
			  "type": "uint256",
			  "internalType": "uint256"
			}
		  ],
		  "stateMutability": "view"
		},
		{
		  "type": "function",
		  "name": "transfer",
		  "inputs": [
			{
			  "name": "to",
			  "type": "address",
			  "internalType": "address"
			},
			{
			  "name": "value",
			  "type": "uint256",
			  "internalType": "uint256"
			}
		  ],
		  "outputs": [
			{
			  "name": "",
			  "type": "bool",
			  "internalType": "bool"
			}
		  ],
		  "stateMutability": "nonpayable"
		},
		{
		  "type": "function",
		  "name": "transferFrom",
		  "inputs": [
			{
			  "name": "from",
			  "type": "address",
			  "internalType": "address"
			},
			{
			  "name": "to",
			  "type": "address",
			  "internalType": "address"
			},
			{
			  "name": "value",
			  "type": "uint256",
			  "internalType": "uint256"
			}
		  ],
		  "outputs": [
			{
			  "name": "",
			  "type": "bool",
			  "internalType": "bool"
			}
		  ],
		  "stateMutability": "nonpayable"
		},
		{
		  "type": "event",
		  "name": "Approval",
		  "inputs": [
			{
			  "name": "owner",
			  "type": "address",
			  "indexed": true,
			  "internalType": "address"
			},
			{
			  "name": "spender",
			  "type": "address",
			  "indexed": true,
			  "internalType": "address"
			},
			{
			  "name": "value",
			  "type": "uint256",
			  "indexed": false,
			  "internalType": "uint256"
			}
		  ],
		  "anonymous": false
		},
		{
		  "type": "event",
		  "name": "LogRebase",
		  "inputs": [
			{
			  "name": "epoch",
			  "type": "uint256",
			  "indexed": true,
			  "internalType": "uint256"
			},
			{
			  "name": "totalSupply",
			  "type": "uint256",
			  "indexed": false,
			  "internalType": "uint256"
			}
		  ],
		  "anonymous": false
		},
		{
		  "type": "event",
		  "name": "Transfer",
		  "inputs": [
			{
			  "name": "from",
			  "type": "address",
			  "indexed": true,
			  "internalType": "address"
			},
			{
			  "name": "to",
			  "type": "address",
			  "indexed": true,
			  "internalType": "address"
			},
			{
			  "name": "value",
			  "type": "uint256",
			  "indexed": false,
			  "internalType": "uint256"
			}
		  ],
		  "anonymous": false
		},
		{
		  "type": "error",
		  "name": "ERC20InsufficientAllowance",
		  "inputs": [
			{
			  "name": "spender",
			  "type": "address",
			  "internalType": "address"
			},
			{
			  "name": "allowance",
			  "type": "uint256",
			  "internalType": "uint256"
			},
			{
			  "name": "needed",
			  "type": "uint256",
			  "internalType": "uint256"
			}
		  ]
		},
		{
		  "type": "error",
		  "name": "ERC20InsufficientBalance",
		  "inputs": [
			{
			  "name": "sender",
			  "type": "address",
			  "internalType": "address"
			},
			{
			  "name": "balance",
			  "type": "uint256",
			  "internalType": "uint256"
			},
			{
			  "name": "needed",
			  "type": "uint256",
			  "internalType": "uint256"
			}
		  ]
		},
		{
		  "type": "error",
		  "name": "ERC20InvalidApprover",
		  "inputs": [
			{
			  "name": "approver",
			  "type": "address",
			  "internalType": "address"
			}
		  ]
		},
		{
		  "type": "error",
		  "name": "ERC20InvalidReceiver",
		  "inputs": [
			{
			  "name": "receiver",
			  "type": "address",
			  "internalType": "address"
			}
		  ]
		},
		{
		  "type": "error",
		  "name": "ERC20InvalidSender",
		  "inputs": [
			{
			  "name": "sender",
			  "type": "address",
			  "internalType": "address"
			}
		  ]
		},
		{
		  "type": "error",
		  "name": "ERC20InvalidSpender",
		  "inputs": [
			{
			  "name": "spender",
			  "type": "address",
			  "internalType": "address"
			}
		  ]
		}
	  ]
}