import FarmCard from "~~/components/FarmCard";
import StakeCard from "~~/components/FarmCard";
import MintBurn from "~~/components/MintBurn";

const Farm = () => {
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
          <FarmCard type="xWCBDC Staking" />

          <StakeCard type="wCDBC/ETH Farm" />
        </div>
      </div>
    </>
  );
};

export default Farm;
