import React, { useEffect, useState } from "react";
import { useCoinData } from "../../ContexApi/AllCoindataProvider";
import LabTabs from "../Dashbord/Tabs";
import Error from "../common/Errorpage/Index";

function WishList() {
  document.title = "crypto wishlist";

  const { data, loading, error } = useCoinData();
  const [storedCoin, setStoredCoin] = useState([]);
  const [filteredCoin, setFilteredCoin] = useState([]);

  useEffect(() => {
    const storedCoinString = localStorage.getItem("Coins");
    const storedCoin = storedCoinString ? JSON.parse(storedCoinString) : [];
    setStoredCoin(storedCoin);
    setFilteredCoin(data.filter((item) => storedCoin.includes(item.id)));
  }, [loading, error, setFilteredCoin]);

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
