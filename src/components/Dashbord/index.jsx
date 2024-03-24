import React, { useState, useEffect } from "react";
import LabTabs from "./Tabs";
import Error from "../common/Errorpage/Index";
import { useCoinData } from "../../ContexApi/AllCoindataProvider";

function Dashboard() {
  const { data, loading, error, fetchdata } = useCoinData();

  useEffect(() => {
    fetchdata();
  }, []);

  console.log(data, loading, error);
  return (
    <div>
      {error ? (
        <Error />
      ) : (
        <LabTabs data={data} loading={loading} error={error} />
      )}
    </div>
  );
}

export default Dashboard;
