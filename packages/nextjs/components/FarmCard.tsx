import { useEffect, useState } from "react";
import { Approve, WrapCBDC } from "./nerd-labs/Approve.tsx";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const FarmCard = (args = { type: string }) => {
  const { type } = args;
  const [percentages, setPercentages] = useState({ cBDC: 100n, wBOB: 100n });
  const [balances, setBalances] = useState({ cBDC: 0n, wBOB: 0n });
  const [customPercentage, setCustomPercentage] = useState("");

  const account = useAccount();
  const treasury = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
  const balanceRead = useScaffoldReadContract({
    contractName: "RebaseToken",
    functionName: "balanceOf",
    args: [account.address],
  });
  const tBalanceRead = useScaffoldReadContract({
    contractName: "RebaseToken",
    functionName: "balanceOf",
    args: [treasury],
  });
  const t2BalanceRead = useScaffoldReadContract({
    contractName: "WBOB",
    functionName: "balanceOf",
    args: [treasury],
  });

  const wrappedBalanceRead = useScaffoldReadContract({
    contractName: "WBOB",
    functionName: "balanceOf",
    args: [account.address],
  });

  const taxRate = useScaffoldReadContract({
    contractName: "WBOB",
    functionName: "_taxRate",
    args: [],
  });

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {type}</h2>
        Tax Rate:{taxRate.data.toString()}
        <br />
        wCBDC: {t2BalanceRead.data.toString()}
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FarmCard;
