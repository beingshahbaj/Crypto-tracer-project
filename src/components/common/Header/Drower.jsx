import React from "react";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import ControlledSwitches from "./Switch";
import { NavLink } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="mobile-drawer">
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <NavLink className={"link"} to={""}>
            Home
          </NavLink>
          <NavLink className={"link"} to={"compare"}>
            compare
          </NavLink>
          <NavLink className={"link"} to={"dashboard"}>
            dashboard
          </NavLink>
          <ControlledSwitches />
        </div>
      </Drawer>
    </div>
  );
}
