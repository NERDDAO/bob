<script lang="ts">
  import { ethers } from "ethers";
  import { onMount } from "svelte";
  import { createScaffoldWriteContract } from "$lib/runes/scaffoldWriteContract.svelte";

  import { Approve } from "$lib/components/nerd-labs";

  let { functionName, balance, contractName } = $props<{
    functionName: "deposit" | "burn" | "stake" | "withdraw";
    balance: BigInt;
    contractName: "WCBDC" | "xStakingPool" | "LPStakingPool";
  }>();

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
  <Approve contractName={contractName == "WCBDC" ? "CBDC" : "WCBDC"} spender={contractName} />
  <button class="btn btn-primary w-full" on:click={handleMintBurn} disabled={isMining}>
    {#if isMining}
      <span class="loading loading-spinner loading-sm"></span>
    {:else}
      {functionName}
    {/if}
  </button>
</div>
