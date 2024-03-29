import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import axios from "axios";

const CoinDataContext = createContext();

export const CoinDataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchdata = async () => {
    setLoading(true);
    console.log("all data api called");
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: { vs_currency: "usd" },
          headers: { "x-cg-demo-api-key": "CG-qM6DKgpX93vMyhRpJ2k4Xkms" },
        }
      );
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const contextValue = useMemo(
    () => ({ data, loading, error, fetchdata }),
    [data, loading, error, fetchdata]
  );

  return (
    <CoinDataContext.Provider value={contextValue}>
      {children}
    </CoinDataContext.Provider>
  );
};

export const useCoinData = () => useContext(CoinDataContext);
