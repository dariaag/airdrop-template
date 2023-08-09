"use client";

import { useState } from "react";
import { BaseError } from "viem";
import {
  Address,
  useAccount,
  useNetwork,
  useWaitForTransaction,
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
} from "wagmi";

import { ApolloProvider } from "react-apollo";
import {
  useErc20Allowance,
  useErc20Approve,
  useErc20BalanceOf,
  useErc20Name,
  useErc20Symbol,
  useErc20TotalSupply,
  useErc20Transfer,
  usePrepareErc20Approve,
  usePrepareErc20Transfer,
} from "../generated";
import { airdropAbi } from "./abi";

export function ERC20() {


  return (
  
      <div className="block items-center pt-2">
        <div>
          <label className="text-[#0A2540]">Airdrop Address: </label>
          <input
           className="ml-[30px] appearance-none mx-5 w-120 bg-white text-gray-700  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-full"
            style={{ width: 400 }}

          />
        </div>
        <div>
          <label className="text-[#0A2540]">Token Address: </label>
          <input
            className="ml-[30px] appearance-none mx-5 w-120 bg-white text-gray-700  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-full"
           
            style={{ width: 400 }}
           
          />
        </div>
        <>
          <h3></h3>
          <div className="stats my-5 bg-[#635AFF]">
            <div className="stat place-items-center">
              <div className="stat-title text-gray-200">Name</div>
            
              {/* Name Component Here */}
              <div className="stat-desc"></div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title text-gray-200">Balance</div>
              {/* Balance Component Here */}
              <div className="stat-desc text-secondary"></div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title text-gray-200">Total Supply</div>
              {/* TotalSupply Component Here */}
             
              <div className="stat-desc"></div>
            </div>
          </div>

         
          <h3></h3>
           {/* Allowance Component Here */}

           {/* Airdrop Component Here */}

          
        </>
      </div>
    
  );
}

function Name({ tokenAddress }: { tokenAddress: Address }) {
  
  return (
    <div className="text-white">
      unimplemented
    </div>
  );
}
function TotalSupply({ tokenAddress }: { tokenAddress: Address }) {
 
  return <div className="text-white">unimplemented</div>;
}

function BalanceOf({
  address,
  tokenAddress,
}: {
  address?: Address;
  tokenAddress: Address;
}) {
  
  return <div className="text-white">unimplemented</div>;
}

function Airdrop({
  address, //airdrop
  tokenAddress, //token address
  profileAddress,
}: {
  address?: Address;
  tokenAddress: Address;
  profileAddress?: Address;
}) {
 


  return (
    <div>
      

      <button
        className="btn rounded-full bg-[#635AFF] border-[#635AFF] text-white mr-2 my-2 btn-xs sm:btn-sm md:btn-md lg:btn-md"
       
      >
        Get Addresses
      </button>
      
      <button
        className="btn rounded-full mr-2 border-[#635AFF] bg-[#635AFF] text-white  my-2 btn-xs sm:btn-sm md:btn-md lg:btn-md"
        
       
      >
        Airdrop
      </button>
    </div>
  );
}

function Allowance({
  address,
  contractAddress,
  tokenAddress,
}: {
  address?: Address;
  contractAddress: Address;
  tokenAddress: Address;
}) {
  


  return (
    <div>
      
      <div className="text-[#0A2540]">
        Airdrop Allowance:{" "}
        <input
          
          placeholder="amount (units)"
         
          className="appearance-none mx-5 w-60 bg-white text-gray-700  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-full"
        />
        <button
          
          className="btn text-white rounded-full bg-[#635AFF] border-[#635AFF] mr-2 my-2 btn-xs sm:btn-sm md:btn-md lg:btn-md"
         
        >
          set
        </button>
        
       
       
      </div>
      <div className="text-[#0A2540]">Allowance: unimplemented s</div>
    </div>
  );
}



function ProcessingMessage({ hash }: { hash?: `0x${string}` }) {
  const { chain } = useNetwork();
  const etherscan = chain?.blockExplorers?.etherscan;
  return (
    <span>
      Processing transaction...{" "}
      {etherscan && (
        <a href={`${etherscan.url}/tx/${hash}`}>{etherscan.name}</a>
      )}
    </span>
  );
}
