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
  const approvedContractName = contractName == "lpStakingPool" ? "wCBDCwETHLP" : "WCBDC" ? "CBDC" : "WCBDC";
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

  const { data: spenderContract } = $derived.by(createDeployedContractInfo(approvedContractName));

  const { data: cbdcAllowance } = $derived.by(
    createScaffoldReadContract(() => ({
      contractName: approvedContractName,
      functionName: "allowance",
      args: [address, contract?.address],
    })),
  );
</script>

<div class="farm-buttons">
  <Approve
    contractName={contractName == "lpStakingPool" ? "UniV2-LP" : "WCBDC" ? "CBDC" : "WCBDC"}
    spender={contractName}
  />

  {console.log(cbdcAllowance, contract?.address, "lmak", approvedContractName, contractName)}
  {#if cbdcAllowance && cbdcAllowance >= 0n}
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
