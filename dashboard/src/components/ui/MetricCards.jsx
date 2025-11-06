import React from 'react';
import { TrendingUp, TrendingDown  } from 'lucide-react'; 
import Bitcoin from "../../assets/bitcoin.png"
import Ethereum from "../../assets/ethereum.png";
import Litecoin from "../../assets/litecoin.png";
import Cardano from "../../assets/cardano.png";

const coins = [
    {
    id:1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "40,291",
    change: "+0.25%",
    isPositive: true,
  logo: Bitcoin
    },

    {
    id:2,
    name: "Ethereum",
    symbol: "ETH",
    price: "18,291",
    change: "+0.25",
    isPositive: true,
  logo: Ethereum,
    },

    {
    id:3,
    name: "Litecoin",
    symbol: "ITL",
    price: "8,291",
    change: "+0.25",
    isPositive: true,
  logo: Litecoin
    },

    {
    id:4,
    name: "Cardano",
    symbol: "ADA",
    price: "3,291",
    change: "-2.05",
    isPositive: false,
  logo: Cardano
    },
];

    export default function MetricCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition"
        >
          {/* Top Row: logo + change */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                {coin.logo ? (
                  <img
                    src={coin.logo}
                    alt={`${coin.name} logo`}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <span className="text-sm font-bold text-gray-500">
                    {coin.symbol[0]}
                  </span>
                )}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {coin.name}
                </p>
                <p className="text-xs text-gray-500">{coin.symbol}</p>
              </div>
            </div>

            <div
              className={`flex items-center gap-1 text-xs font-medium ${
                coin.isPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {coin.isPositive ? <TrendingUp size={15} /> : <TrendingDown size={15} />}
              {coin.change}
            </div>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-gray-900">{coin.price}</div>
        </div>
      ))}
    </div>
  );
}








