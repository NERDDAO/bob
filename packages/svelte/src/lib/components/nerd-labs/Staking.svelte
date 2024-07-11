<script>
  import { createAccount, createBalance, createReadContract, createWriteContract } from "@byteatatime/wagmi-svelte";
  import { derived } from 'svelte/store';

  let {config, FarmEarnings} = $props();

  let amount = $state(0);
  let isStaking = $state(true);

  const { address } = $derived.by(createAccount());

  const useTokenBalance = (tokenContract, address) => {
    const { data: balance } = $derived.by(() => createReadContract({
      contractName: tokenContract,
      functionName: "balanceOf",
      args: [address],
    }));
    return derived(balance, $balance => $balance ? Number($balance) * 10 ** -config.tokenDecimals : 0);
  };

  const useStakedBalance = (stakingContract, address) => {
    const { data: stakedBalance } = $derived.by(() => createReadContract({
      contractName: stakingContract,
      functionName: "balanceOf",
      args: [address],
    }));
    return derived(stakedBalance, $stakedBalance => $stakedBalance ? Number($stakedBalance) * 10 ** -config.tokenDecimals : 0);
  };

  const usePricePerShare = (stakingContract) => {
    const { data: pricePerShare } = $derived.by(() => createReadContract({
      contractName: stakingContract,
      functionName: "getPricePerFullShare",
    }));
    return derived(pricePerShare, $pricePerShare => $pricePerShare ? Number($pricePerShare) * 10 ** -config.tokenDecimals : 0);
  };

  const tokenBalance = useTokenBalance(config.tokenContractName, address);
  const stakedBalance = useStakedBalance(config.stakingPoolName, address);
  const pricePerShare = usePricePerShare(config.stakingPoolName);

  const { writeContractAsync: writeStake, isPending: isStakePending } = $derived.by(() => 
    createWriteContract(config.stakingPoolName)
  );
  const { writeContractAsync: writeUnstake, isPending: isUnstakePending } = $derived.by(() => 
    createWriteContract(config.stakingPoolName)
  );

  const handleStake = async () => {
    try {
      await writeStake({
        functionName: "stake",
        args: [BigInt(amount * 10 ** config.tokenDecimals)],
      });
    } catch (e) {
      console.error(`Error staking ${config.tokenSymbol}`, e);
    }
  };

  const handleUnstake = async () => {
    try {
      await writeUnstake({
        functionName: "withdraw",
        args: [BigInt(amount * 10 ** config.tokenDecimals)],
      });
    } catch (e) {
      console.error(`Error unstaking ${config.tokenSymbol}`, e);
    }
  };

  const handleMaxAmount = () => {
    amount = isStaking ? $tokenBalance : $stakedBalance;
  };
</script>

<div class="card w-96 bg-base-100 shadow-sm md:w-auto">
  <div class="card-body">
    <h2 class="card-title">{config.tokenSymbol} Staking</h2>
    <div class="stats flex flex-col">
      <div class="stat place-items-center">
        <div class="stat-title">{config.tokenSymbol} Balance:</div>
        <div class="stat-value">
          {$tokenBalance.toFixed(3)} <span class="stat-desc">{config.tokenSymbol}</span>
        </div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-title">Staked Balance:</div>
        <div class="stat-value">
          {($stakedBalance * $pricePerShare).toFixed(3)} <span class="stat-desc">{config.tokenSymbol}</span>
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
      <br />
      <button
        class="btn btn-secondary"
        on:click={isStaking ? handleStake : handleUnstake}
        disabled={isStaking ? $isStakePending : $isUnstakePending}
      >
        {#if isStaking}
          {$isStakePending ? "Staking..." : "Stake"}
        {:else}
          {$isUnstakePending ? "Unstaking..." : "Unstake"}
        {/if}
      </button>
    </div>
  </div>
  {#if FarmEarnings}
    <svelte:component this={FarmEarnings} farmName={config.stakingPoolName} pricePerShare={$pricePerShare} />
  {/if}
</div>
