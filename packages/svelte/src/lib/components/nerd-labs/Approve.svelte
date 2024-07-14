<script lang="ts">
  import { ethers } from "ethers";
  import { onMount } from "svelte";
  import { createScaffoldWriteContract } from "$lib/runes/scaffoldWriteContract.svelte";
  import { createAccount } from "@byteatatime/wagmi-svelte";
  import { Address, Balance } from "$lib/components/scaffold-eth";

  const contractName = "RebaseToken";
  const { address } = $derived.by(createAccount());

  const { isMining, writeContractAsync } = $derived.by(createScaffoldWriteContract(contractName));

  const amount = ethers.MaxUint256;

  async function handleApprove() {
    const variables = {
      contractName: <"RebaseToken">"RebaseToken",
      functionName: <"approve">"approve",
      args: <any>[address, amount],
    };

    if (writeContractAsync) {
      await writeContractAsync(variables);
    }
  }
</script>

<div class="mx-auto mt-6 max-w-md rounded-lg bg-base-300 p-6">
  <h2 class="mb-4 text-2xl font-bold">Wrap/Unwrap</h2>

  <div class="mb-2 text-sm font-semibold">
    Address: <Address {address} />
  </div>
  <button class="btn btn-primary" on:click={handleApprove} disabled={isMining}>
    {#if isMining}
      <span class="loading loading-spinner loading-sm"></span>
    {:else}
      Mint/Burn
    {/if}
  </button>

  <div class="mb-2 text-sm font-semibold">
    Balance: <Balance {address} />
  </div>
</div>
