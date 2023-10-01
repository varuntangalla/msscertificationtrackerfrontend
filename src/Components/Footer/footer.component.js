// Footer.jsx
import { Typography, Link, Container } from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled("div")({
  backgroundColor: "black",
  color: "white",
  padding: "10px",
  position: "fixed",
  bottom: 0,
  width: "100%",
  textAlign: "center",
});

const LinkStyled = styled(Link)({
  textDecoration: "none",
  color: "white",
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container component="footer">
        <Typography variant="body1">
          <LinkStyled href="/support">Support</LinkStyled>
        </Typography>
        <Typography variant="body2">
          &copy; Miraclesoft 2023. All Rights Reserved.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
