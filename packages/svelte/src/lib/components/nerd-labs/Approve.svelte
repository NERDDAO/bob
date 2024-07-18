<script lang="ts">
  import { ethers } from "ethers";
  import { createScaffoldWriteContract } from "$lib/runes/scaffoldWriteContract.svelte";
  import { createScaffoldReadContract } from "$lib/runes/scaffoldReadContract.svelte";

  import { createDeployedContractInfo } from "$lib/runes/deployedContractInfo.svelte";
  import { createAccount } from "@byteatatime/wagmi-svelte";

  const { address } = $derived.by(createAccount());

  let { contractName, spender } = $props<{
    contractName: "CBDC" | "WCBDC" | "wCBDCwETHLP";
    spender: "WCBDC" | "xStakingPool" | "lpStakingPool";
  }>();

  const { data: contract } = $derived.by(createDeployedContractInfo(contractName));

  const { data: spenderContract } = $derived.by(createDeployedContractInfo(spender));

  const { data: cbdcAllowance, refetch } = $derived.by(
    createScaffoldReadContract(() => ({
      contractName,
      functionName: "allowance",
      args: [address, spenderContract?.address],
    })),
  );

  const { isMining, writeContractAsync } = $derived.by(createScaffoldWriteContract(contractName));

  const amount = ethers.MaxUint256;

  async function handleApprove() {
    const variables = {
      contractName,
      functionName: "approve",
      args: [spenderContract?.address, amount],
    };

    if (writeContractAsync) {
      await writeContractAsync(variables);
      refetch();
    }
  }
</script>

{#if !cbdcAllowance || cbdcAllowance <= 0n}
  {console.log(cbdcAllowance, contract?.address)}
  <button class="secondary" on:click={handleApprove} disabled={isMining}>
    {#if isMining}
      <span class="loading loading-spinner loading-sm"></span>
    {:else}
      Approve
    {/if}
  </button>
{/if}
