import React from "react";
import "./style.css";
import { Search } from "@mui/icons-material";
import { Select } from "antd";
import { useCoinData } from "../../../ContexApi/AllCoindataProvider";

function Searchf({ search, filtersearch }) {
  const { data, loading, error, fetchdata } = useCoinData();

  const onChange = async (value) => {};

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const filterOption = (input, option) =>
    (option?.value ?? "").toLowerCase().includes(input.toLowerCase());

  const renderOption = (item) => (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <img
        src={item.image}
        alt={item.name}
        style={{ width: 20, marginRight: 8 }}
      />
      <span style={{ color: "black", fontWeight: "400" }}>{item.name}</span>
    </div>
  );

  return (
    <div className="search_container">
      <div>
        <Select
          loading={loading}
          className="select_crypto"
          showSearch
          placeholder={"Select crypto first"}
          optionFilterProp="children"
          onChange={(value) => onChange(value)}
          onSearch={onSearch}
          filterOption={filterOption}
          style={{ width: 200 }}
          defaultActiveFirstOption={false}
          options={data.map((item) => ({
            value: item.id,
            label: renderOption(item),
          }))}
        />
      </div>
      <div className="search_box">
        <Search />
        <input type="search" value={search} onChange={(e) => filtersearch(e)} />
      </div>
    </div>
  );
}

export default Searchf;
