import { useState, useEffect } from "react";
import { CircularProgress, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const LoadingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching with a delay
    setTimeout(() => {
      // Assuming your data fetching logic here
      // Replace this with your actual data fetching code
      setData([
        /* your data here */
      ]);
      setLoading(false);
    }, 2000); // Simulating a 2-second delay
  }, []);

  return (
    <StyledContainer>
      {loading ? (
        // Display loading spinner if still loading
        <CircularProgress />
      ) : (
        // Display your content when data is loaded
        <div>{/* Your content goes here */}</div>
      )}
    </StyledContainer>
  );
};

export default LoadingComponent;
