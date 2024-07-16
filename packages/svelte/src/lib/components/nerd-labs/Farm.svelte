<script lang="ts">
  import { createAccount } from "@byteatatime/wagmi-svelte";

  import LPStaking from "./LPStaking.svelte";

  import XwCBDCWrapper from "./XwCBDCWrapper.svelte";

  // import BankOfBased from "./BankOfBased.svelte";

  import WrapCBDC from "./WrapCBDC.svelte";

  const account = $derived.by(createAccount());

  const stakingConfig = {
    tokenContractName: "MyToken",

    tokenAddress: "0x...",

    stakingPoolName: "Wrapped CBDC Staking",

    stakingPoolAddress: "0x...",

    tokenSymbol: "WCBDC",

    tokenDecimals: 18,
  };

  const daiUsdcConfig = {
    farmName: "WCBDC/ETH",

    tokenContractName: "WCBDCETHLP",

    farmContractName: "WCDBCETHFarm",

    tokenSymbol: "WCDBC/ETH-UniV2",
    rewardSymbol: "WCDBC",
    tokenDecimals: 18,
    rewardDecimals: 18,
  };

  const OptionalFarmEarningsComponent = () => {
    return "<p>lmao</p>";
  };
</script>

<div class="card relative w-1/3 items-center md:w-auto">
  <div class="collapse mx-6 w-full border border-gray-300 bg-base-300 md:w-auto">
    <input type="radio" name="my-accordion-1" checked />

    <div class="collapse-title cursor-pointer text-xl font-medium">CBDC Wrapper</div>
    <div class="collapse-content flex w-full flex-col justify-center space-x-2 md:w-auto">
      <WrapCBDC />
    </div>
  </div>
  <div class="collapse mx-6 w-full border border-gray-300 bg-base-300 md:w-auto">
    <input type="radio" name="my-accordion-1" />

    <div class="collapse-title cursor-pointer text-xl font-medium">wCBDC Yield</div>

    <div class="collapse-content flex w-full flex-col justify-center space-x-2 md:w-auto">
      <XwCBDCWrapper />
    </div>
  </div>
  <div class="collapse mx-6 w-full border border-gray-300 bg-base-300 md:w-auto">
    <input type="radio" name="my-accordion-1" />

    <div class="collapse-title cursor-pointer text-xl font-medium">Liquidity Mining</div>

    <div class="collapse-content flex w-full flex-col justify-center space-x-2 md:w-auto">
      <LPStaking />
    </div>
  </div>

  <div class="collapse mx-6 w-full border border-gray-300 bg-base-300 md:w-auto">
    <input type="radio" name="my-accordion-1" />

    <div class="collapse-title cursor-pointer text-xl font-medium">INFO</div>

    <div class="collapse-content flex w-full flex-col justify-center space-x-2 md:w-auto"></div>
  </div>
</div>

<style>
  .collapse,
  .collapse-content {
    border-radius: 0; /* Remove border radius */
  }

  .collapse {
    margin-bottom: 1rem; /* Add vertical spacing between sections */
  }
</style>
