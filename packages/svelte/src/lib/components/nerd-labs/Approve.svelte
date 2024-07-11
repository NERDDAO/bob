<script lang="ts">
  import { ethers } from "ethers";
  import { onMount } from "svelte";
  import { createScaffoldWriteContract } from "$lib/runes/scaffoldWriteContract.svelte.ts";


  const contractName = "RebaseToken";
  const spender = "0x..."; // Replace with the actual spender address
  const amount = ethers.MaxUint256;

  let writeContractAsync;
  let isMining = false;

  onMount(async () => {
    const { writeContractAsync: writeContract, isMining: mining } = await createScaffoldWriteContract(contractName);
    writeContractAsync = writeContract;
    isMining = mining;
  });

  async function handleApprove() {
    const variables = {
      functionName: "approve",
      args: [spender, amount],
    };

    if (writeContractAsync) {
      await writeContractAsync(variables);
    }
  }
</script>

<button class="btn btn-primary" on:click={handleApprove} disabled={isMining}>
  {#if isMining}
    <span class="loading loading-spinner loading-sm"></span>
  {:else}
    Approve
  {/if}
</button>
