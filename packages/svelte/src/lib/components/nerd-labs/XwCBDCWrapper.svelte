<script lang="ts">
  import { ethers } from "ethers";
  import { createScaffoldWriteContract } from "$lib/runes/scaffoldWriteContract.svelte";
  import { onMount } from "svelte";

  import { createAccount } from "@byteatatime/wagmi-svelte";
  import { createScaffoldReadContract } from "$lib/runes/scaffoldReadContract.svelte";
  import { MintBurn } from "$lib/components/nerd-labs";

  let percentage: BigInt = $state(0n);
  let balance: BigInt = $state(0n);
  let humanBalance: number = $state(0);
  let toggleState: Boolean = $state(true);

  const contractName: "WCBDC" | "xStakingPool" = $derived(toggleState === true ? "WCBDC" : "xStakingPool");

  const { address } = $derived.by(createAccount());
  const { data: cbdcBalance, refetch } = $derived.by(
    createScaffoldReadContract(() => ({ contractName, functionName: "balanceOf", args: [address] })),
  );

  const { data: xcbdcBalance } = $derived.by(
    createScaffoldReadContract(() => ({ contractName: "xStakingPool", functionName: "balanceOf", args: [address] })),
  );

  const { data: pricePerShare } = $derived.by(
    createScaffoldReadContract(() => ({
      contractName: "xStakingPool",
      functionName: "getPricePerFullShare",
      args: [],
    })),
  );

  function handlePercentageChange(value: string) {
    const newPercentage = BigInt(Math.min(Math.max(Number(value), 0), 100));
    percentage = newPercentage;
    let currentBalance = toggleState == true ? cbdcBalance : xcbdcBalance;
    if (currentBalance) {
      balance = (currentBalance * newPercentage) / 100n;
      humanBalance = Number(balance) * 1e-18;
    }
  }
  function handleInputChange() {
    balance = BigInt(humanBalance);
  }
  function toggle() {
    refetch();
    return (toggleState = !toggleState);
  }
</script>

<label class="checkbox-wrapper"
  ><input type="checkbox" class="toggle" on:click={() => toggle()} />
  {toggleState === true ? "Stake" : "Withdraw"} Mode</label
>
<div class="form-control">
  <span class="label-text">Amount to {toggleState === true ? "stake" : "withdraw"}</span>

  <stat class=" text-xs">price per share:{Number(pricePerShare) * 1e-18}</stat>
  <label class="input-group">
    <input
      type="number"
      placeholder=""
      class="input input-bordered"
      bind:value={humanBalance}
      on:change={handleInputChange}
    />
    <span>{toggleState === true ? "WCBDC" : "XWCBDC"}</span>
  </label>
</div>
<div class="stats p-2">
  <span class="stat-title">wCBDC Balance</span><span class="stat-value"
    >{(Number(cbdcBalance?.toString()) * 1e-18).toFixed(4)}</span
  >

  <span class="stat-title">xwCBDC Balance</span><span class="stat-value"
    >{(Number(xcbdcBalance) * 1e-18).toFixed(4)}</span
  >
  <span class="stat-title">
		Underlying wCBDC: <br />
		<span class="stat-value">{(Number(xcbdcBalance) * 1e-18 * (Number(pricePerShare) * 1e-18)).toFixed(4)}</span>
	</span
  >
</div>
<div class="form-control">
  <span class="label-text">Percentage</span>

  <input
    type="range"
    min="0"
    max="100"
    bind:value={percentage}
    on:input={e => {
      handlePercentageChange(e.target.value);

      console.log(balance, cbdcBalance, percentage, address, contractName);
    }}
    class="range"
  />
  <div class="flex w-full justify-between px-2 text-xs">
    <span>0%</span>
    <span>25%</span>
    <span>50%</span>
    <span>75%</span>
    <span>100%</span>
  </div>
</div>
<MintBurn contractName="xStakingPool" functionName={toggleState === true ? "stake" : "withdraw"} {balance} />
