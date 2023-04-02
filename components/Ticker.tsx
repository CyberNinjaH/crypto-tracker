import React from "react";

import Crypto from "./Crypto";
import { useTicker } from "../utils/hooks";

export default function Ticker() {
    const currencies = useTicker();
    return (
        <div className="mt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl">
            {currencies?.map((crypto) => (
                <Crypto key={crypto.id} crypto={crypto} />
            ))}
        </div>
    )
}