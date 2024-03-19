import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./style.css";

export default function PaginationControlled({ page, handlepageChange }) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        page={page}
        onChange={(e, v) => handlepageChange(e, v)}
      />
    </Stack>
  );
}
