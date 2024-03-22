import React, { useState } from "react";
import "./style.css";
import Coin from "./Coin";
import CoinDecription from "../Coindecription/CoinDecription";
import LineChart from "../CoinChart/CoinChart";
import ChartManipulation from "../Coinchart manipulation/Index";

function Coindata({ data, chartdata }) {
  return (
    <div className="coin_data">
      <Coin item={data} />
      <ChartManipulation />
      <LineChart data={chartdata} />
      <CoinDecription data={data} />
    </div>
  );
}

export default React.memo(Coindata);
