import React from "react";
import "./style.css";

import nodata from "../../assets/nodata.jpg";
import Coin from "./Coin";

export function List({ data }) {
  return (
    <div className="listcontainer">
      {data.length > 0 ? (
        data.map((item, i) => <Coin item={item} key={item.id} i={i} />)
      ) : (
        <img className="nodata_img" src={nodata} alt="" />
      )}
    </div>
  );
}
