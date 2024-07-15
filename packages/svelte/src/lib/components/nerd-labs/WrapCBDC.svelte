<script lang="ts">
  import { ethers } from "ethers";
  import { createScaffoldWriteContract } from "$lib/runes/scaffoldWriteContract.svelte";
  import { onMount } from "svelte";

  import { createAccount } from "@byteatatime/wagmi-svelte";
  import { createScaffoldReadContract } from "$lib/runes/scaffoldReadContract.svelte";
  import { MintBurn } from "$lib/components/nerd-labs";

  let { fName, balance, percentage } = $props();

  const contractName = fName === "deposit" ? "WBOB" : "RebaseToken";
  const { address } = $derived.by(createAccount());
  const { data: cbdcBalance } = $derived.by(
    createScaffoldReadContract(() => ({ contractName, functionName: "balanceOf", args: [address] })),
  );

  function handlePercentageChange(value: string) {
    const newPercentage = BigInt(Math.min(Math.max(Number(value), 0), 100));
    percentage = newPercentage;
    if (cbdcBalance) {
      balance = (BigInt(cbdcBalance) * newPercentage) / 100n;
    }
  }
</script>

<div class="form-control">
  <label class="label">
    <span class="label-text">Amount to {fName === "deposit" ? "Wrap" : "Unwrap"}</span>
  </label>
  <label class="input-group">
    <input type="number" placeholder={cbdcBalance} class="input input-bordered" bind:value={balance} />
    <span>{fName === "deposit" ? "cBDC" : "wBOB"}</span>
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
<MintBurn fnName="deposit" balance />
