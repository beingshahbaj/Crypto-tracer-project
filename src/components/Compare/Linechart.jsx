import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./style.css";
import { NumberFormatter } from "../../Functions/NumberFormater";

const LineChartCompare = ({ data, multiAxix }) => {
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
    scales: {
      crypto1: {
        type: "linear",
        position: "left",
      },
      crypto2: {
        type: "linear",
        position: "right",
      },
    },
  };

  return (
    <div className="chartcontainer">
      <Line data={data} options={defaultOptions} />
    </div>
  );
};

export default React.memo(LineChartCompare);
