import "./Style.css";
import React from "react";
import SelectDays from "./Select by days/Selectdays";
import ToggleButtons from "./Select by market/SelectMarket";

function ChartManipulation() {
  return (
    <div className="chart_manipulation_box">
      <SelectDays />
      <ToggleButtons />
    </div>
  );
}

export default ChartManipulation;
