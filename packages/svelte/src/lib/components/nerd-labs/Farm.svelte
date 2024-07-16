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

<div class="farm-container">
  <div class="collapse w-full  ">
    <input type="radio" name="my-accordion-1" checked />

    <div class="collapse-title cursor-pointer text-xl font-medium">CBDC Wrapper</div>
    <div class="collapse-content flex w-full flex-col justify-center space-x-2 ">
      <WrapCBDC />
    </div>
  </div>
  <div class="collapse w-full  ">
    <input type="radio" name="my-accordion-1" />

    <div class="collapse-title cursor-pointer text-xl font-medium">wCBDC Yield</div>

    <div class="collapse-content flex w-full flex-col justify-center space-x-2 ">
      <XwCBDCWrapper />
    </div>
  </div>
  <div class="collapse w-full  ">
    <input type="radio" name="my-accordion-1" />

    <div class="collapse-title cursor-pointer text-xl font-medium">Liquidity Mining</div>

    <div class="collapse-content flex w-full flex-col justify-center space-x-2 ">
      <LPStaking />
    </div>
  </div>

  <div class="collapse w-full  ">
    <input type="radio" name="my-accordion-1" />

    <div class="collapse-title cursor-pointer text-xl font-medium">INFO</div>

    <div class="collapse-content flex w-full flex-col justify-center space-x-2 "></div>
  </div>
</div>

<style>
	.farm-container{
		display: flex;
		flex-direction: column;
	}
	.farm-container > div{
		border: 1px dashed rgb(211, 211, 211);
		border-radius: 0;
		padding: 20px;
	}

</style>
