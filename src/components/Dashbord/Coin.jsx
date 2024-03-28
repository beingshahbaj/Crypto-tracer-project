import React from "react";
import "./style.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TimeAgo from "./Time";
import { Tooltip } from "@mui/material";
import NumberFormatter from "./Nomberformater";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Addbutton from "../Wishlist/Addbutton";

function Coin({ item, key, i }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ x: -30 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, type: "spring", delay: i * 0.1 }}
      className={
        item.price_change_percentage_24h > 0
          ? "listbox gridbox greenbox"
          : "listbox gridbox redbox"
      }
      key={key}
      onClick={() => navigate(`../coin/${item.id}`)}
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
          <h4>
            {item.price_change_percentage_24h !== undefined
              ? `${item.price_change_percentage_24h.toFixed(2)}%`
              : "N/A"}
          </h4>

          <TrendingUpIcon className="icon greenicon" />
        </div>
      ) : (
        <div className="red persenteg">
          <h4>
            {item.price_change_percentage_24h !== undefined
              ? `${item.price_change_percentage_24h.toFixed(2)}%`
              : "N/A"}
          </h4>

          <TrendingDownIcon className="icon redicon" />
        </div>
      )}
      <Tooltip title="current price" placement="top-start">
        <h2 className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
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
      <div className="add_button">
        <Tooltip title="Add to Wishlist" placement="top">
          <Addbutton coin={item} />
        </Tooltip>
      </div>
    </motion.div>
  );
}

export default Coin;
