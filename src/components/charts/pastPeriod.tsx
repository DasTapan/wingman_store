"use client";

import { Chart } from "react-google-charts";

const data = [
  ["Period", "Consultations", "Orders Closed"],
  ["This week", 20, 15],
  ["Last week", 15, 12],
];

const options = {
  title: "VS Past Period",
  chartArea: { width: "60%", height: "70%" },
  bars: "vertical", // Vertical bars
  isStacked: false,
  colors: ["#D9FFF6", "#184C44"], // Light green and dark green
  legend: { position: "bottom" },
  bar: { groupWidth: "40%" },
  hAxis: {
    title: "",
  },
  vAxis: {
    minValue: 0,
  },
};

const PastPeriodChart = () => {
  return (
    <div className="w-1/3">
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default PastPeriodChart;
