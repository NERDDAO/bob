
<script>
  import { ethers } from "ethers";
  import { createAccount, createBalance, createReadContract, createWriteContract } from "@byteatatime/wagmi-svelte";

  let {config} =$props();

  const { address } = $derived.by(createAccount());

  let amount = $state(0);
  let isStaking = $state(true);

  const useTokenBalance = (tokenContract, address) => {
    const { data: balance } = $derived.by(() => createReadContract({
      contractName: tokenContract,
      functionName: "balanceOf",
      args: [address],
    }));
    const humanBalance = $derived(balance ? Number(balance) * 10 ** -config.tokenDecimals : 0);
  };

  const useStakedBalance = (farmContract, address) => {
    const { data: stakedBalance } = $derived.by(() => createReadContract({
      contractName: farmContract,
      functionName: "balanceOf",
      args: [address],
    }));
    const humanStkBalance = $derived(stakedBalance ? Number(stakedBalance) * 10 ** -config.tokenDecimals : 0);
  };

  const useEarned = (farmContract, address) => {
    const { data: earned } = $derived.by(() => createReadContract({
      contractName: farmContract,
      functionName: "earned",
      args: [address],
    }));
    const humanEarned = $derived(earned ? Number(earned) * 10 ** -config.rewardDecimals : 0);
  };

  const tokenBalance = $derived(useTokenBalance(config.tokenContractName, address));
  const stakedBalance = $derived(useStakedBalance(config.farmContractName, address));
  const earnedRewards = $derived(useEarned(config.farmContractName, address));

  const { writeContractAsync: writeStake, isPending: isStakePending } = $derived.by(() => 
    createWriteContract(config.farmContractName)
  );
  const { writeContractAsync: writeUnstake, isPending: isUnstakePending } = $derived.by(() => 
    createWriteContract(config.farmContractName)
  );
  const { writeContractAsync: writeClaim, isPending: isClaimPending } = $derived.by(() => 
    createWriteContract(config.farmContractName)
  );

  const handleStake = async () => {
    try {
      await writeStake({
        functionName: "stake",
        args: [ethers.utils.parseUnits(amount.toString(), config.tokenDecimals)],
      });
    } catch (e) {
      console.error(`Error staking ${config.tokenSymbol}`, e);
    }
  };

  const handleUnstake = async () => {
    try {
      await writeUnstake({
        functionName: "withdraw",
        args: [ethers.utils.parseUnits(amount.toString(), config.tokenDecimals)],
      });
    } catch (e) {
      console.error(`Error unstaking ${config.tokenSymbol}`, e);
    }
  };

  const handleClaim = async () => {
    try {
      await writeClaim({
        functionName: "getReward",
      });
    } catch (e) {
      console.error(`Error claiming rewards`, e);
    }
  };

  const handleMaxAmount = () => {
    amount = isStaking ? tokenBalance : stakedBalance;
  };
</script>

<div class="card w-96 bg-base-100 shadow-sm border-gray-300 w-full md:w-auto">
  <div class="card-body">
    <h2 class="card-title">{config.farmName} Liquidity Farm</h2>
    <div class="stats flex flex-col">
      <div class="stat place-items-center">
        <div class="stat-title">{config.tokenSymbol} Balance:</div>
        <div class="stat-value">
          {tokenBalance.toFixed(3)} <span class="stat-desc">{config.tokenSymbol}</span>
        </div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-title">Staked Balance:</div>
        <div class="stat-value">
          {stakedBalance.toFixed(3)} <span class="stat-desc">{config.tokenSymbol}</span>
        </div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-title">Earned Rewards:</div>
        <div class="stat-value">
          {earnedRewards.toFixed(3)} <span class="stat-desc">{config.tokenSymbol}</span>
        </div>
      </div>
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Amount</span>
        <span class="label-text-alt cursor-pointer" on:click={handleMaxAmount}>
          MAX
        </span>
      </label>
      <input
        type="number"
        placeholder="Enter amount"
        class="input input-bordered"
        bind:value={amount}
      />
      <span class="underline cursor-pointer text-sm stat-desc" on:click={() => isStaking = !isStaking}>
        {isStaking ? "Switch to Unstake" : "Switch to Stake"}
      </span>
    </div>
    <div class="card-actions justify-end">
      <button
        class="btn btn-secondary"
        on:click={isStaking ? handleStake : handleUnstake}
        disabled={isStaking ? isStakePending : isUnstakePending}
      >
        {isStaking ? (isStakePending ? "Staking..." : "Stake") : isUnstakePending ? "Unstaking..." : "Unstake"}
      </button>
      <button class="btn btn-accent" on:click={handleClaim} disabled={isClaimPending}>
        {isClaimPending ? "Claiming..." : "Claim Rewards"}
      </button>
    </div>
  </div>
</div>

