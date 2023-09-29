// Import necessary dependencies
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Create custom styled components
const CustomAppBar = styled(AppBar)({
  backgroundColor: "black",
});

const Logo = styled("img")({
  marginRight: "8px", // Adjust the spacing as needed
});

// Create the Navbar component
const MyNavbar = () => {
  return (
    <CustomAppBar position="static">
      <Toolbar>
        {/* <Logo
          src="../assets/mss-logo.jpeg" // Replace with the URL of your logo
          alt="MssLogo"
          width="30"
          height="30"
        /> */}
        <Typography variant="h6">MSS</Typography>
      </Toolbar>
    </CustomAppBar>
  );
};

export default MyNavbar;
