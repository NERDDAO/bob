
<script>
  import { ethers } from "ethers";
  import { createAccount, createBalance, createReadContract, createWriteContract } from "@byteatatime/wagmi-svelte";

  import { derived } from 'svelte/store';
  let {config} =$props();
  const { address } = $derived.by(createAccount());
  let amount = $state(0);
  let isStaking = $state(true);
  const tokenBalance = $derived.by(() => useTokenBalance(config.tokenContractName, address));
  const stakedBalance = $derived.by(() => useStakedBalance(config.farmContractName, address));
  const earnedRewards = $derived.by(() => useEarned(config.farmContractName, address));

  const { writeContractAsync: writeStake, isPending: isStakePending } = $derived.by(() => 
    createWriteContract(config.farmContractName)
  );
  const { writeContractAsync: writeUnstake, isPending: isUnstakePending } = $derived.by(() => 
    createWriteContract(config.farmContractName)
  );
  const { writeContractAsync: writeClaim, isPending: isClaimPending } = $derived.by(() => 
    createWriteContract(config.farmContractName)
  );

  // Update the balance functions to use $derived.by
  const useTokenBalance = (tokenContract, address) => {
    const { data: balance } = $derived.by(() => createReadContract({
      contractName: tokenContract,
      functionName: "balanceOf",
      args: [address],
    }));
    return balance;
  };

  const useStakedBalance = (farmContract, address) => {
    const { data: stakedBalance } = $derived.by(() => createReadContract({
      contractName: farmContract,
      functionName: "balanceOf",
      args: [address],
    }));
    return stakedBalance;
  };

  const useEarned = (farmContract, address) => {
    const { data: earned } = $derived.by(() => createReadContract({
      contractName: farmContract,
      functionName: "earned",
      args: [address],
    }));
    return earned;
  };
</script>

<div class="card w-96 bg-base-100 shadow-sm border-gray-300 w-full md:w-auto">
  <div class="card-body">
    <h2 class="card-title">{config.farmName} Liquidity Farm</h2>
    <div class="stats flex flex-col">
  <div class="stat place-items-center">
    <div class="stat-title">{config.tokenSymbol} Balance:</div>
    <div class="stat-value">
      {tokenBalance?.toFixed(3)} <span class="stat-desc">{config.tokenSymbol}</span>
    </div>
  </div>
  <div class="stat place-items-center">
    <div class="stat-title">Staked Balance:</div>
    <div class="stat-value">
      {stakedBalance?.toFixed(3)} <span class="stat-desc">{config.tokenSymbol}</span>
    </div>
  </div>
  <div class="stat place-items-center">
    <div class="stat-title">Earned Rewards:</div>
    <div class="stat-value">
      {earnedRewards?.toFixed(3)} <span class="stat-desc">{config.tokenSymbol}</span>
    </div>
  </div>
</div>  </div>
</div>

