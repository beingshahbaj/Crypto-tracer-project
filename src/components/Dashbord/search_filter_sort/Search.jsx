import React from "react";
import "./style.css";
import { Search } from "@mui/icons-material";

function Searchf({ search , filtersearch  }) {
  return (
    <div>
      <div className="search_box">
        <Search />
        <input type="search" value={search} onChange={(e) => filtersearch(e)} />
      </div>
    </div>
  );
}

export default Searchf;
