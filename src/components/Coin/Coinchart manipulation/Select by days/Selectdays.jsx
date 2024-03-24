import React from "react";
import { Select, Space } from "antd";
import { useDays } from "../../../../ContexApi/DaysProvider";
import "./style.css";

const SelectDays = () => {
  const { days, setDays } = useDays();

  const handleProvinceChange = (value) => {
    setDays(value);
  };

  
  return (
    <Space wrap>
      <Select
      
        defaultValue={days}
        className="selectdays_box"
        onChange={handleProvinceChange}
        options={[
          {
            value: 7,
            label: "7 Days",
            style: { fontWeight: "800" },
          },
          {
            value: 30,
            label: "1 months",
          },
          {
            value: 90,
            label: "3 Months",
          },
          {
            value: 180,
            label: "6 Months",
          },
          {
            value: 365,
            label: "1 Year",
          },
        ]}
      />
    </Space>
  );
};

export default SelectDays;
