import React, { useEffect, useState } from "react";
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
import Coinchartloading from "../Coin/Coinloading/Coinchartloading";
import Error from "../common/Errorpage/Index";

function Compare() {
  const { market } = useMarket();
  const { days } = useDays();
  const { data, loading, error, fetchdata } = useCoinData();

  const [charterror, setCharterror] = useState(null);
  const [one, setOne] = useState(null);
  const [two, setTwo] = useState(null);
  const [prices1, setPrices1] = useState([]);
  const [prices2, setPrices2] = useState([]);
  const [firstcrypto, setFirstcrypto] = useState(null);
  const [secondcrypto, setSecondcrypto] = useState(null);
  const [chartdata, setChartdata] = useState(null);

  const [isLoading, setLisLoading] = useState(false);

  async function fetchDataAndChart(coinId, setCrypto, setfilter, flag) {
    setLisLoading(true);
    try {
      const [coinResponse, chartResponse] = await Promise.all([
        axios.get(` https://api.coingecko.com/api/v3/coins/${coinId}`, {
          headers: { "x-cg-demo-api-key": "CG-qM6DKgpX93vMyhRpJ2k4Xkms" },
        }),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
          { headers: { "x-cg-demo-api-key": "CG-qM6DKgpX93vMyhRpJ2k4Xkms" } }
        ),
      ]);

      setCrypto(coinResponse.data);
      setLisLoading(false);
      setfilter(coinId);
      if (flag) {
        setPrices1(chartResponse.data[market]);
      } else {
        setPrices2(chartResponse.data[market]);
      }
    } catch (error) {
      setLisLoading(false);

      setCharterror(error);
    }
  }

  useEffect(() => {
    fetchDataAndChart("bitcoin", setFirstcrypto, setOne, true);
    fetchDataAndChart("ethereum", setSecondcrypto, setTwo, false);
    fetchdata();
  }, [days, market]);

  useEffect(() => {
    if (
      prices1.length > 0 &&
      prices2.length > 0 &&
      firstcrypto &&
      secondcrypto
    ) {
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
            yAxisID: "crypto1",
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
            yAxisID: "crypto2",
          },
        ],
      });
    }
  }, [prices1, prices2, firstcrypto, secondcrypto]);

  const onChange = async (value, setCrypto, setfilter, flag) => {
    await fetchDataAndChart(value, setCrypto, setfilter, flag);
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
      {data.length > 0 ? (
        <div className="BasicSelect">
          <Select
            loading={isLoading}
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
              .map((item) => ({ value: item.id, label: renderOption(item) }))}
          />
          <Select
            loading={isLoading}
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
              .map((item) => ({ value: item.id, label: renderOption(item) }))}
          />
          <SelectDays />
          <ToggleButtons />
        </div>
      ) : error ? (
        <Error error={error} />
      ) : loading ? (
        <Listloding count={1} />
      ) : null}
      <div className="coin_data">
        {firstcrypto ? <Coin item={firstcrypto} /> : <Listloding count={1} />}
        {secondcrypto ? <Coin item={secondcrypto} /> : <Listloding count={1} />}
      </div>
      {chartdata ? (
        <LineChartCompare data={chartdata} multiAxix={true} />
      ) : charterror ? (
        <Error error={charterror} />
      ) : (
        <Coinchartloading />
      )}

      <div className="dec_container">
        {firstcrypto && <CoinDecription data={firstcrypto} />}
        {secondcrypto && <CoinDecription data={secondcrypto} />}
      </div>
    </div>
  );
}

export default Compare;
