import React from "react";
import "./style.css";
import { NavLink, useNavigate } from "react-router-dom";
import AnchorTemporaryDrawer from "./Drower";
import Btn from "../Button";
import CustomizedSwitches from "../Themeswitcher/Index";
import { Person, Person2 } from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";

function Header() {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  console.log(user, isAuthenticated);

  function handllogout() {
    if (window.confirm("Are you sure you want to logout?")) {
      logout({ returnTo: window.location.origin });
      toast.success("logout succseefully ");
    } else {
      return;
    }
  }

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
        {isAuthenticated && (
          <NavLink className={"link"} to={"wishlist"}>
            Wishlist
          </NavLink>
        )}
        <Btn
          type={"contained"}
          name={"dashboard"}
          onClick={() => Navigate("dashboard")}
        />
        {!isAuthenticated ? (
          <Button type="button" onClick={() => loginWithRedirect()}>
            <Person />
            login
          </Button>
        ) : (
          <Button type="button" onClick={handllogout}>
            <Person />
            logout
          </Button>
        )}
      </ul>
      <div className="drawer">
        <AnchorTemporaryDrawer />
      </div>
    </nav>
  );
}

export default Header;
