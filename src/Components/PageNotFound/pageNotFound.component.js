// PageNotFound.jsx
import React from "react";
import { Typography, Box } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

const PageNotFound = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h2" color="textPrimary">
        Page Not Found 404
      </Typography>
      <ErrorIcon color="error" style={{ fontSize: 100, marginTop: 10 }} />
    </Box>
  );
};

export default PageNotFound;
