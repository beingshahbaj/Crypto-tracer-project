import React, { createContext, useContext, useState } from "react";

const marketContext = createContext();

export const MarketProvider = ({ children }) => {
  const [market, setMarket] = useState("prices");

  return (
    <marketContext.Provider value={{ market, setMarket }}>
      {children}
    </marketContext.Provider>
  );
};

export const useMarket = () => useContext(marketContext);
