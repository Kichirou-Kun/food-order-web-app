import Container from "@ui/Container";
import Typography from "@ui/Typography";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-10">
      <Container>
        <Typography className="text-center capitalize text-gray-700">
          Copyright © {new Date().getFullYear()} Aung Nyein Htet | All Right
          Reverved
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
