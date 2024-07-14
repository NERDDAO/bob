import externalContracts from "../../contracts/deployedContracts";
import { ethers } from "ethers";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth/";

interface Erc20FarmApproveProps {
  onApproveSuccess: () => void;
}

export function WrapCBDC(args: { balance: bigint; fName: string; onApproveSuccess: ERC20ApproveProps }) {
  const contractName = "WBOB";
  //const spender = externalContracts[31337].WBOB.address;
  //const amount = ethers.MaxUint256;
  // Adjusted to match the expected hook usage
  const { writeContractAsync, isMining } = useScaffoldWriteContract(contractName);
  const { fName: functionName, balance } = args;
  console.log(functionName);

  const handleApprove = async () => {
    // Constructing the variables parameter correctly
    const variables = {
      functionName: functionName.toString(),
      args: [balance] as const,
    };

    if (writeContractAsync) {
      await writeContractAsync(variables);
      args.onApproveSuccess();
    }
  };

  return (
    <div className="form-control w-full md:w-auto p-4">
      <button className="btn btn-primary w-full md:w-auto" onClick={handleApprove} disabled={isMining}>
        {isMining ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : functionName === "deposit" ? (
          `Wrap ${(Number(balance) * 1e-9).toFixed(2)}`
        ) : (
          `Burn ${(Number(balance) * 1e-18).toFixed(2)}`
        )}
      </button>
    </div>
  );
}

export default WrapCBDC;
