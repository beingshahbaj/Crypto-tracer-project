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
        display: "grid",
        backgroundColor: "",
        gap: "20px",
        gridTemplateColumns: "repeat(1, 1fr)",
        padding: "20px",
      }}
    >
      {loading
        ? Array.from(new Array(props.count)).map((_, index) => (
            <Box
              key={index}
              sx={{
                paddingInline: "10px",
                display: "flex",
                alignItems: "flex-start",
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
                  width={60}
                  height={60}
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "var(--grey)",
                    border: "1px solid var(--grey)",
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
                      border: "1px solid var(--grey)",
                      boxShadow: "var(--shadow)",
                    }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={200}
                    sx={{
                      marginY: "10px",
                      borderRadius: 3,
                      backgroundColor: "var(--grey)",
                      border: "1px solid var(--grey)",
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
                  className="none"
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
                  className="none"
                  variant="rectangular"
                  width={50}
                  height={50}
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "var(--grey)",
                    border: "1px solid var(--grey)",
                    boxShadow: "var(--shadow)",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexGrow: "1",
                  height: "100%",
                  margin: "15px",
                }}
              >
                <Skeleton
                  className="none"
                  variant="rectangular"
                  width={150}
                  height={40}
                  sx={{
                    margin: "10px",
                    borderRadius: 3,
                    backgroundColor: "var(--grey)",
                    border: "1px solid var(--grey)",
                    boxShadow: "var(--shadow)",
                  }}
                />
                <Skeleton
                  className="none"
                  variant="rectangular"
                  width={200}
                  height={40}
                  sx={{
                    margin: "10px",
                    borderRadius: 3,
                    backgroundColor: "var(--grey)",
                    border: "1px solid var(--grey)",
                    boxShadow: "var(--shadow)",
                  }}
                />
                <Skeleton
                  className="none"
                  variant="rectangular"
                  width={200}
                  height={40}
                  sx={{
                    margin: "10px",
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
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Listloding({ count }) {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media loading count={count} />
    </Box>
  );
}
