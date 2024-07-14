<script lang="ts">
  import { ethers } from "ethers";
  import { createScaffoldWriteContract } from "$lib/runes/scaffoldWriteContract.svelte";

  let { fName, balance, percentage } = $props();

  const contractName = fName === "deposit" ? "RebaseToken" : "WBOB";

  const { writeContractAsync, isMining } = $derived.by(createScaffoldWriteContract(contractName));

  let amount: bigint = $state(balance);

  $effect(() => {
    amount = balance;
  });

  function handlePercentageChange(value: string) {
    const newPercentage = BigInt(Math.min(Math.max(Number(value), 0), 100));
    percentage = newPercentage;
  }

  async function handleWrap() {
    const variables: any = {
      contractName: <"WBOB">contractName,
      functionName: <"Mint" | "Burn">fName,
      args: [amount],
    };

    if (writeContractAsync) {
      await writeContractAsync(variables);
    }
  }
</script>

<div class="form-control">
  <label class="label">
    <span class="label-text">Amount to {fName === "deposit" ? "Wrap" : "Unwrap"}</span>
  </label>
  <label class="input-group">
    <input type="number" placeholder="0.01" class="input input-bordered" bind:value={amount} />
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
    on:input={e => handlePercentageChange(e.target.value)}
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

<button class="btn btn-primary mt-4" on:click={handleWrap} disabled={isMining}>
  {#if isMining}
    <span class="loading loading-spinner loading-sm"></span>
  {:else}
    {fName === "deposit" ? "Wrap" : "Unwrap"}
  {/if}
</button>
