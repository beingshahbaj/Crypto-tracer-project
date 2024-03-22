import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { DaysProvider } from "./ContexApi/DaysProvider.jsx";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "var(--blue)",
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <BrowserRouter>
      <DaysProvider>
        <App />
      </DaysProvider>
    </BrowserRouter>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
