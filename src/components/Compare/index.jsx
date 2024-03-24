import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Select } from "antd";
import { useCoinData } from "../../ContexApi/AllCoindataProvider";
import Coin from "../Coin/Coindata/Coin";
import CoinDecription from "../Coin/Coindecription/CoinDecription";
import Listloding from "../Dashbord/Listloding";
function Compare() {
  const { data, fetchdata } = useCoinData();
  const [firstcrypto, setFirstcrypto] = useState(null);
  const [secondcrypto, setSecondcrypto] = useState(null);

  useEffect(() => {
    fetchData("bitcoin", setFirstcrypto);
    fetchData("ethereum", setSecondcrypto);
    fetchdata();
  }, []);

  const fetchData = async (coinId, setCrypto) => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinId}`
      );
      setCrypto(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onChange = (value, setCrypto) => {
    fetchData(value, setCrypto);
  };

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
    <div
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {data.length > 0 && (
        <div className="BasicSelect">
          <Select
            className="select_crypto"
            showSearch
            placeholder={"Select crypto first"}
            optionFilterProp="children"
            onChange={(value) => onChange(value, setFirstcrypto)}
            onSearch={onSearch}
            filterOption={filterOption}
            style={{ width: 200 }}
            defaultActiveFirstOption={false}
            options={data.map((item) => ({
              value: item.id,
              label: renderOption(item),
            }))}
          />
          <Select
            className="select_crypto"
            showSearch
            placeholder={"Select crypto second"}
            optionFilterProp="children"
            onChange={(value) => onChange(value, setSecondcrypto)}
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
      )}
      <div className="coin_data">
        {firstcrypto ? <Coin item={firstcrypto} /> : <Listloding count={1} />}
        {secondcrypto ? <Coin item={secondcrypto} /> : <Listloding count={1} />}
      </div>
      <div className="dec_container">
        {firstcrypto !== null && <CoinDecription data={firstcrypto} />}
        {secondcrypto !== null && <CoinDecription data={secondcrypto} />}
      </div>
    </div>
  );
}

export default Compare;
