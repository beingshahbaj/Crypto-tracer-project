import React from "react";
import Listloding from "../../Dashbord/Listloding";
import Coinchartloading from "./Coinchartloading/";

function Coinloading() {
  return (
    <div>
      <Listloding count={1} />
      <Coinchartloading />
    </div>
  );
}

export default Coinloading;
