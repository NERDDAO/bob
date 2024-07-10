import LiquidityFarming from "./nerd-labs/LiquidityFarming";
import Staking from "./nerd-labs/Staking";
import BankOfBased from "~~/components/BankOfBased";
import FarmCard from "~~/components/FarmCard";
import StakeCard from "~~/components/FarmCard";
import MintBurn from "~~/components/MintBurn";

const Farm = () => {
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
    return <p>lmao</p>;
  };
  return (
    <>
      <div className="collapse bg-base-200 border border-gray-300 mx-6">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">INFO</div>
        <div className="collapse-content flex flex-col space-x-2 justify-center">
          <BankOfBased />
        </div>
      </div>
      <div className="collapse bg-base-200 border border-gray-300 mx-6">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">WCBDC Staking</div>
        <div className="collapse-content">
          <MintBurn />
        </div>
      </div>
      <div className="collapse bg-base-200 border border-gray-300 mx-6">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">FARMS</div>
        <div className="collapse-content flex flex-row space-x-2 justify-center p-6">
            <Staking config={stakingConfig} FarmEarnings={OptionalFarmEarningsComponent} />
            <LiquidityFarming config={daiUsdcConfig} />
        </div>
      </div>
    </>
  );
};

export default Farm;
