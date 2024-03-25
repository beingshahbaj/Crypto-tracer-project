import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Select } from "antd";
import { useCoinData } from "../../ContexApi/AllCoindataProvider";
import Coin from "../Coin/Coindata/Coin";
import CoinDecription from "../Coin/Coindecription/CoinDecription";
import Listloding from "../Dashbord/Listloding";
import ToggleButtons from "../Coin/Coinchart manipulation/Select by market/SelectMarket";
import { useMarket } from "../../ContexApi/MarketProvider";
import { useDays } from "../../ContexApi/DaysProvider";
import { convertdate } from "../../Functions/Convertdate";
import SelectDays from "../Coin/Coinchart manipulation/Select by days/Selectdays";
import LineChartCompare from "./Linechart";

function Compare() {
  const { market } = useMarket();
  const { days } = useDays();
  const { data, fetchdata } = useCoinData();

  const [one, setOne] = useState(null);
  const [two, setTwo] = useState(null);

  const [prices1, setPrices1] = useState([]);
  const [prices2, setPrices2] = useState([]);

  const [firstcrypto, setFirstcrypto] = useState(null);
  const [secondcrypto, setSecondcrypto] = useState(null);

  const [chartdata, setChartdata] = useState({});

  async function getmarketChart(coinid, lable, flag) {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=usd&days=${days}&interval=daily`
      );

      if (flag) {
        setPrices1(response.data[market]);
      } else {
        setPrices2(response.data[market]);
      }
    } catch (error) {
      console.error("Error chart fetching data:", error);
    }
  }

  useEffect(() => {
    if (prices1.length > 0 && prices2.length > 0) {
      setChartdata({
        labels: prices1.map((data) => convertdate(data[0])),
        datasets: [
          {
            label: firstcrypto.name,
            data: prices1.map((data) => data[1]),
            tension: 0.25,
            fill: true,
            border: "1px solid #333",
            backgroundColor: "rgba(54, 162, 235, 0.1)",
            borderColor: "rgba(54, 162, 235, 1)",
            pointRadius: 0,
            pointBackgroundColor: "rgba(54, 162, 235, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(54, 162, 235, 1)",
          },
          {
            label: secondcrypto.name,
            data: prices2.map((data) => data[1]),
            tension: 0.25,
            fill: true,
            border: "1px solid #333",
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            pointRadius: 0,
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
          },
        ],
      });
    }
  }, [prices1, prices2, firstcrypto, secondcrypto]);

  useEffect(() => {
    fetchData("bitcoin", setFirstcrypto, setOne);
    fetchData("ethereum", setSecondcrypto, setTwo);
    fetchdata();
  }, []);

  useEffect(() => {
    getmarketChart("bitcoin", "Bitcoin", true);
    getmarketChart("ethereum", "Ethereum", false);
  }, [days, market]);

  async function fetchData(coinId, setCrypto, setfilter) {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinId}`
      );
      setCrypto(response.data);
      setfilter(coinId);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const onChange = async (value, setCrypto, setfilter, flag) => {
    await fetchData(value, setCrypto, setfilter);
    getmarketChart(value, value, flag);
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

  console.log(chartdata);

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
            onChange={(value) => onChange(value, setFirstcrypto, setOne, true)}
            onSearch={onSearch}
            filterOption={filterOption}
            style={{ width: 200 }}
            defaultActiveFirstOption={false}
            options={data
              .filter((item) => item.id !== two)
              .map((item) => ({
                value: item.id,
                label: renderOption(item),
              }))}
          />
          <Select
            className="select_crypto"
            showSearch
            placeholder={"Select crypto second"}
            optionFilterProp="children"
            onChange={(value) =>
              onChange(value, setSecondcrypto, setTwo, false)
            }
            onSearch={onSearch}
            filterOption={filterOption}
            style={{ width: 200 }}
            defaultActiveFirstOption={false}
            options={data
              .filter((item) => item.id !== one)
              .map((item) => ({
                value: item.id,
                label: renderOption(item),
              }))}
          />
          <SelectDays />
          <ToggleButtons />
        </div>
      )}
      <div className="coin_data">
        {firstcrypto ? <Coin item={firstcrypto} /> : <Listloding count={1} />}
        {secondcrypto ? <Coin item={secondcrypto} /> : <Listloding count={1} />}
      </div>
      <LineChartCompare data={chartdata} multiAxix={true} />
      <div className="dec_container">
        {firstcrypto !== null && <CoinDecription data={firstcrypto} />}
        {secondcrypto !== null && <CoinDecription data={secondcrypto} />}
      </div>
    </div>
  );
}

export default Compare;
