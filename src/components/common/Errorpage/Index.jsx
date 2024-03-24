import React from "react";
import { Button } from "antd";
import { useCoinData } from "../../../ContexApi/AllCoindataProvider";

function Error() {
  const { loading, error, fetchData } = useCoinData();

  const fetchdata = () => {
    fetchData();
  };

  console.log(error);
  return (
    <div>
      <Button loading={loading} type="primary" onClick={fetchdata}>
        Fetch Again
      </Button>
    </div>
  );
}

export default Error;
