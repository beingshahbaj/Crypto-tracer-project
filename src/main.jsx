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
import { Auth0Provider } from "@auth0/auth0-react";

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
            <Auth0Provider
              domain="shahbajkhan.us.auth0.com"
              clientId="0C5cnhpinTvaIoI36snQuF2sBX7aofsA"
              authorizationParams={{
                redirect_uri: window.location.origin,
              }}
            >
              <App />
            </Auth0Provider>
            ,
          </CoinDataProvider>
        </MarketProvider>
      </DaysProvider>
    </CoinDatabyidProvider>
  </BrowserRouter>
);
