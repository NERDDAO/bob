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
    xStakingPool: {
      address: "0xf095d985F937bf22f6B28AfA0A1D4D5E2789B8e8",
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
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
