import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Coinloading from "./Coinloading";
import Error from "../common/Errorpage/Index";
import Coindata from "./Coindata/Index";

function Coin() {
  const { coinid } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    if (coinid) {
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
    }
  };

  useEffect(() => {
    fetchData();
    console.log(data, error, loading);
  }, [coinid]);

  return (
    <div>
      {loading ? <Coinloading /> : error ? <Error /> : <Coindata data={data} />}
    </div>
  );
}

export default Coin;
