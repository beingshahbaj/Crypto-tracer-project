import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./style.css";

const LineChart = ({ data, title, description, options }) => {
  const multiAxix = true;
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

  const chartOptions = { ...defaultOptions, ...options };

  return (
    <div className="chartcontainer">
      <h2>{title}</h2>
      <p>{description}</p>
      <Line data={data} options={chartOptions} />
    </div>
  );
};

export default React.memo(LineChart);
