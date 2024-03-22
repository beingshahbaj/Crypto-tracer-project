import React, { createContext, useContext, useState } from "react";

const DaysContext = createContext();

export const DaysProvider = ({ children }) => {
  const [days, setDays] = useState(30);

  return (
    <DaysContext.Provider value={{ days, setDays }}>
      {children}
    </DaysContext.Provider>
  );
};

export const useDays = () => useContext(DaysContext);
