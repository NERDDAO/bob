import type { GenericContractsDeclaration } from "$lib/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
  8453: {
    CBDC: {
      address: "0xBA5eDF631828EBbe81B850F476FA5936e3C15783",
      abi: [
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "owner", type: "address" },
            { indexed: true, internalType: "address", name: "spender", type: "address" },
            { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: false, internalType: "address", name: "monetaryPolicy", type: "address" }],
          name: "LogMonetaryPolicyUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "uint256", name: "epoch", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "totalSupply", type: "uint256" },
          ],
          name: "LogRebase",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "previousOwner", type: "address" }],
          name: "OwnershipRenounced",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
            { indexed: true, internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "EIP712_DOMAIN",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "EIP712_REVISION",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "PERMIT_TYPEHASH",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner_", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "who", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "subtractedValue", type: "uint256" },
          ],
          name: "decreaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "string", name: "name", type: "string" },
            { internalType: "string", name: "symbol", type: "string" },
            { internalType: "uint8", name: "decimals", type: "uint8" },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner_", type: "address" }],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "isOwner",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "monetaryPolicy",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "who", type: "address" }],
          name: "nonces",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "epoch", type: "uint256" },
            { internalType: "int256", name: "supplyDelta", type: "int256" },
          ],
          name: "rebase",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
        {
          inputs: [{ internalType: "address", name: "who", type: "address" }],
          name: "scaledBalanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "scaledTotalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "monetaryPolicy_", type: "address" }],
          name: "setMonetaryPolicy",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "to", type: "address" }],
          name: "transferAll",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
          ],
          name: "transferAllFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    WCBDC: {
      address: "0x6c841c51233d2eCD2485a574111aBa2C27dc3BC5",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "cbdc",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "target",
              type: "address",
            },
          ],
          name: "AddressEmptyCode",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "AddressInsufficientBalance",
          type: "error",
        },
        {
          inputs: [],
          name: "ECDSAInvalidSignature",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "length",
              type: "uint256",
            },
          ],
          name: "ECDSAInvalidSignatureLength",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
          ],
          name: "ECDSAInvalidSignatureS",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "allowance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "needed",
              type: "uint256",
            },
          ],
          name: "ERC20InsufficientAllowance",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "balance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "needed",
              type: "uint256",
            },
          ],
          name: "ERC20InsufficientBalance",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "approver",
              type: "address",
            },
          ],
          name: "ERC20InvalidApprover",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "receiver",
              type: "address",
            },
          ],
          name: "ERC20InvalidReceiver",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "ERC20InvalidSender",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "ERC20InvalidSpender",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
          ],
          name: "ERC2612ExpiredSignature",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "signer",
              type: "address",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "ERC2612InvalidSigner",
          type: "error",
        },
        {
          inputs: [],
          name: "FailedInnerCall",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "currentNonce",
              type: "uint256",
            },
          ],
          name: "InvalidAccountNonce",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidInitialization",
          type: "error",
        },
        {
          inputs: [],
          name: "NotInitializing",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "OwnableInvalidOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "OwnableUnauthorizedAccount",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
          ],
          name: "SafeERC20FailedOperation",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [],
          name: "EIP712DomainChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint64",
              name: "version",
              type: "uint64",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MAX_WCBDC_SUPPLY",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "_taxRate",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "balanceOfUnderlying",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "wcbdcs",
              type: "uint256",
            },
          ],
          name: "burn",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "burnAll",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
          ],
          name: "burnAllTo",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "wcbdcs",
              type: "uint256",
            },
          ],
          name: "burnTo",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "cbdcs",
              type: "uint256",
            },
          ],
          name: "deposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "cbdcs",
              type: "uint256",
            },
          ],
          name: "depositFor",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            {
              internalType: "bytes1",
              name: "fields",
              type: "bytes1",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "version",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "chainId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "verifyingContract",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "salt",
              type: "bytes32",
            },
            {
              internalType: "uint256[]",
              name: "extensions",
              type: "uint256[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "name_",
              type: "string",
            },
            {
              internalType: "string",
              name: "symbol_",
              type: "string",
            },
          ],
          name: "init",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "wcbdcs",
              type: "uint256",
            },
          ],
          name: "mint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "wcbdcs",
              type: "uint256",
            },
          ],
          name: "mintFor",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "newTaxRate",
              type: "uint256",
            },
          ],
          name: "setTaxRate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newTaxRecipient",
              type: "address",
            },
          ],
          name: "setTaxRecipient",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "taxRecipient",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalUnderlying",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "underlying",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "cbdcs",
              type: "uint256",
            },
          ],
          name: "underlyingToWrapper",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "cbdcs",
              type: "uint256",
            },
          ],
          name: "withdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "withdrawAll",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
          ],
          name: "withdrawAllTo",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "cbdcs",
              type: "uint256",
            },
          ],
          name: "withdrawTo",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "wcbdcs",
              type: "uint256",
            },
          ],
          name: "wrapperToUnderlying",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    wCBDCwETHLP: {
      address: "0x0a73d0cf3f500b83147a20a434117647c4c46919",
      abi: [
        {
          inputs: [
            { internalType: "uint96", name: "initialTokenSupply", type: "uint96" },
            { internalType: "address", name: "initialSupplyOwner", type: "address" },
            { internalType: "uint96", name: "tokensPerNft", type: "uint96" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        { inputs: [], name: "AlreadyInitialized", type: "error" },
        { inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
        { inputs: [], name: "DNAlreadyInitialized", type: "error" },
        { inputs: [], name: "InsufficientAllowance", type: "error" },
        { inputs: [], name: "InsufficientBalance", type: "error" },
        { inputs: [], name: "LinkMirrorContractFailed", type: "error" },
        { inputs: [], name: "MirrorAddressIsZero", type: "error" },
        { inputs: [], name: "NewOwnerIsZeroAddress", type: "error" },
        { inputs: [], name: "NoHandoverRequest", type: "error" },
        { inputs: [], name: "SenderNotMirror", type: "error" },
        { inputs: [], name: "TokenDoesNotExist", type: "error" },
        { inputs: [], name: "TotalSupplyOverflow", type: "error" },
        { inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
        { inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
        { inputs: [], name: "TransferToZeroAddress", type: "error" },
        { inputs: [], name: "Unauthorized", type: "error" },
        { inputs: [], name: "ZeroTokensPerNft", type: "error" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "owner", type: "address" },
            { indexed: true, internalType: "address", name: "spender", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "pendingOwner", type: "address" }],
          name: "OwnershipHandoverCanceled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "pendingOwner", type: "address" }],
          name: "OwnershipHandoverRequested",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "oldOwner", type: "address" },
            { indexed: true, internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "target", type: "address" },
            { indexed: false, internalType: "bool", name: "status", type: "bool" },
          ],
          name: "SkipNFTSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        { stateMutability: "payable", type: "fallback" },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "cancelOwnershipHandover", outputs: [], stateMutability: "payable", type: "function" },
        {
          inputs: [{ internalType: "address", name: "pendingOwner", type: "address" }],
          name: "completeOwnershipHandover",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "a", type: "address" }],
          name: "getSkipNFT",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "mirror",
          outputs: [{ internalType: "contract DN404Mirror", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "mirrorERC721",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "result", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "pendingOwner", type: "address" }],
          name: "ownershipHandoverExpiresAt",
          outputs: [{ internalType: "uint256", name: "result", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "payable", type: "function" },
        { inputs: [], name: "requestOwnershipHandover", outputs: [], stateMutability: "payable", type: "function" },
        {
          inputs: [{ internalType: "string", name: "baseURI_", type: "string" }],
          name: "setBaseURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bool", name: "skipNFT", type: "bool" }],
          name: "setSkipNFT",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "result", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        { stateMutability: "payable", type: "receive" },
      ],
    },

    lpStakingPool: {
      address: "0x1556DaeD14a28ba07c2Daa68bb209869A620a2a2",
      abi: [
        {
          type: "function",
          name: "DURATION",
          inputs: [],
          outputs: [
            {
              name: "DURATION_",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "earned",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "exit",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getReward",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "initialOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isRewardDistributor",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastTimeRewardApplicable",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastUpdateTime",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "multicall",
          inputs: [
            {
              name: "data",
              type: "bytes[]",
              internalType: "bytes[]",
            },
          ],
          outputs: [
            {
              name: "results",
              type: "bytes[]",
              internalType: "bytes[]",
            },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "notifyRewardAmount",
          inputs: [
            {
              name: "reward",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "periodFinish",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardPerToken",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardPerTokenStored",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardRate",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardToken",
          inputs: [],
          outputs: [
            {
              name: "rewardToken_",
              type: "address",
              internalType: "contract ERC20",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "rewards",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "selfPermit",
          inputs: [
            {
              name: "token",
              type: "address",
              internalType: "contract ERC20",
            },
            {
              name: "value",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "deadline",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "v",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "r",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "s",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "selfPermitIfNecessary",
          inputs: [
            {
              name: "token",
              type: "address",
              internalType: "contract ERC20",
            },
            {
              name: "value",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "deadline",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "v",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "r",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "s",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "setRewardDistributor",
          inputs: [
            {
              name: "rewardDistributor",
              type: "address",
              internalType: "address",
            },
            {
              name: "isRewardDistributor_",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stake",
          inputs: [
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stakeToken",
          inputs: [],
          outputs: [
            {
              name: "stakeToken_",
              type: "address",
              internalType: "contract ERC20",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "userRewardPerTokenPaid",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "withdraw",
          inputs: [
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RewardAdded",
          inputs: [
            {
              name: "reward",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RewardPaid",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "reward",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Staked",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Withdrawn",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "Error_AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_AmountTooLarge",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_NotRewardDistributor",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_ZeroOwner",
          inputs: [],
        },
        {
          type: "error",
          name: "Ownable_NewOwnerZeroAddress",
          inputs: [],
        },
        {
          type: "error",
          name: "Ownable_NotOwner",
          inputs: [],
        },
      ],
    },
    xStakingPool: {
      address: "0xCdBdE6c964ebB2C550e92e013f672214ddb1B6DD",
      abi: [
        {
          type: "function",
          name: "DURATION",
          inputs: [],
          outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "allowance",
          inputs: [
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "approve",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "currentUnlockEndTimestamp",
          inputs: [],
          outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "decimals",
          inputs: [],
          outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "distributeReward",
          inputs: [{ name: "rewardAmount", type: "uint128", internalType: "uint128" }],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getPricePerFullShare",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [{ name: "initialOwner", type: "address", internalType: "address" }],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isRewardDistributor",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastRewardAmount",
          inputs: [],
          outputs: [{ name: "", type: "uint128", internalType: "uint128" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastRewardTimestamp",
          inputs: [],
          outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "multicall",
          inputs: [{ name: "data", type: "bytes[]", internalType: "bytes[]" }],
          outputs: [{ name: "results", type: "bytes[]", internalType: "bytes[]" }],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "name",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "selfPermit",
          inputs: [
            { name: "token", type: "address", internalType: "contract ERC20" },
            { name: "value", type: "uint256", internalType: "uint256" },
            { name: "deadline", type: "uint256", internalType: "uint256" },
            { name: "v", type: "uint8", internalType: "uint8" },
            { name: "r", type: "bytes32", internalType: "bytes32" },
            { name: "s", type: "bytes32", internalType: "bytes32" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "selfPermitIfNecessary",
          inputs: [
            { name: "token", type: "address", internalType: "contract ERC20" },
            { name: "value", type: "uint256", internalType: "uint256" },
            { name: "deadline", type: "uint256", internalType: "uint256" },
            { name: "v", type: "uint8", internalType: "uint8" },
            { name: "r", type: "bytes32", internalType: "bytes32" },
            { name: "s", type: "bytes32", internalType: "bytes32" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "setRewardDistributor",
          inputs: [
            { name: "rewardDistributor", type: "address", internalType: "address" },
            { name: "isRewardDistributor_", type: "bool", internalType: "bool" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stake",
          inputs: [{ name: "stakeTokenAmount", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "xERC20Amount", type: "uint256", internalType: "uint256" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stakeToken",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "contract ERC20" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "symbol",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transfer",
          inputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferFrom",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "to", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "withdraw",
          inputs: [{ name: "xERC20Amount", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "stakeTokenAmount", type: "uint256", internalType: "uint256" }],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Approval",
          inputs: [
            { name: "owner", type: "address", indexed: true, internalType: "address" },
            { name: "spender", type: "address", indexed: true, internalType: "address" },
            { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            { name: "previousOwner", type: "address", indexed: true, internalType: "address" },
            { name: "newOwner", type: "address", indexed: true, internalType: "address" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RewardAdded",
          inputs: [{ name: "reward", type: "uint128", indexed: false, internalType: "uint128" }],
          anonymous: false,
        },
        {
          type: "event",
          name: "Staked",
          inputs: [
            { name: "user", type: "address", indexed: true, internalType: "address" },
            { name: "stakeTokenAmount", type: "uint256", indexed: false, internalType: "uint256" },
            { name: "xERC20Amount", type: "uint256", indexed: false, internalType: "uint256" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            { name: "from", type: "address", indexed: true, internalType: "address" },
            { name: "to", type: "address", indexed: true, internalType: "address" },
            { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Withdrawn",
          inputs: [
            { name: "user", type: "address", indexed: true, internalType: "address" },
            { name: "stakeTokenAmount", type: "uint256", indexed: false, internalType: "uint256" },
            { name: "xERC20Amount", type: "uint256", indexed: false, internalType: "uint256" },
          ],
          anonymous: false,
        },
        { type: "error", name: "Error_AlreadyInitialized", inputs: [] },
        { type: "error", name: "Error_NotRewardDistributor", inputs: [] },
        { type: "error", name: "Error_ZeroOwner", inputs: [] },
        { type: "error", name: "Error_ZeroSupply", inputs: [] },
        { type: "error", name: "Ownable_NewOwnerZeroAddress", inputs: [] },
        { type: "error", name: "Ownable_NotOwner", inputs: [] },
      ],
    },
    stakingContractFactory: {
      address: "0x07FA8B1E3E39a0ECF313E748bf240C003261b1ED",
      abi: [
        {
          type: "constructor",
          inputs: [
            { name: "xERC20Implementation_", type: "address", internalType: "contract xERC20" },
            { name: "erc20StakingPoolImplementation_", type: "address", internalType: "contract ERC20StakingPool" },
            { name: "erc721StakingPoolImplementation_", type: "address", internalType: "contract ERC721StakingPool" },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createERC20StakingPool",
          inputs: [
            { name: "rewardToken", type: "address", internalType: "contract ERC20" },
            { name: "stakeToken", type: "address", internalType: "contract ERC20" },
            { name: "DURATION", type: "uint64", internalType: "uint64" },
          ],
          outputs: [{ name: "stakingPool", type: "address", internalType: "contract ERC20StakingPool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createERC721StakingPool",
          inputs: [
            { name: "rewardToken", type: "address", internalType: "contract ERC20" },
            { name: "stakeToken", type: "address", internalType: "contract ERC721" },
            { name: "DURATION", type: "uint64", internalType: "uint64" },
          ],
          outputs: [{ name: "stakingPool", type: "address", internalType: "contract ERC721StakingPool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createXERC20",
          inputs: [
            { name: "name", type: "bytes32", internalType: "bytes32" },
            { name: "symbol", type: "bytes32", internalType: "bytes32" },
            { name: "decimals", type: "uint8", internalType: "uint8" },
            { name: "stakeToken", type: "address", internalType: "contract ERC20" },
            { name: "DURATION", type: "uint64", internalType: "uint64" },
          ],
          outputs: [{ name: "stakingPool", type: "address", internalType: "contract xERC20" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "erc20StakingPoolImplementation",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "contract ERC20StakingPool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "erc721StakingPoolImplementation",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "contract ERC721StakingPool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "xERC20Implementation",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "contract xERC20" }],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "CreateERC20StakingPool",
          inputs: [{ name: "stakingPool", type: "address", indexed: false, internalType: "contract ERC20StakingPool" }],
          anonymous: false,
        },
        {
          type: "event",
          name: "CreateERC721StakingPool",
          inputs: [
            { name: "stakingPool", type: "address", indexed: false, internalType: "contract ERC721StakingPool" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "CreateXERC20",
          inputs: [{ name: "stakingPool", type: "address", indexed: false, internalType: "contract xERC20" }],
          anonymous: false,
        },
        { type: "error", name: "CreateFail", inputs: [] },
      ],
    },
    rebaseContract: {
      address: "0xE5FaDd0bcBdf5FBCDac7d3823c27133D8ed60b5a",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "pairAddress",
              type: "address",
            },
            {
              internalType: "address",
              name: "tokenAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "rebaseInterval",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "epoch",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "totalSupply",
              type: "uint256",
            },
          ],
          name: "LogRebase",
          type: "event",
        },
        {
          inputs: [],
          name: "EPOCH",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "LAST_REBASE_BLOCK",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "REBASE_INTERVAL",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "canRebase",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pair",
          outputs: [
            {
              internalType: "contract IUniswapV2Pair",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "rebase",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "token",
          outputs: [
            {
              internalType: "contract IRebaseableERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
