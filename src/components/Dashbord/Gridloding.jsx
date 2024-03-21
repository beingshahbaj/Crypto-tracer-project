import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid
      container
      wrap="nowrap"
      sx={{
        width: "100%",
        display: "grid",
        backgroundColor: "",
        gap: "20px",
        gridTemplateColumns: "repeat(3, 1fr)",
        padding: "20px",
      }}
    >
      {loading
        ? Array.from(new Array(9)).map((_, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                height: "100%",
                marginRight: 0.5,
                my: 0.5,
                borderRadius: 3,
                backgroundColor: "var(--darkgrey)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  margin: "15px",
                  alignItems: "center",
                }}
              >
                <Skeleton
                  variant="rectangular"
                  width={50}
                  height={50}
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "var(--grey)",

                    boxShadow: "var(--shadow)",
                  }}
                />
                <div>
                  <Skeleton
                    variant="rectangular"
                    width={200}
                    height={40}
                    sx={{
                      marginY: "10px",
                      borderRadius: 3,
                      backgroundColor: "var(--grey)",

                      boxShadow: "var(--shadow)",
                    }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={100}
                    sx={{
                      marginY: "10px",
                      borderRadius: 3,
                      backgroundColor: "var(--grey)",

                      boxShadow: "var(--shadow)",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  margin: "15px",
                  alignItems: "center",
                }}
              >
                <Skeleton
                  variant="rectangular"
                  width={200}
                  height={30}
                  sx={{
                    borderRadius: 3,
                    backgroundColor: "var(--grey)",

                    boxShadow: "var(--shadow)",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  width={50}
                  height={50}
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "var(--grey)",

                    boxShadow: "var(--shadow)",
                  }}
                />
              </div>
              <div>
                <Skeleton
                  variant="rectangular"
                  sx={{
                    margin: "10px",
                    borderRadius: "10px",
                    backgroundColor: "var(--grey)",

                    boxShadow: "var(--shadow)",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  sx={{
                    margin: "10px",
                    borderRadius: "10px",
                    backgroundColor: "var(--grey)",

                    boxShadow: "var(--shadow)",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  sx={{
                    margin: "10px",
                    borderRadius: "10px",
                    backgroundColor: "var(--grey)",

                    boxShadow: "var(--shadow)",
                  }}
                />
              </div>
            </Box>
          ))
        : null}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Gridloding() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media loading />
    </Box>
  );
}
