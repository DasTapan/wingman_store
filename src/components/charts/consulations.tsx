"use client";

import Chart from "react-google-charts";

const data = [
  ["Day", "Incoming", "Answered", "Experts Online"],
  ["Mon", 35, 28, 29],
  ["Tue", 35, 29, 28],
  ["Wed", 42, 35, 32],
  ["Thu", 50, 48, 56],
  ["Fri", 42, 32, 31],
  ["Sat", 48, 37, 36],
  ["Sun", 55, 40, 36],
];

const options = {
  title: "Consultations",
  seriesType: "line",
  chartArea: { width: "72%" },
  series: {
    2: { type: "bars", color: "#FFF7D4" }, // Experts Online as Bars
    0: { color: "#A1A1A1", lineDashStyle: [4, 4] }, // Incoming (Dashed)
    1: { color: "#0F9D58" }, // Answered (Solid Line)
  },
  legend: { position: "bottom" },
  vAxes: {
    0: { title: "Consultations" }, // Primary axis for Incoming and Answered
    1: { title: "Experts Online", minValue: 0, maxValue: 20 }, // Secondary axis for Experts Online
  },
  hAxis: {
    title: "Days of the Week",
  },
  bar: {
    groupWidth: "45%", // Adjust the bar width (reduce percentage for thinner bars)
  },
};

const ConsultationChart = () => {
  return (
    <div className="w-1/2">
      <Chart
        chartType="ComboChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default ConsultationChart;
