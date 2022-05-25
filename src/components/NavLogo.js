import React from "react";
import { Box, Text } from "@chakra-ui/react";
import SIST from "../imgs/SIST.png";

export default function NavLogo(props) {
  return (
    <Box {...props}>
      <img src={SIST} style={{height:'50px',width:'45px'}} alt='sistIcon'></img>
    </Box>
  );
}