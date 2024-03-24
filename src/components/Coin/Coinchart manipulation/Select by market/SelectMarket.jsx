import React from "react";
import "./style.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useMarket } from "../../../../ContexApi/MarketProvider";

export default function ToggleButtons() {
  const { market, setMarket } = useMarket();

  const handleAlignment = (event, newMarket) => {
    if (newMarket !== null) {
      setMarket(newMarket);
     
    }
  };

  return (
    <ToggleButtonGroup
      className="btngroup"
      value={market}
      exclusive
      onChange={handleAlignment}
      aria-label="market Vol"
    >
      <ToggleButton
        className="toggle_btn"
        value="market_caps"
        aria-label="Market Caps"
      >
        <h4>Market Cap</h4>
      </ToggleButton>
      <ToggleButton className="toggle_btn" value="prices" aria-label="prices">
        <h4>Prices</h4>
      </ToggleButton>
      <ToggleButton
        className="toggle_btn"
        value="total_volumes"
        aria-label=" Total Volume"
      >
        <h4>Volume</h4>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
