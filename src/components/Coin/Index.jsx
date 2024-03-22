import React, { useEffect, useState, useMemo } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Coinloading from "./Coinloading";
import Error from "../common/Errorpage/Index";
import Coindata from "./Coindata/Index";
import { convertdate } from "../../Functions/Convertdate";
import { useDays } from "../../ContexApi/DaysProvider";

function Coin() {
  const { days } = useDays();
  const { coinid } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chartdata, setChartdata] = useState({ labels: [], datasets: [] });

  console.log(days);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinid}`
      );
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  async function getmarketChart() {
    if (coinid) {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=usd&days=${days}&interval=daily`
        );
        console.log(response.data);
        const prices = response.data.prices;

        if (prices.length > 0) {
          setChartdata((prevState) => ({
            ...prevState,
            labels: prices.map((data) => convertdate(data[0])),

            datasets: [
              {
                label: "Price",
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
    fetchData();
  }, [coinid]);

  useEffect(() => {
    getmarketChart();
  }, [coinid, days]);

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
