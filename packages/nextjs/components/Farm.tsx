import LiquidityFarming from "./nerd-labs/LiquidityFarming";
import Staking from "./nerd-labs/Staking.tsx";
import FarmCard from "~~/components/FarmCard";
import StakeCard from "~~/components/FarmCard";
import MintBurn from "~~/components/MintBurn";

const Farm = () => {
  const stakingConfig = {
    tokenContractName: "MyToken",
    tokenAddress: "0x...",
    stakingPoolName: "MyStakingPool",
    stakingPoolAddress: "0x...",
    tokenSymbol: "MTK",
    tokenDecimals: 18,
  };

  const daiUsdcConfig = {
    farmName: "DAI/USDC",
    tokenContractName: "DaiUsdcLP",
    farmContractName: "DaiUsdcFarm",
    tokenSymbol: "DU-LP",
    rewardSymbol: "REWARD",
    tokenDecimals: 18,
    rewardDecimals: 6,
  };

  const OptionalFarmEarningsComponent = () => {
    return <p>lmao</p>;
  };
  return (
    <>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">WCBDC Staking</div>
        <div className="collapse-content">
          <MintBurn />
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">FARMS</div>
        <div className="collapse-content flex flex-row space-x-2 p-6 justify-center">
          <Staking config={stakingConfig} FarmEarnings={OptionalFarmEarningsComponent} />
          <LiquidityFarming config={daiUsdcConfig} />
        </div>
      </div>
    </>
  );
};

export default Farm;
