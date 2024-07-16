<script lang="ts">
  import { ethers } from "ethers";
  import { createScaffoldWriteContract } from "$lib/runes/scaffoldWriteContract.svelte";
  import { onMount } from "svelte";

  import { createAccount } from "@byteatatime/wagmi-svelte";
  import { createScaffoldReadContract } from "$lib/runes/scaffoldReadContract.svelte";
  import { MintBurn } from "$lib/components/nerd-labs";

  let percentage: BigInt = $state(0n);
  let balance: BigInt = $state(0n);
  let toggleState: Boolean = $state(true);

  const contractName: "CBDC" | "WCBDC" = toggleState === true ? "CBDC" : "WBOB";

  const { address } = $derived.by(createAccount());
  const { data: cbdcBalance, refetch } = $derived.by(
    createScaffoldReadContract(() => ({ contractName, functionName: "balanceOf", args: [address] })),
  );

  function handlePercentageChange(value: string) {
    const newPercentage = BigInt(Math.min(Math.max(Number(value), 0), 100));
    percentage = newPercentage;
    if (cbdcBalance) {
      balance = (cbdcBalance * newPercentage) / 100n;
    }
  }
  function toggle() {
    refetch();
    return (toggleState = !toggleState);
  }
</script>

<label class="checkbox-wrapper"
  ><input type="checkbox" class="toggle" on:click={() => toggle()} />
  {toggleState === true ? "Wrap" : "Unwrap"} Mode</label
>
<div class="form-control">
  <label class="label"> </label>

  <span class="label-text">Amount to {toggleState === true ? "Wrap" : "Unwrap"}</span>
  <label class="input-group">
    <input type="number" placeholder="" class="input input-bordered" bind:value={balance} />
    <span>{toggleState === true ? "cBDC" : "wBOB"}</span>
  </label>
</div>

<div class="form-control">
  <label class="label">
    <span class="label-text">Percentage</span>
  </label>
  <input
    type="range"
    min="0"
    max="100"
    bind:value={percentage}
    on:input={e => {
      handlePercentageChange(e.target.value);

      console.log(balance, cbdcBalance, percentage, address);
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
<MintBurn contractName="WCBDC" functionName={toggleState === true ? "deposit" : "burn"} {balance} />
