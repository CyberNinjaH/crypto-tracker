import React, { memo } from "react";

import Loader from "./Loader";
import Status from "./Status";
import { formatPrice } from "../utils";

interface Props {
  crypto: {
    id: string;
    name: string;
    symbol: string;
    iconCode: number;
    price: number;
    highPrice: number;
    lowPrice: number;
    prevPrice: number;
    explorer: string;
  };
}

function Crypto({ crypto }: Props) {
  const color = crypto.prevPrice ? crypto.price > crypto.prevPrice ? "text-green-600" : "text-red-600" : "text-gray-800";
  return (
    <div className="max-w p-6 bg-zinc-900 rounded-lg shadow-lg relative">
      <div>
        <img className="w-10 h-10 mb-2 rounded-full" src={` https://s2.coinmarketcap.com/static/img/coins/128x128/${crypto.iconCode}.png`} />
        <h4 className="mb-1 text-2xl font-semibold tracking-tight text-slate-300">
          {crypto.name}
        </h4>
      </div>
      {crypto.price ? (
        <>
          <span className={color} title={`${crypto.price}`}>
            {formatPrice(crypto.price)}
          </span>
          <div className="mt-4">
            <Status label="24 high" value={formatPrice(crypto.highPrice)} />
            <Status label="24 low" value={formatPrice(crypto.lowPrice)} />
          </div>
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
      <a href={crypto.explorer} className="flex absolute top-3 right-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#818cf8" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>

    </div>
  );
}

export default memo(Crypto);