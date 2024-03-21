import React from "react";
import "./style.css"
import Coin from "./Coin";

function Coindata({ data }) {
  return (
    <div className="coin_data">
      <Coin item={data} />
    </div>
  );
}

export default Coindata;
