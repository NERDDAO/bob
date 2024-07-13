<script>
  import { createWriteContract } from "@byteatatime/wagmi-svelte";

   let {balance, fName} = $props();

  const contractName = "WBOB";

  function createWrapCBDC() {
    let isMining = $state(false);

    const { writeContractAsync, isPending } = $derived.by(() => 
      createWriteContract(contractName)
    );

    async function handleWCDBC() {
      const variables = {
        functionName: fName,
        args: [balance] as const,
      };

      if (writeContractAsync) {
        isMining = true;
        await writeContractAsync(variables);
        isMining = false;
      }
    }


  }

  const { isMining, handleWCDBC } = createWrapCBDC();
</script>

<div class="form-control w-full md:w-auto p-4">
  <button
    class="btn btn-primary w-full md:w-auto"
    on:click={handleWCDBC}
    disabled={isMining}
  >
    {#if isMining}
      <span class="loading loading-spinner loading-sm"></span>
    {:else if fName === "deposit"}
      Wrap {(Number(balance) * 1e-9).toFixed(2)}
    {:else}
      Burn {(Number(balance) * 1e-18).toFixed(2)}
    {/if}
  </button>
</div>
