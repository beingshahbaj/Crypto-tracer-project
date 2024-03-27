import React from "react";
import "../../Dashbord/style.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import TimeAgo from "../../Dashbord/Time";
import { Tooltip } from "@mui/material";
import NumberFormatter from "../../Dashbord/Nomberformater";
import { motion } from "framer-motion";
import Addbutton from "../../Wishlist/Addbutton";

function Coin({ item }) {
  return (
    <motion.div
      initial={{ x: -30 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, type: "spring" }}
      className={
        item.market_data.price_change_percentage_24h > 0
          ? "listbox gridbox greenbox"
          : item.market_data.price_change_percentage_24h < 0
          ? "listbox gridbox redbox"
          : "listbox gridbox neutralbox"
      }
    >
      <Tooltip title={item.symbol} placement="top">
        <div className="name-img">
          <img src={item.image.large} alt="" />
          <div className="name">
            <h3>{`${item.symbol}-usd`}</h3>
            <p>{item.name}</p>
          </div>
        </div>
      </Tooltip>

      {item.market_data.price_change_percentage_24h > 0 ? (
        <div className="green persenteg">
          <h4>{item.market_data.price_change_percentage_24h.toFixed(2)}%</h4>
          <TrendingUpIcon className="icon greenicon" />
        </div>
      ) : item.market_data.price_change_percentage_24h < 0 ? (
        <div className="red persenteg">
          <h4>{item.market_data.price_change_percentage_24h.toFixed(2)}%</h4>
          <TrendingDownIcon className="icon redicon" />
        </div>
      ) : (
        <div className="neutral persenteg">
          <h4>{item.market_data.price_change_percentage_24h.toFixed(2)}%</h4>
          <TrendingFlatIcon className="icon neutralicon" />
        </div>
      )}

      <Tooltip title="current price" placement="top-start">
        <h2
          className={
            item.market_data.price_change_percentage_24h > 0
              ? "green"
              : item.market_data.price_change_percentage_24h < 0
              ? "red"
              : "neutral"
          }
        >
          ${item.market_data.current_price.usd.toLocaleString()}
        </h2>
      </Tooltip>

      <h5 className="time">
        updated : <TimeAgo timestamp={item.Date} />
      </h5>

      <Tooltip title="total volume" placement="top">
        <h2>$:{item.market_data.total_volume.usd.toLocaleString()}</h2>
        <h2 className="millon">
          <NumberFormatter number={item.market_data.total_volume.usd} />
        </h2>
      </Tooltip>
      <Tooltip title="market cap" placement="top">
        <h2>$:{item.market_data.market_cap.usd.toLocaleString()}</h2>
        <h2 className="millon">
          <NumberFormatter number={item.market_data.market_cap.usd} />
        </h2>
      </Tooltip>
      <Addbutton coin={item} />
    </motion.div>
  );
}

export default Coin;
