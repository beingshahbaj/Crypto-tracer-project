import React, { useEffect, useState, useMemo } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Coinloading from "./Coinloading";
import Error from "../common/Errorpage/Index";
import Coindata from "./Coindata/Index";
import { convertdate } from "../../Functions/Convertdate";
import { useDays } from "../../ContexApi/DaysProvider";
import { useMarket } from "../../ContexApi/MarketProvider";
import { useCoinDatabyid } from "../../ContexApi/CoindatabyId";
import { useCoinData } from "../../ContexApi/AllCoindataProvider";
function Coin() {
  const { market } = useMarket();
  const { days } = useDays();
  const { data, loading, error, fetchData } = useCoinDatabyid();

  const { coinid } = useParams();
  const [chartdata, setChartdata] = useState({ labels: [], datasets: [] });

  async function getmarketChart() {
    if (coinid) {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=usd&days=${days}&interval=daily`
        );

        const prices = response.data[market];

        if (prices.length > 0) {
          setChartdata((prevState) => ({
            ...prevState,
            labels: prices.map((data) => convertdate(data[0])),

            datasets: [
              {
                label: market,
                data: prices.map((data) => data[1]),
                fill: true,
                border: "1px solid #333",
                tension: 0.1,
                backgroundColor: "rgba(54, 162, 235, 0.1)",
                borderColor: "rgba(54, 162, 235, 1)",
                pointRadius: 0,
              },
            ],
          }));
        }
      } catch (error) {
        setError(error);
      }
    }
  }

  useEffect(() => {
    fetchData(coinid);
  }, [coinid]);

  useEffect(() => {
    getmarketChart();
  }, [coinid, days, market]);

  return (
    <div>
      {loading ? (
        <Coinloading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <Coindata data={data} chartdata={chartdata} />
      )}
    </div>
  );
}

export default React.memo(Coin);
