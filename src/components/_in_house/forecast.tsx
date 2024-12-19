import { TrendingUp } from "lucide-react";
import React from "react";

const ForecastCard = () => {
  return (
    <div
      className="p-6 rounded-3xl text-white shadow-sm max-w-56 flex-grow"
      style={{
        background: "linear-gradient(180deg, #15B79F 0%, #0E9382 100%)",
        boxShadow: "0px 5px 22px 0px #0000000A, 0px 0px 0px 1px #0000000F",
      }}
    >
      {/* Header */}
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <p className="uppercase text-sm font-semibold tracking-wider">
          Forecasts
        </p>
      </div>

      {/* First Forecast */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <p className="text-5xl font-bold">+15%</p>
          <TrendingUp size={25} color="#FFF" />
        </div>
        <p className="text-sm mt-2">
          forecasted increase in your sales closed by the end of the current
          month
        </p>
      </div>

      {/* Second Forecast */}
      <div>
        <div className="flex justify-between items-center">
          <p className="text-5xl font-bold">+20%</p>
          <TrendingUp size={25} color="#FFF" />
        </div>
        <p className="text-sm mt-2">
          forecasted increase in consultations by the end of the current month
        </p>
      </div>
    </div>
  );
};

export default ForecastCard;
