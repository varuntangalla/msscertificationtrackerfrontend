import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import MssLogo from "../../assets/mss-logo.jpeg";
// Create custom styled components
const CustomAppBar = styled(AppBar)({
  backgroundColor: "white",
});

const Logo = styled("img")({
  marginRight: "8px", // Adjust the spacing as needed
});

// const LogoText = styled(Typography)({
//   color: "blue", // Set text color to blue
// });

// Create the Navbar component
const MyNavbar = () => {
  return (
    <CustomAppBar position="static">
      <Toolbar>
        <Logo
          src={MssLogo} // Replace with the URL of your logo
          alt="MssLogo"
          width="100"
          height="30"
        />
        {/* <LogoText variant="h6">MSS</LogoText> */}
      </Toolbar>
    </CustomAppBar>
  );
};

export default MyNavbar;
