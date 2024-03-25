import React from "react";
import { Button } from "antd";
import { useCoinData } from "../../../ContexApi/AllCoindataProvider";
import "./style.css";

function Error({ error }) {
  const { loading, fetchData } = useCoinData();

  const fetchdata = () => {
    fetchData();
  };

  console.log(error);
  return (
    <div className={"error-page"}>
      <Button loading={loading} type="primary" onClick={fetchdata}>
        Fetch Again
      </Button>
      <h1>{error.message}</h1>
    </div>
  );
}

export default Error;
