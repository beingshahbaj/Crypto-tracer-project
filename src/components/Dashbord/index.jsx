import React, { useState, useEffect } from "react";
import LabTabs from "./Tabs";
import Error from "../common/Errorpage/Index";
import { useCoinData } from "../../ContexApi/AllCoindataProvider";

function Dashboard() {
  const { data, loading, error, fetchdata } = useCoinData();

  document.title = "crypto dashboard";
  useEffect(() => {
    data.length == 0 && fetchdata();
  }, []);

  return (
    <div>
      {error ? (
        <Error error={error} />
      ) : (
        <LabTabs data={data} loading={loading} error={error} />
      )}
    </div>
  );
}

export default Dashboard;
