import React from "react";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import ControlledSwitches from "./Switch";
import { NavLink } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CustomizedSwitches from "../Themeswitcher/Index";
export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="mobile-drawer" style={{ display: "flex" }}>
      <CustomizedSwitches />
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <NavLink className={"link"} to={""} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink
            className={"link"}
            to={"compare"}
            onClick={() => setOpen(false)}
          >
            compare
          </NavLink>
          <NavLink
            className={"link"}
            to={"dashboard"}
            onClick={() => setOpen(false)}
          >
            dashboard
          </NavLink>
        </div>
      </Drawer>
    </div>
  );
}
