import React, { useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const Staking = ({ config, FarmEarnings }) => {
  const { address } = useAccount();
  const [amount, setAmount] = useState(0);
  const [isStaking, setIsStaking] = useState(true);

  const useTokenBalance = (tokenContract, address) => {
    const { data: balance } = useScaffoldReadContract({
      contractName: tokenContract,
      functionName: "balanceOf",
      args: [address],
    });
    return balance ? Number(balance) * 10 ** -config.tokenDecimals : 0;
  };

  const useStakedBalance = (stakingContract, address) => {
    const { data: stakedBalance } = useScaffoldReadContract({
      contractName: stakingContract,
      functionName: "balanceOf",
      args: [address],
    });
    return stakedBalance ? Number(stakedBalance) * 10 ** -config.tokenDecimals : 0;
  };

  const usePricePerShare = stakingContract => {
    const { data: pricePerShare } = useScaffoldReadContract({
      contractName: stakingContract,
      functionName: "getPricePerFullShare",
    });
    return pricePerShare ? Number(pricePerShare) * 10 ** -config.tokenDecimals : 0;
  };

  const tokenBalance = useTokenBalance(config.tokenContractName, address);
  const stakedBalance = useStakedBalance(config.stakingPoolName, address);
  const pricePerShare = usePricePerShare(config.stakingPoolName);

  const { writeContractAsync: writeStake, isPending: isStakePending } = useScaffoldWriteContract(
    config.stakingPoolName,
  );
  const { writeContractAsync: writeUnstake, isPending: isUnstakePending } = useScaffoldWriteContract(
    config.stakingPoolName,
  );

  const handleStake = async () => {
    try {
      await writeStake({
        functionName: "stake",
        args: [BigInt(amount * 10 ** config.tokenDecimals)],
      });
    } catch (e) {
      console.error(`Error staking ${config.tokenSymbol}`, e);
    }
  };

  const handleUnstake = async () => {
    try {
      await writeUnstake({
        functionName: "withdraw",
        args: [BigInt(amount * 10 ** config.tokenDecimals)],
      });
    } catch (e) {
      console.error(`Error unstaking ${config.tokenSymbol}`, e);
    }
  };

  const handleMaxAmount = () => {
    setAmount(isStaking ? tokenBalance : stakedBalance);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{config.tokenSymbol} Staking</h2>
        <div className="stats flex flex-col">
          <div className="stat place-items-center">
            <div className="stat-title">{config.tokenSymbol} Balance:</div>
            <div className="stat-value">
              {tokenBalance.toFixed(3)} <span className="stat-desc">{config.tokenSymbol}</span>
            </div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">Staked Balance:</div>
            <div className="stat-value">
              {(stakedBalance * pricePerShare).toFixed(3)} <span className="stat-desc">{config.tokenSymbol}</span>{" "}
            </div>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Amount</span>
            <span className="label-text-alt cursor-pointer" onClick={handleMaxAmount}>
              MAX
            </span>
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            className="input input-bordered"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => setIsStaking(!isStaking)}>
            {isStaking ? "Switch to Unstake" : "Switch to Stake"}
          </button>
          <button
            className="btn btn-secondary"
            onClick={isStaking ? handleStake : handleUnstake}
            disabled={isStaking ? isStakePending : isUnstakePending}
          >
            {isStaking ? (isStakePending ? "Staking..." : "Stake") : isUnstakePending ? "Unstaking..." : "Unstake"}
          </button>
        </div>
      </div>
      {FarmEarnings && <FarmEarnings farmName={config.stakingPoolName} pricePerShare={pricePerShare} />}
    </div>
  );
};

export default Staking;
