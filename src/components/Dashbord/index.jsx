import React, { useState } from "react";
import LabTabs from "./Tabs";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchdata = async () => {
    setLoading(true);
   try {
     const response = axios.get(
       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
     );
     setData(response.data);
    setLoading(false);

   } catch (error) {
     setError(error);
      
   }
  };

  React.useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <LabTabs data={data} loading={loading} error={error} />
    </div>
  );
}

export default Dashboard;
