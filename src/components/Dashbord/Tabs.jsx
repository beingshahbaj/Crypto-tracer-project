import React, { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { List } from "./List";
import { Grid } from "./Grid";
import Gridloding from "./Gridloding";
import Listloding from "./Listloding";
import "./style.css";
import PaginationControlled from "./Pagination/Pagination";
import Searchf from "./search_filter_sort/Search";

const style = {
  color: "var(--white)",
  width: "50vw",
  fontSize: "1.2rem",
  fontWeight: "600",
  textTransform: "capitalize",
};

export default function LabTabs({ data, loading }) {
  const [pagecoin, setPageCoin] = useState([]);
  const [value, setValue] = useState("1");
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handlepageChange = (e, v) => {
    setPage(v);
    let prevIndex = (v - 1) * 9;
    setPageCoin(data.slice(prevIndex, prevIndex + 9));
  };

  useEffect(() => {
    setPageCoin(data.slice(0, 9));
  }, [data]);

  const filtersearch = (e) => {
    setSearch(e.target.value);
    if (search.length == 0) {
      setPageCoin(data.slice(0, 9));
    } else {
      const filterdcoin = data.filter((item) =>
        item.name
          .toLowerCase()
          .includes(
            search.toLowerCase() ||
              item.symbol.toLowerCase().includes(search.toLowerCase())
          )
      );

      setPageCoin(filterdcoin.slice(0, 9));
    }
  };

  return (
    <div>
      <Searchf search={search} filtersearch={filtersearch} />
      <TabContext value={value}>
        <div sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="grid" value="1" sx={style} />
            <Tab label="list" value="2" sx={style} />
          </TabList>
        </div>
        <TabPanel value="1">
          {loading ? <Gridloding /> : <Grid data={pagecoin} />}
        </TabPanel>
        <TabPanel value="2">
          {loading ? <Listloding count={10} /> : <List data={pagecoin} />}
        </TabPanel>
      </TabContext>
      {pagecoin.length > 0 && (
        <PaginationControlled page={page} handlepageChange={handlepageChange} />
      )}
    </div>
  );
}
