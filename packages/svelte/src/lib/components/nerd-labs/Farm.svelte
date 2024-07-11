<script>
  import { createAccount } from "@byteatatime/wagmi-svelte";
  import LiquidityFarming from "./LiquidityFarming.svelte";
  import Staking from "./Staking.svelte";
  import BankOfBased from "../components/BankOfBased.svelte";
  import MintBurn from "./MintBurn.svelte";

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

<div class="w-full md:w-auto">
  <div class="collapse bg-base-300 border border-gray-300 mx-6 w-full md:w-auto">
    <input type="radio" name="my-accordion-1" checked>
    <div class="collapse-title text-xl font-medium cursor-pointer">WCBDC Staking</div>
    <div class="collapse-content flex flex-col space-x-2 justify-center w-full md:w-auto">
      <MintBurn />
    </div>
  </div>
  <div class="collapse bg-base-300 border border-gray-300 mx-6 w-full md:w-auto">
    <input type="radio" name="my-accordion-1">
    <div class="collapse-title text-xl font-medium cursor-pointer">FARMS</div>
    <div class="collapse-content flex flex-row space-x-12 p-4 justify-center w-full md:w-auto">
      <Staking config={stakingConfig} FarmEarnings={OptionalFarmEarningsComponent} />
      <LiquidityFarming config={daiUsdcConfig} />
    </div>
  </div>
  <div class="collapse bg-base-300 border border-gray-300 mx-6 w-full md:w-auto">
    <input type="radio" name="my-accordion-1">
    <div class="collapse-title text-xl font-medium cursor-pointer">INFO</div>
    <div class="collapse-content flex flex-col space-x-2 justify-center w-full md:w-auto">
      <BankOfBased />
    </div>
  </div>
</div>
