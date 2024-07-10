"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import MintBurn from "~~/components/MintBurn";
import { Address } from "~~/components/scaffold-eth";

const Wrapper: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-4xl font-bold">Bank of Based Wrapper</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
          <MintBurn />
        </div>
      </div>
    </>
  );
};

export default Wrapper;
