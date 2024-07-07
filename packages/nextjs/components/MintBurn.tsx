import { useEffect, useState } from "react";
import { Approve, WrapCBDC } from "./nerd-labs/Approve.tsx";
import { useAccount } from "wagmi";
import { useScaffoldContract, useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

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
    setPercentages(prev => ({ ...prev, [type]: BigInt(value) }));
  };

  const handleCustomPercentageChange = e => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 0 && Number(value) <= 100)) {
      setCustomPercentage(value);
    }
  };

  const applyCustomPercentage = type => {
    if (customPercentage !== "") {
      const newPercentage = BigInt(customPercentage);
      if (newPercentage <= 100n) {
        handlePercentageChange(type, newPercentage);
      }
    }
  };

  const renderPercentageButtons = type => {
    return [10, 25, 50, 75, 100].map(percent => (
      <button key={percent} className="btn" onClick={() => handlePercentageChange(type, percent)}>
        {percent}%
      </button>
    ));
  };

  return (
    <div className="card flex flex-row">
      <div className="card-title p-12 flex flex-col">
        <p>CBDC Treasury Balance: {Number(tBalanceRead?.data) * 1e-9}</p>

        <p>WCBDC Treasury Balance: {Number(t2BalanceRead?.data) * 1e-18}</p>
        <p>Tax Rate: {taxRate.data.toString()}bps</p>

        {["cBDC", "wBOB"].map(type => (
          <div className="card-body flex flex-col" key={type}>
            <WrapCBDC
              onApproveSuccess={() => console.log(`${type} success`)}
              fName={type === "cBDC" ? "deposit" : "burn"}
              balance={balances[type]}
            />
            <p>Balance: {balances[type]?.toString()}</p>
            <div className="flex flex-row">{renderPercentageButtons(type)}</div>
          </div>
        ))}

        <p>Address: {account.address}</p>

        <div className="form-control">
          <Approve onApproveSuccess={() => console.log("Approved")} />
          <input
            className="input"
            type="number"
            value={customPercentage}
            onChange={handleCustomPercentageChange}
            placeholder="Custom %"
            min="0"
            max="100"
          />
          <button className="btn" onClick={() => applyCustomPercentage("cBDC")}>
            Apply to cBDC
          </button>
          <button className="btn" onClick={() => applyCustomPercentage("wBOB")}>
            Apply to wBOB
          </button>
        </div>
      </div>
    </div>
  );
};

export default MintBurn;
