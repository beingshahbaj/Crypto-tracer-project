import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Btn({ type }) {
  const navigate = useNavigate();
  return (
    <>
      <Button
        className="btn"
        style={{
          borderRadius: "20px",
        }}
        onClick={() => navigate("dashboard")}
        variant={type}
      >
        Dashboard
      </Button>
    </>
  );
}

export default Btn;
