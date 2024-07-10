import LiquidityFarming from "./nerd-labs/LiquidityFarming";
import Staking from "./nerd-labs/Staking";
import BankOfBased from "~~/components/BankOfBased";
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
    <div className="w-full md:w-auto">
      <div className="collapse bg-base-200 border border-gray-300 mx-6 w-full md:w-auto">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">INFO</div>
        <div className="collapse-content flex flex-col space-x-2 justify-center w-full md:w-auto">
          <BankOfBased />
        </div>
      </div>
      <div className="collapse bg-base-200 border border-gray-300 mx-6 w-full md:w-auto">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">WCBDC Staking</div>
        <div className="collapse-content flex flex-col space-x-2 justify-center w-full md:w-auto">
          <MintBurn />
        </div>
      </div>
      <div className="collapse bg-base-200 border border-gray-300 mx-6 w-full md:w-auto">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">FARMS</div>
        <div className="collapse-content flex flex-row space-x-12 p-4 justify-center w-full md:w-auto">
          <Staking config={stakingConfig} FarmEarnings={OptionalFarmEarningsComponent} />
          <LiquidityFarming config={daiUsdcConfig} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Farm;
