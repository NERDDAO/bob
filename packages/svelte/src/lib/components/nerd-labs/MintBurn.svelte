<script>
  import { createAccount, createContractRead } from "@byteatatime/wagmi-svelte";
  import { Approve, WrapCBDC } from "./nerd-labs/Approve.svelte";

  let percentages = $state({ cBDC: 100n, wBOB: 100n });
  let balances = $state({ cBDC: 0n, wBOB: 0n });
  let customPercentage = $state("");

  const { address } = $derived.by(createAccount());
  const treasury = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";

  const balanceRead = $derived.by(() =>
    createContractRead({
      contractName: "RebaseToken",
      functionName: "balanceOf",
      args: [address],
    })
  );

  const tBalanceRead = $derived.by(() =>
    createContractRead({
      contractName: "RebaseToken",
      functionName: "balanceOf",
      args: [treasury],
    })
  );

  const t2BalanceRead = $derived.by(() =>
    createContractRead({
      contractName: "WBOB",
      functionName: "balanceOf",
      args: [treasury],
    })
  );

  const wrappedBalanceRead = $derived.by(() =>
    createContractRead({
      contractName: "WBOB",
      functionName: "balanceOf",
      args: [address],
    })
  );

  const taxRate = $derived.by(() =>
    createContractRead({
      contractName: "WBOB",
      functionName: "_taxRate",
      args: [],
    })
  );

  $: {
    if (balanceRead.data) {
      balances.cBDC = (balanceRead.data * percentages.cBDC) / 100n;
    }
    if (wrappedBalanceRead.data) {
      balances.wBOB = (wrappedBalanceRead.data * percentages.wBOB) / 100n;
    }
  }

  function handlePercentageChange(type, value) {
    const newPercentage = BigInt(Math.min(Math.max(Number(value), 0), 100));
    percentages[type] = newPercentage;
  }

  function renderPercentageButtons(type) {
    return [10, 25, 50, 75, 100].map((percent) => (
      <button class="btn" on:click={() => handlePercentageChange(type, percent)}>
        {percent}%
      </button>
    ));
  }
</script>

<div class="card flex flex-col bg-base-100 w-96 md:w-auto">
  <div class="card-title flex-row w-full md:w-auto">
    <p class="stat">
      <span class="stat-title">CBDC Treasury Balance:</span>
      <span class="stat-value">{Number(tBalanceRead?.data) * 1e-9}</span>
    </p>
    <p class="stat">
      <span class="stat-title">WCBDC Treasury Balance:</span>
      <span class="stat-value">{Number(t2BalanceRead?.data) * 1e-18}</span>
    </p>
    <p class="stat">
      <span class="stat-title">Tax Rate:</span> {taxRate?.data?.toString()}bps
    </p>
  </div>
  <div class="card-title p-12 flex flex-row w-full md:w-auto">
    {#each ["cBDC", "wBOB"] as type}
      <div class="card-body flex flex-col">
        <WrapCBDC
          on:approveSuccess={() => console.log(`${type} success`)}
          fName={type === "cBDC" ? "deposit" : "burn"}
          balance={balances[type]}
          percentage={percentages[type]}
          on:percentageChange={(value) => handlePercentageChange(type, value)}
        />
        <div class="flex flex-row">
          {renderPercentageButtons(type)}
        </div>
      </div>
    {/each}
  </div>
  <div class="form-control w-full md:w-auto p-16">
    <Approve on:approveSuccess={() => console.log("Approved")} />
  </div>
</div>
