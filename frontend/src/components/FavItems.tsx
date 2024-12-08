import React from "react";
import CryptoCard from "./CryptoCards" // Assuming you have the CryptoCard component

export default function FavItems() {
  // Data for favorite assets
  const favoriteAssets = [
    {
      iconBgColor: "#F7931A",
      cryptoName: "Bitcoin",
      symbol: "BTC",
      price: "$26,159.00",
      change: 1383,
      changePercent: 0.9,
      chartColor: "#F7931A",
      chartPath: "M0 15 Q10 5, 20 12 T40 8",
    },
    {
      iconBgColor: "#627EEA",
      cryptoName: "Ethereum",
      symbol: "ETH",
      price: "$1,659.08",
      change: 80.35,
      changePercent: 2.4,
      chartColor: "#627EEA",
      chartPath: "M0 12 Q10 8, 20 5 T40 15",
    },
    {
      iconBgColor: "#F3BA2F",
      cryptoName: "Binance",
      symbol: "BNB",
      price: "$219.00",
      change: 86.1,
      changePercent: 1.2,
      chartColor: "#F3BA2F",
      chartPath: "M0 10 Q10 3, 20 8 T40 5",
    },
  ];

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-lg font-semibold text-gray-800">Fav Assets</span>
        <button className="text-blue-500 text-sm font-medium hover:underline">
          Edit List
        </button>
      </div>

      {/* Favorite Asset Cards */}
      <div className="space-y-4 mt-4">
        {favoriteAssets.map((asset, index) => (
          <CryptoCard
            key={index}
            iconBgColor={asset.iconBgColor}
            cryptoName={asset.cryptoName}
            symbol={asset.symbol}
            price={asset.price}
            change={asset.change}
            changePercent={asset.changePercent}
            chartColor={asset.chartColor}
            chartPath={asset.chartPath}
          />
        ))}
      </div>
    </div>
  );
}
