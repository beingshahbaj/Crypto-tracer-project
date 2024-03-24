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
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
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
