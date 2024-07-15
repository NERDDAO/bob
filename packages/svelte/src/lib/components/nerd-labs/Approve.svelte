<script lang="ts">
  import { ethers } from "ethers";
  import { createScaffoldWriteContract } from "$lib/runes/scaffoldWriteContract.svelte";
  import { createScaffoldReadContract } from "$lib/runes/scaffoldReadContract.svelte";

  import { createScaffoldContract } from "$lib/runes/scaffoldContract.svelte";
  import { createAccount } from "@byteatatime/wagmi-svelte";

  let { contractName, spender } = $props<{
    contractName: "CBDC" | "WCBDC";
    spender: "WCBDC" | "xStakingPool";
  }>();

  const { data: contract, isLoading } = $derived.by(() => createScaffoldContract({ contractName }));

  const { data: spenderContract, isLoading: isSpenderLoading } = $derived.by(() =>
    createScaffoldContract({ contractName: spender }),
  );

  const { address } = $derived.by(createAccount());
  const { data: cbdcAllowance } = $derived.by(
    createScaffoldReadContract(() => ({
      contractName,
      functionName: "allowance",
      args: [address, spenderContract?.address],
    })),
  );

  const { isMining, writeContractAsync } = $derived.by(createScaffoldWriteContract(contractName));

  const amount = ethers.MaxUint256;

  async function handleApprove() {
    const variables: {
      contractName: "RebaseToken";
      functionName: "approve";
      args: any[];
    } = {
      contractName: "RebaseToken",
      functionName: "approve",
      args: [spenderContract?.address, amount],
    };

    if (writeContractAsync) {
      await writeContractAsync(variables);
    }
  }
</script>

<div class="mx-auto mt-6 max-w-md rounded-lg bg-base-300 p-6">
  {#if !isLoading}
    {console.log(contract)}
  {/if}
  {#if !cbdcAllowance || cbdcAllowance <= 0n}
    {console.log(cbdcAllowance, contract)}
    <button class="btn btn-primary" on:click={handleApprove} disabled={isMining}>
      {#if isMining}
        <span class="loading loading-spinner loading-sm"></span>
      {:else}
        Approve
      {/if}
    </button>
  {/if}
</div>
