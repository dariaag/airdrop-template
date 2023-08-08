"use client";

import { BaseError } from "viem";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export function Connect() {
  const { connector, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div >
     
      <div>
      
      
        {isConnected && (
          <button
            className="btn rounded-full bg-opacity-30 text-white border-none mr-2 my-2 btn-xs sm:btn-sm md:btn-md lg:btn-md"
            onClick={() => disconnect()}
          >
            Disconnect from {connector?.name}
          </button>
        )}

        {connectors
          .filter((x) => x.ready && x.id !== connector?.id)
          .map((x) => (
            <button
              className="btn rounded-full mr-2 bg-opacity-30 text-white border-none my-2 btn-xs sm:btn-sm md:btn-md lg:btn-md"
              key={x.id}
              onClick={() => connect({ connector: x })}
            >
              {x.name}
              {isLoading && x.id === pendingConnector?.id && " (connecting)"}
            </button>
          ))}
      </div>

      {error && <div>{(error as BaseError).shortMessage}</div>}
    </div>
  );
}
