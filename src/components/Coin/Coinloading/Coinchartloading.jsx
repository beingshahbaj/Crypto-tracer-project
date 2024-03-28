import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import "./Style.css";
function Media(props) {
  const { loading = false } = props;

  return (
    <div>
      <Grid
        container
        wrap="nowrap"
        sx={{
          display: "grid",
          backgroundColor: "",
          gap: "20px",
          gridTemplateColumns: "repeat(1, 1fr)",
          padding: "20px",
          paddingY: "0px",
        }}
      >
        {loading
          ? Array.from(new Array(1)).map((_, index) => (
              <Box
                key={index}
                sx={{
                  paddingInline: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "100%",
                  height: "80vh",
                  marginRight: 0.5,
                  my: 0.5,
                  borderRadius: 3,
                  backgroundColor: "var(--darkgrey)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    marginTop: "50px",

                    gap: "20px",
                    margin: "15px",
                    alignItems: "center",
                  }}
                >
                  <Skeleton
                    variant="rectangular"
                    width={200}
                    height={40}
                    sx={{
                      borderRadius: 3,
                      backgroundColor: "var(--grey)",
                      border: "1px solid var(--grey)",
                      boxShadow: "var(--shadow)",
                    }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={200}
                    height={40}
                    sx={{
                      borderRadius: 3,
                      backgroundColor: "var(--grey)",
                      border: "1px solid var(--grey)",
                      boxShadow: "var(--shadow)",
                    }}
                  />
                </div>
              </Box>
            ))
          : null}
      </Grid>
      <Grid
        container
        wrap="nowrap"
        sx={{
          display: "grid",
          backgroundColor: "",
          gap: "20px",
          gridTemplateColumns: "repeat(1, 1fr)",
          padding: "20px",
          paddingY: "0px",
        }}
      >
        <Box
          sx={{
            paddingInline: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",

            marginRight: 0.5,
            my: 0.5,
            borderRadius: 3,
            backgroundColor: "var(--darkgrey)",
          }}
        >
          <Skeleton
            variant="rectangular"
            width={200}
            height={40}
            sx={{
              margin: "10px",
              borderRadius: 1,
              backgroundColor: "var(--grey)",
              border: "1px solid var(--grey)",
              boxShadow: "var(--shadow)",
            }}
          />
          <Skeleton
            variant="rectangular"
            width={"99%"}
            height={20}
            sx={{
              margin: "10px",
              borderRadius: 1,
              backgroundColor: "var(--grey)",
              border: "1px solid var(--grey)",
              boxShadow: "var(--shadow)",
            }}
          />
          <Skeleton
            variant="rectangular"
            width={"99%"}
            height={20}
            sx={{
              margin: "10px",
              borderRadius: 1,
              backgroundColor: "var(--grey)",
              border: "1px solid var(--grey)",
              boxShadow: "var(--shadow)",
            }}
          />
          <Skeleton
            variant="rectangular"
            width={"99%"}
            height={20}
            sx={{
              margin: "10px",
              borderRadius: 1,
              backgroundColor: "var(--grey)",
              border: "1px solid var(--grey)",
              boxShadow: "var(--shadow)",
            }}
          />
        </Box>
      </Grid>
    </div>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

function Coinchartloading() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media loading />
    </Box>
  );
}

export default Coinchartloading;
