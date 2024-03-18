import  React from "react";
import Box from "@mui/material/Box";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { List } from "./List";
import { Grid } from "./Grid";

export default function LabTabs({ data, loading, error }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWaight: "600",

    textTransform: "capitalize",
  };
  return (
    <div>
      <TabContext value={value}>
        <div sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="grid" value="1" sx={style} />
            <Tab label="list" value="2" sx={style} />
          </TabList>
        </div>
        <TabPanel value="1">
          <List />
        </TabPanel>
        <TabPanel value="2">
          <Grid />
        </TabPanel>
      </TabContext>
    </div>
  );
}
