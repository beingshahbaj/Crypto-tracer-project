import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Btn({ type, name, login }) {
  const navigate = useNavigate();
  return (
    <>
      <Button
        className="btn"
        style={{
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => navigate("dashboard")}
        variant={type}
      >
        {name}
        {login ? login : null}
      </Button>
    </>
  );
}

export default Btn;
