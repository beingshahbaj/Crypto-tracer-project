import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { DaysProvider } from "./ContexApi/DaysProvider.jsx";
import { MarketProvider } from "./ContexApi/MarketProvider.jsx";
import { CoinDataProvider } from "./ContexApi/AllCoindataProvider.jsx";
import { CoinDatabyidProvider } from "./ContexApi/CoindatabyId.jsx";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "var(--blue)",
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CoinDatabyidProvider>
      <DaysProvider>
        <MarketProvider>
          <CoinDataProvider>
            <App />
          </CoinDataProvider>
        </MarketProvider>
      </DaysProvider>
    </CoinDatabyidProvider>
  </BrowserRouter>
);
