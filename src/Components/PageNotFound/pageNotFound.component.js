// PageNotFound.jsx
import React from "react";
import { Typography, Box } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

const PageNotFound = ({ data }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent={{ xs: "flex-start", md: "center" }} // Adjusted justifyContent
      height="81vh" // Set height to 81% of the viewport height
    >
      <Typography variant="h5" color="textPrimary" textAlign="center">
        {data}
      </Typography>
      <ErrorIcon color="error" style={{ fontSize: 100, marginTop: 10 }} />
    </Box>
  );
};

export default PageNotFound;
