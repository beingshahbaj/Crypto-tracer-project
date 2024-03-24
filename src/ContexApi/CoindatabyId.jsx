// CoinDataContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CoinDatabyidContext = createContext();

export const CoinDatabyidProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchData = async (coinId) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinId}`
      );
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CoinDatabyidContext.Provider
      value={{
        data,
        loading,
        error,
        fetchData,
      }}
    >
      {children}
    </CoinDatabyidContext.Provider>
  );
};

export const useCoinDatabyid = () => useContext(CoinDatabyidContext);
