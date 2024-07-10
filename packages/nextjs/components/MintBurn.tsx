import { useEffect, useState } from "react";
import { Approve, WrapCBDC } from "./nerd-labs/Approve.tsx";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const MintBurn = () => {
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

  useEffect(() => {
    if (balanceRead.data) {
      setBalances(prev => ({ ...prev, cBDC: (balanceRead.data * percentages.cBDC) / 100n }));
    }
    if (wrappedBalanceRead.data) {
      setBalances(prev => ({ ...prev, wBOB: (wrappedBalanceRead.data * percentages.wBOB) / 100n }));
    }
  }, [balanceRead.data, wrappedBalanceRead.data, percentages]);

  const handlePercentageChange = (type, value) => {
    const newPercentage = BigInt(Math.min(Math.max(Number(value), 0), 100));
    setPercentages(prev => ({ ...prev, [type]: newPercentage }));
  };

  const renderPercentageButtons = type => {
    return [10, 25, 50, 75, 100].map(percent => (
      <button key={percent} className="btn" onClick={() => handlePercentageChange(type, percent)}>
        {percent}%
      </button>
    ));
  };

  return (
    <div className="card flex flex-col p-6">
      <div className="card-title flex-row">
        <p className="stat">
          <span className="stat-title">CBDC Treasury Balance:</span>{" "}
          <span className="stat-value">{Number(tBalanceRead?.data) * 1e-9}</span>
        </p>
        <p className="stat">
          <span className="stat-title">WCBDC Treasury Balance:</span>
          <span className="stat-value"> {Number(t2BalanceRead?.data) * 1e-18}</span>
        </p>
        <p className="stat">
          <span className="stat-title">Tax Rate:</span> {taxRate?.data?.toString()}bps
        </p>
      </div>
      <div className="card-title p-12 flex flex-row">
        {["cBDC", "wBOB"].map(type => (
          <div className="card-body flex flex-col" key={type}>
            <WrapCBDC
              onApproveSuccess={() => console.log(`${type} success`)}
              fName={type === "cBDC" ? "deposit" : "burn"}
              balance={balances[type]}
              percentage={percentages[type]}
              onPercentageChange={value => handlePercentageChange(type, value)}
            />
            <div className="flex flex-row">{renderPercentageButtons(type)}</div>
          </div>
        ))}
      </div>
      <div className="form-control">
        <Approve onApproveSuccess={() => console.log("Approved")} />
      </div>
    </div>
  );
};
export default MintBurn;
