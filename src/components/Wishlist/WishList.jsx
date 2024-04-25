import React, { useEffect, useState } from "react";
import { useCoinData } from "../../ContexApi/AllCoindataProvider";
import LabTabs from "../Dashbord/Tabs";
import Error from "../common/Errorpage/Index";
import { useAuth0 } from "@auth0/auth0-react";

function WishList() {
  document.title = "crypto wishlist";

  const { data, loading, error } = useCoinData();
  const [storedCoin, setStoredCoin] = useState([]);
  const [filteredCoin, setFilteredCoin] = useState([]);

  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    const storedCoinString = localStorage.getItem("Coins");
    const storedCoin = storedCoinString ? JSON.parse(storedCoinString) : [];
    setStoredCoin(storedCoin);
    setFilteredCoin(data.filter((item) => storedCoin.includes(item.id)));
  }, [loading, error, setFilteredCoin]);

  const auth = localStorage.getItem("isAuthenticated");
  return (
    <div>
      {isAuthenticated ||
        (auth && (
          <>
            <h1 style={{ textAlign: "center" }}>welcome {user.name}</h1>
          </>
        ))}
      {error ? (
        <Error error={error} />
      ) : (
        <LabTabs data={filteredCoin} loading={loading} error={error} />
      )}
    </div>
  );
}

export default WishList;
