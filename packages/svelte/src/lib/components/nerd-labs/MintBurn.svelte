<script lang="ts">
  import { ethers } from "ethers";
  import { onMount } from "svelte";
  import { createScaffoldWriteContract } from "$lib/runes/scaffoldWriteContract.svelte";

  import { Approve } from "$lib/components/nerd-labs";

  let { functionName, balance } = $props<{
    functionName: "deposit" | "burn";
    balance: BigInt;
  }>();

  const contractName = "WBOB";

  const { writeContractAsync, isMining } = $derived.by(createScaffoldWriteContract(contractName));

  async function handleMintBurn() {
    const variables: any = {
      functionName,
      args: [balance],
    };

    if (writeContractAsync) {
      await writeContractAsync(variables);
    }
  }
</script>

<div>
  <Approve contractName="RebaseToken" spender="WBOB" />
  <button class="btn btn-primary w-full" on:click={handleMintBurn} disabled={isMining}>
    {#if isMining}
      <span class="loading loading-spinner loading-sm"></span>
    {:else}
      {functionName === "deposit" ? "Wrap" : "Unwrap"}
    {/if}
  </button>
</div>
