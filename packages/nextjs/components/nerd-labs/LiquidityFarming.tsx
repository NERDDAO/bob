import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useAccount } from "wagmi";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const LiquidityFarming = ({ config }) => {
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

  const useStakedBalance = (farmContract, address) => {
    const { data: stakedBalance } = useScaffoldReadContract({
      contractName: farmContract,
      functionName: "balanceOf",
      args: [address],
    });
    return stakedBalance ? Number(stakedBalance) * 10 ** -config.tokenDecimals : 0;
  };

  const useEarned = (farmContract, address) => {
    const { data: earned } = useScaffoldReadContract({
      contractName: farmContract,
      functionName: "earned",
      args: [address],
    });
    return earned ? Number(earned) * 10 ** -config.rewardDecimals : 0;
  };

  const tokenBalance = useTokenBalance(config.tokenContractName, address);
  const stakedBalance = useStakedBalance(config.farmContractName, address);
  const earnedRewards = useEarned(config.farmContractName, address);

  const { writeContractAsync: writeStake, isPending: isStakePending } = useScaffoldWriteContract(
    config.farmContractName,
  );
  const { writeContractAsync: writeUnstake, isPending: isUnstakePending } = useScaffoldWriteContract(
    config.farmContractName,
  );
  const { writeContractAsync: writeClaim, isPending: isClaimPending } = useScaffoldWriteContract(
    config.farmContractName,
  );

  const handleStake = async () => {
    try {
      await writeStake({
        functionName: "stake",
        args: [ethers.utils.parseUnits(amount.toString(), config.tokenDecimals)],
      });
    } catch (e) {
      console.error(`Error staking ${config.tokenSymbol}`, e);
    }
  };

  const handleUnstake = async () => {
    try {
      await writeUnstake({
        functionName: "withdraw",
        args: [ethers.utils.parseUnits(amount.toString(), config.tokenDecimals)],
      });
    } catch (e) {
      console.error(`Error unstaking ${config.tokenSymbol}`, e);
    }
  };

  const handleClaim = async () => {
    try {
      await writeClaim({
        functionName: "getReward",
      });
    } catch (e) {
      console.error(`Error claiming rewards`, e);
    }
  };

  const handleMaxAmount = () => {
    setAmount(isStaking ? tokenBalance : stakedBalance);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{config.farmName} Liquidity Farm</h2>
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
              {stakedBalance.toFixed(3)} <span className="stat-desc">{config.tokenSymbol}</span>
            </div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">Earned Rewards:</div>
            <div className="stat-value">
              {earnedRewards.toFixed(3)} <span className="stat-desc">{config.tokenSymbol}</span>
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
          <button className="btn btn-accent" onClick={handleClaim} disabled={isClaimPending}>
            {isClaimPending ? "Claiming..." : "Claim Rewards"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiquidityFarming;
