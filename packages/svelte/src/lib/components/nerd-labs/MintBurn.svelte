<script lang="ts">
  import { ethers } from "ethers";
  import { onMount } from "svelte";
  import { createScaffoldWriteContract } from "$lib/runes/scaffoldWriteContract.svelte";
  import { createAccount } from "@byteatatime/wagmi-svelte";

  const address = $derived.by(createAccount());

  const contractName = "RebaseToken";

  const amount = ethers.MaxUint256;

  const { writeContractAsync, isMining } = $derived.by(createScaffoldWriteContract(contractName));

  onMount(async () => {});

  async function handleApprove() {
    const variables = {
      contractName: <"RebaseToken">contractName,
      functionName: <"approve">"approve",
      args: <any>[address, amount],
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
    Mint/Burn
  {/if}
</button>
