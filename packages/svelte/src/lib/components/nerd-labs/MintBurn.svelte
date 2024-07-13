<script>
  import { createAccount, createReadContract, createWriteContract } from "@byteatatime/wagmi-svelte";
  import { Approve, WrapCBDC } from "./Approve.svelte";

  export let config;

  $: ({ address } = createAccount());

  let percentages = { cBDC: 100, wBOB: 100 };
  let customPercentage = "";

  $: cBDCBalance = useBalance(config.cBDCContractName, $address);
  $: wBOBBalance = useBalance(config.wBOBContractName, $address);
  $: treasuryCBDCBalance = useBalance(config.cBDCContractName, config.treasuryAddress);
  $: treasuryWBOBBalance = useBalance(config.wBOBContractName, config.treasuryAddress);
  $: taxRate = useTaxRate(config.wBOBContractName);

  function useBalance(contractName, address) {
    const { data: balance } = createReadContract({
      contractName,
      functionName: "balanceOf",
      args: [address],
    });
    return balance;
  }

  function useTaxRate(contractName) {
    const { data: taxRate } = createReadContract({
      contractName,
      functionName: "_taxRate",
      args: [],
    });
    return taxRate;
  }

  $: ({ writeContractAsync: writeDeposit, isPending: isDepositPending } = createWriteContract(config.wBOBContractName));
  $: ({ writeContractAsync: writeBurn, isPending: isBurnPending } = createWriteContract(config.wBOBContractName));

  function handlePercentageChange(type, value) {
    percentages[type] = Math.min(Math.max(Number(value), 0), 100);
  }

  function calculateAmount(balance, percentage) {
    return balance ? (BigInt(balance) * BigInt(percentage)) / 100n : 0n;
  }
</script>

<div class="card flex flex-col bg-base-100 w-96 md:w-auto">
  <div class="card-title flex-row w-full md:w-auto">
    <div class="stat">
      <div class="stat-title">CBDC Treasury Balance:</div>
      <div class="stat-value">{$treasuryCBDCBalance?.toFixed(9)}</div>
    </div>
    <div class="stat">
      <div class="stat-title">WCBDC Treasury Balance:</div>
      <div class="stat-value">{$treasuryWBOBBalance?.toFixed(18)}</div>
    </div>
    <div class="stat">
      <div class="stat-title">Tax Rate:</div>
      <div class="stat-value">{$taxRate?.toString()}bps</div>
    </div>
  </div>
  <div class="card-title p-12 flex flex-row w-full md:w-auto">
    {#each [{ type: 'cBDC', balance: $cBDCBalance, action: 'deposit' }, { type: 'wBOB', balance: $wBOBBalance, action: 'burn' }] as { type, balance, action }}
      <div class="card-body flex flex-col">
        <WrapCBDC
          on:approveSuccess={() => console.log(`${type} success`)}
          fName={action}
          balance={calculateAmount(balance, percentages[type])}
          percentage={percentages[type]}
          on:percentageChange={(event) => handlePercentageChange(type, event.detail)}
        />
        <div class="flex flex-row">
          {#each [10, 25, 50, 75, 100] as percent}
            <button class="btn" on:click={() => handlePercentageChange(type, percent)}>
              {percent}%
            </button>
          {/each}
        </div>
      </div>
    {/each}
  </div>
  <div class="form-control w-full md:w-auto p-16">
    <Approve on:approveSuccess={() => console.log("Approved")} />
  </div>
</div>
