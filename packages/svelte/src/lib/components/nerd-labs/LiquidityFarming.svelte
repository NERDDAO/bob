
<script>
  import { ethers } from "ethers";
  import { createAccount, createBalance, createReadContract, createWriteContract } from "@byteatatime/wagmi-svelte";

  export let config;

  $: ({ address } = createAccount());
  let amount = 0;
  let isStaking = true;

  $: tokenBalance = useTokenBalance(config.tokenContractName, $address);
  $: stakedBalance = useStakedBalance(config.farmContractName, $address);
  $: earnedRewards = useEarned(config.farmContractName, $address);

  $: ({ writeContractAsync: writeStake, isPending: isStakePending } = createWriteContract(config.farmContractName));
  $: ({ writeContractAsync: writeUnstake, isPending: isUnstakePending } = createWriteContract(config.farmContractName));
  $: ({ writeContractAsync: writeClaim, isPending: isClaimPending } = createWriteContract(config.farmContractName));

  function useTokenBalance(tokenContract, address) {
    const { data: balance } = createReadContract({
      contractName: tokenContract,
      functionName: "balanceOf",
      args: [address],
    });
    return balance;
  }

  function useStakedBalance(farmContract, address) {
    const { data: stakedBalance } = createReadContract({
      contractName: farmContract,
      functionName: "balanceOf",
      args: [address],
    });
    return stakedBalance;
  }

  function useEarned(farmContract, address) {
    const { data: earned } = createReadContract({
      contractName: farmContract,
      functionName: "earned",
      args: [address],
    });
    return earned;
  }
</script>

<div class="card w-96 bg-base-100 shadow-sm border-gray-300 w-full md:w-auto">
  <div class="card-body">
    <h2 class="card-title">{config.farmName} Liquidity Farm</h2>
    <div class="stats flex flex-col">
      <div class="stat place-items-center">
        <div class="stat-title">{config.tokenSymbol} Balance:</div>
        <div class="stat-value">
          {$tokenBalance?.toFixed(3)} <span class="stat-desc">{config.tokenSymbol}</span>
        </div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-title">Staked Balance:</div>
        <div class="stat-value">
          {$stakedBalance?.toFixed(3)} <span class="stat-desc">{config.tokenSymbol}</span>
        </div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-title">Earned Rewards:</div>
        <div class="stat-value">
          {$earnedRewards?.toFixed(3)} <span class="stat-desc">{config.tokenSymbol}</span>
        </div>
      </div>
    </div>
  </div>
</div>

