import React, { useState, useEffect } from "react";
import LabTabs from "./Tabs";
import axios from "axios";
import Error from "../common/Errorpage/Index";

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      );
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAgain = () => {
    fetchData();
    console.log("fetchcakllse");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <Error error={error} fetchAgain={fetchAgain} loading={loading} />
      ) : (
        <LabTabs data={data} loading={loading} error={error} />
      )}
    </div>
  );
}

export default Dashboard;
