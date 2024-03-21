import React from "react";
import { Button } from "antd";

function Error({ error, fetchAgain, loading }) {
  return (
    <div>
      <h2>{error.message}</h2>
      <Button loading={loading} type="primary" onClick={fetchAgain}>
        Fetch Again
      </Button>
    </div>
  );
}

export default Error;
