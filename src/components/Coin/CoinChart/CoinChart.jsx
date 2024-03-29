import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./style.css";

const LineChart = ({ data, multiAxix }) => {
  const defaultOptions = {
    plugins: {
      legend: {
        display: multiAxix ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      axis: "x",
      intersect: false,
      mode: "nearest",
    },
  };

  return (
    <div className="chartcontainer">
      <Line data={data} options={defaultOptions} />
    </div>
  );
};

export default React.memo(LineChart);
