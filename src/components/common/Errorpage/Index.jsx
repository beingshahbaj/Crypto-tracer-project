import React, { useEffect } from "react";
import { Button } from "antd";
import { useCoinData } from "../../../ContexApi/AllCoindataProvider";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Error({ error }) {
  const { data, loading, fetchdata } = useCoinData();

  const fetchtataagain = () => {
    fetchdata();
  };

  console.log(error);
  return (
    <div className={"error-page"}>
      <Button loading={loading} type="primary" onClick={fetchtataagain}>
        Fetch Again
      </Button>
      <h1>{error.message}</h1>
    </div>
  );
}

export default Error;
