import React from "react";
import { Button } from "antd";

function Error({ error, fetchAgain, loading }) {
  console.log(error);
  return (
    <div>
      <Button loading={loading} type="primary" onClick={fetchAgain}>
        Fetch Again
      </Button>
    </div>
  );
}

export default Error;
