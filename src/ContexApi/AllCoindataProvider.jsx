import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import axios from "axios";

const api = "CG-qM6DKgpX93vMyhRpJ2k4Xkms";

const CoinDataContext = createContext();

export const CoinDataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchdata = async () => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://api.coingecko.com/api/v3/coins/markets",
      headers: { "x-cg-demo-api-key": "CG-qM6DKgpX93vMyhRpJ2k4Xkms" },
    };
    console.log("all data api called");
    try {
      const response = await axios.request(options);
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
