"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import BankOfBased from "~~/components/BankOfBased";
import Farm from "~~/components/Farm";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  return (
    <>
      <div className="flex-grow w-full mt-16 px-8 py-12">
        <div className="flex items-center flex-col flex-grow pt-10">
          <div className="px-5">
            <h1 className="text-center"></h1>
            <Farm />
            <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
              <p className="my-2 font-medium">Connected Address:</p>
              <Address address={connectedAddress} />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
          <div className="details">
            <p className="truncate-address">
              Token: <a href="{uniswap_link}" target="_blank" rel="noopener noreferrer"></a>
            </p>
            <p>
              Chart:{" "}
              <a
                href="{`https://dexscreener.com/base/${$currentContract.token_address}`}"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.dexscreener.com
              </a>
            </p>
            <p>
              Warpcast:{" "}
              <a href="https://warpcast.com/bankofbased" target="_blank" rel="noopener noreferrer">
                warpcast.com/bankofbased
              </a>
            </p>
            <p>
              Telegram:{" "}
              <a href="https://t.me/bankofbased" target="_blank" rel="noopener noreferrer">
                t.me/bankofbased
              </a>
            </p>
            <p>
              Created By:{" "}
              <a href="https://x.com/burn_the_state" target="_blank" rel="noopener noreferrer">
                @burn_the_state
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
