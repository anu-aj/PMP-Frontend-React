import { useState } from "react";
import {
  Flex,
  Heading,
  Stack,
 chakra,
  Box,
  Link
} from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react';
import SIST from "../imgs/SIST.png";

const SignUp = () => {

  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
    <GridItem>
    <Flex  
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center">
          <img src={SIST}  alt='sistIcon'></img>
      </Flex>
    </GridItem>
    <GridItem>
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color="teal.400">Please contact your concernd Guide or Year Coordinator</Heading>
    
      </Stack>
      <Box>
        Existing User?{" "}
        <Link color="teal.500" href="#">
          Login
        </Link>
      </Box>
    </Flex>
    </GridItem>
    </Grid>
  
  );
};

export default SignUp;
