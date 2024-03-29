import React from "react";
import "./style.css";
import { NavLink, useNavigate } from "react-router-dom";
import AnchorTemporaryDrawer from "./Drower";
import Btn from "../Button";
import CustomizedSwitches from "../Themeswitcher/Index";

function Header() {
  const Navigate = useNavigate();
  return (
    <nav>
      <ul>
        <h1>
          CryptoTracker{" "}
          <span style={{ color: "var(--blue)", borderRadius: "10px" }}>.</span>
        </h1>
      </ul>
      <ul className="links">
        <CustomizedSwitches />
        <NavLink className={"link"} to={""}>
          Home
        </NavLink>
        <NavLink className={"link"} to={"compare"}>
          compare
        </NavLink>
        <NavLink className={"link"} to={"wishlist"}>
          Wishlist
        </NavLink>
        <Btn type={"contained"} onClick={() => Navigate("dashboard")} />
      </ul>
      <div className="drawer">
        <AnchorTemporaryDrawer />
      </div>
    </nav>
  );
}

export default Header;
