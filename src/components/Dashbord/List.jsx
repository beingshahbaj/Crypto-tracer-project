import React from "react";
import "./style.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TimeAgo from "./Time";
import { Tooltip } from "@mui/material";
import NumberFormatter from "./Nomberformater";
import nodata from "../../assets/nodata.jpg";


export function List({ data, error }) {
  console.log(data);
  return (
    <div className="listcontainer">
      {data.length > 0 || !error ? (
        data.map((item) => (
          <div
            className={
              item.price_change_percentage_24h > 0
                ? "listbox gridbox greenbox"
                : "listbox gridbox redbox"
            }
            key={item.id}
          >
            <Tooltip title="symbol" placement="top">
              {" "}
              <div className="name-img">
                <img src={item.image} alt="" />
                <div className="name">
                  <h3>{`${item.symbol}-usd`}</h3>
                  <p>{item.name}</p>
                </div>
              </div>{" "}
            </Tooltip>

            {item.price_change_percentage_24h > 0 ? (
              <div className="green persenteg">
                <h4>{`${item.price_change_percentage_24h.toFixed(2)}%`}</h4>
                <TrendingUpIcon className="icon greenicon" />
              </div>
            ) : (
              <div className="red persenteg">
                <h4>{`${item.price_change_percentage_24h.toFixed(2)}%`}</h4>
                <TrendingDownIcon className="icon redicon" />
              </div>
            )}
            <Tooltip title="current price" placement="top-start">
              <h2
                className={
                  item.price_change_percentage_24h > 0 ? "green" : "red"
                }
              >
                ${item.current_price}
              </h2>
            </Tooltip>
            <h5 className="time">
              updated : <TimeAgo timestamp={item.Date} />
            </h5>
            <Tooltip title="total volume" placement="top">
              <h2>$:{item.total_volume.toLocaleString()}</h2>
              <h2 className="millon">
                <NumberFormatter number={item.total_volume} />
              </h2>
            </Tooltip>
            <Tooltip title="market cap" placement="top">
              <h2>$:{item.market_cap.toLocaleString()}</h2>
              <h2 className="millon">
                <NumberFormatter number={item.market_cap} />
              </h2>
            </Tooltip>
          </div>
        ))
      ) : (
        <img className="nodata_img" src={nodata} alt="" />
      )}
     
    </div>
  );
}
