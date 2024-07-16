<script lang="ts">
  import { ethers } from "ethers";
  import { onMount } from "svelte";
  import { createScaffoldWriteContract } from "$lib/runes/scaffoldWriteContract.svelte";

  import { Approve } from "$lib/components/nerd-labs";

  let { functionName, balance, contractName } = $props<{
    functionName: "deposit" | "burn" | "stake" | "withdraw" | "getReward";
    balance: BigInt;
    contractName: "WCBDC" | "xStakingPool" | "lpStakingPool";
  }>();

  const { writeContractAsync, isMining } = $derived.by(createScaffoldWriteContract(contractName));

  async function handleMintBurn() {
    const variables: any = {
      functionName,
      args: functionName == "getReward" ? [] : [balance],
    };

    if (writeContractAsync) {
      await writeContractAsync(variables);
    }
  }
</script>

<div class="farm-buttons">
  <Approve
    contractName={contractName == "lpStakingPool" ? "UniV2-LP" : "WCBDC" ? "CBDC" : "WCBDC"}
    spender={contractName}
  />
  <button class="primary" on:click={handleMintBurn} disabled={isMining}>
    {#if isMining}
      <span class="loading loading-spinner loading-sm"></span>
    {:else}
      {functionName}
    {/if}
  </button>
</div>

<style>
	button{
		margin-top: 1rem;
	}
</style>
