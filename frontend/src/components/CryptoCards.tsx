const CryptoCard = ({ 
    iconBgColor, 
    cryptoName, 
    symbol, 
    price, 
    change, 
    changePercent, 
    chartColor, 
    chartPath 
  }) => {
    return (
      <div
        className="flex items-center justify-between p-4 rounded-lg shadow-md"
        style={{ backgroundColor: "#F9FAFB" }}
      >
        {/* Icon and Name Section */}
        <div className="flex items-center gap-4">
          {/* Cryptocurrency Icon */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: iconBgColor }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 6h6a6 6 0 1 1 0 12H6z" />
              <line x1="8" x2="8" y1="6" y2="18" />
              <line x1="8" x2="14" y1="12" y2="12" />
            </svg>
          </div>
  
          {/* Cryptocurrency Name */}
          <div>
            <span className="block text-black font-bold text-lg">{symbol}</span>
            <span className="block text-gray-500 text-sm">{cryptoName}</span>
          </div>
        </div>
  
        {/* Chart and Price Info */}
        <div className="flex items-center gap-6">
          {/* Chart */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="20"
              viewBox="0 0 40 20"
              fill="none"
            >
              <path d={chartPath} stroke={chartColor} strokeWidth="2" fill="none" />
            </svg>
          </div>
  
          {/* Price and Profit */}
          <div className="text-right">
            <span className="block text-black font-bold text-lg">{price}</span>
            <span className={`block text-sm ${change >= 0 ? "text-green-500" : "text-red-500"}`}>
              {change >= 0 ? "+" : ""}
              ${change} ({changePercent}%)
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default CryptoCard;
  