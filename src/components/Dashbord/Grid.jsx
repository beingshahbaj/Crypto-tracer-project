import React from "react";
import "./style.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TimeAgo from "./Time";
import nodata from "../../assets/nodata.jpg";

export function Grid({ data }) {
  console.log(data);
  return (
    <div className={data.length > 0 ? "gridcontainer" : "flex"}>
      {data.length > 0 ? (
        data.map((item) => (
          <div
            className={
              item.price_change_percentage_24h > 0
                ? "gridbox greenbox"
                : "gridbox redbox"
            }
            key={item.id}
          >
            <div className="name-img">
              <img src={item.image} alt="" />
              <div className="name">
                <h3>{`${item.symbol}-usd`}</h3>
                <p>{item.name}</p>
              </div>
            </div>

            {item.price_change_percentage_24h > 0 ? (
              <div className="green persenteg">
                <h4>{item.price_change_percentage_24h}</h4>
                <TrendingUpIcon className=" icon greenicon" />
              </div>
            ) : (
              <div className="red persenteg">
                <h4>{item.price_change_percentage_24h}</h4>
                <TrendingDownIcon className=" icon redicon" />
              </div>
            )}
            <h3
              className={
                item.price_change_percentage_24h > 0
                  ? "green flex "
                  : " flex red"
              }
            >
              ${item.current_price}
              <h5 className="time">
                updated : <TimeAgo timestamp={item.Date} />
              </h5>
            </h3>
            <h4> total volume $:{item.total_volume}</h4>
            <h4> market cap$:{item.market_cap}</h4>
          </div>
        ))
      ) : (
        <img className="nodata_img" src={nodata} alt="" />
      )}
    </div>
  );
}

// {
//     "id": "bitcoin",
//     "symbol": "btc",
//     "name": "Bitcoin",
//     "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
//     "current_price": 67062,
//     "market_cap": 1317509900097,
//     "market_cap_rank": 1,
//     "fully_diluted_valuation": 1407461788319,
//     "total_volume": 50804974445,
//     "high_24h": 68834,
//     "low_24h": 66605,
//     "price_change_24h": -1125.9250045432855,
//     "price_change_percentage_24h": -1.65121,
//     "market_cap_change_24h": -22212997125.510498,
//     "market_cap_change_percentage_24h": -1.65803,
//     "circulating_supply": 19657875,
//     "total_supply": 21000000,
//     "max_supply": 21000000,
//     "ath": 73738,
//     "ath_change_percentage": -9.10786,
//     "ath_date": "2024-03-14T07:10:36.635Z",
//     "atl": 67.81,
//     "atl_change_percentage": 98739.37224,
//     "atl_date": "2013-07-06T00:00:00.000Z",
//     "roi": null,
//     "last_updated": "2024-03-18T19:05:26.958Z"
// }
