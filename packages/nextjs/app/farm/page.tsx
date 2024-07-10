"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import Farm from "~~/components/Farm";
import { Address } from "~~/components/scaffold-eth";

const FarmPage: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-4xl font-bold">Bank of Based Yield Zone</span>
          </h1>
          <Farm />
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row bg-[#f9f9f9]">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FarmPage;
