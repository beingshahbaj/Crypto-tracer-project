import React, { useEffect, useState } from "react";
import { useCoinData } from "../../ContexApi/AllCoindataProvider";
import LabTabs from "../Dashbord/Tabs";
import Error from "../common/Errorpage/Index";

function WishList() {
  const { data, loading, error } = useCoinData();
  const [storedCoin, setStoredCoin] = useState([]);

  useEffect(() => {
    const storedCoinString = localStorage.getItem("Coins");
    const storedCoin = storedCoinString ? JSON.parse(storedCoinString) : [];
    setStoredCoin(storedCoin);
  }, [loading, error]);

  const filteredCoin = data.filter((item) => storedCoin.includes(item.id));

  return (
    <div>
      {error ? (
        <Error error={error} />
      ) : (
        <LabTabs data={filteredCoin} loading={loading} error={error} />
      )}
    </div>
  );
}

export default WishList;
