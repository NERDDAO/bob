<script lang="ts">
  import { ethers } from "ethers";
  import { onMount } from "svelte";
  import { createScaffoldWriteContract } from "$lib/runes/scaffoldWriteContract.svelte";

  import { Approve } from "$lib/components/nerd-labs";

  const { fnName, balance } = $props();

  const contractName = "WBOB";

  const { writeContractAsync, isMining } = $derived.by(createScaffoldWriteContract(contractName));

  async function handleMintBurn() {
    const variables: any = {
      functionName: fnName,
      args: [balance],
    };

    if (writeContractAsync) {
      await writeContractAsync(variables);
    }
  }

  /*
export function WrapCBDC(args: { balance: bigint; fName: string; onApproveSuccess: ERC20ApproveProps }) {
  const contractName = "WBOB";
  //const spender = externalContracts[31337].WBOB.address;
  //const amount = ethers.MaxUint256;
  // Adjusted to match the expected hook usage
  const { writeContractAsync, isMining } = useScaffoldWriteContract(contractName);
  const { fName: functionName, balance } = args;
  console.log(functionName);

  const handleApprove = async () => {
    // Constructing the variables parameter correctly
    const variables = {
      functionName: functionName.toString(),
      args: [balance] as const,
    };

    if (writeContractAsync) {
      await writeContractAsync(variables);
      args.onApproveSuccess();
    }
  };



  */
</script>

<div>
  <Approve contractName="RebaseToken" spender="Wrapper" />
  <button class="btn btn-primary" on:click={handleMintBurn} disabled={isMining}>
    {#if isMining}
      <span class="loading loading-spinner loading-sm"></span>
    {:else}
      Mint/Burn
    {/if}
  </button>
</div>
