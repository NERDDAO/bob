<script lang="ts">
  import { ethers } from "ethers";
  import { onMount } from "svelte";
  import { createScaffoldWriteContract } from "$lib/runes/scaffoldWriteContract.svelte";

  import { createAccount } from "@byteatatime/wagmi-svelte";
  import { createScaffoldReadContract } from "$lib/runes/scaffoldReadContract.svelte";
  import { createDeployedContractInfo } from "$lib/runes/deployedContractInfo.svelte";
  import { Approve } from "$lib/components/nerd-labs";

  const { address } = $derived.by(createAccount());
  let { functionName, balance, contractName } = $props<{
    functionName: "deposit" | "burn" | "stake" | "withdraw" | "getReward";
    balance: BigInt;
    contractName: "WCBDC" | "xStakingPool" | "lpStakingPool";
  }>();

  const { writeContractAsync, isMining } = $derived.by(createScaffoldWriteContract(contractName));
  const approvedContractName =
    contractName == "lpStakingPool" ? "wCBDCwETHLP" : contractName == "WCBDC" ? "CBDC" : "WCBDC";
  async function handleMintBurn() {
    const variables: any = {
      functionName,
      args: functionName == "getReward" ? [] : [balance],
    };

    if (writeContractAsync) {
      await writeContractAsync(variables);
    }
  }

  const { data: contract } = $derived.by(createDeployedContractInfo(contractName));

  const { data: cbdcAllowance } = $derived.by(
    createScaffoldReadContract(() => ({
      contractName: approvedContractName,
      functionName: "allowance",
      args: [address, contract?.address],
    })),
  );
</script>

<div class="farm-buttons">
  {#if functionName !== "getReward"}
    <Approve
      contractName={contractName == "lpStakingPool" ? "wCBDCwETHLP" : contractName == "WCBDC" ? "CBDC" : "WCBDC"}
      spender={contractName}
    />
  {/if}

  {#if (cbdcAllowance && cbdcAllowance >= 0n) || functionName == "getReward"}
    <button class="primary" on:click={handleMintBurn} disabled={isMining}>
      {#if isMining}
        <span class="loading loading-spinner loading-sm"></span>
      {:else}
        {functionName}
      {/if}
    </button>
  {/if}
</div>

<style>
  button {
    margin-top: 1rem;
  }
</style>
