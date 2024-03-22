import React from "react";
import "./style.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      aria-label="text alignment"
      onChange={handleAlignment}
      responsive="true"
      style={{
        height: "100%",
        display: "flex",

        margin: "0 1rem",
        alignItems: "start",

        flexDirection: "",
        width: "fit-content",
        background: "white",
        borderRadius: "10px",
      }}
    >
      <ToggleButton
        className="toggle_btn"
        value="left"
        aria-label="left aligned"
      >
        <h4>Price</h4>
      </ToggleButton>
      <ToggleButton className="toggle_btn" value="center" aria-label="centered">
        <h4>Market cap</h4>
      </ToggleButton>
      <ToggleButton
        className="toggle_btn"
        value="right"
        aria-label="right aligned"
      >
        <h4>Volume</h4>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
