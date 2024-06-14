import { Flex, Box, Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";
import React from "react";

function index() {
  return (
    <Flex mx="1%" my="2%">
      <Box h="100px" w="350px" bg="white" borderRadius={10} p={2} borderWidth={2} fontFamily="poppins">
        <Stat>
          <StatLabel>Annual Pays</StatLabel>
          <StatNumber>Rp.0.00</StatNumber>
          <StatHelpText>Feb 12 - Feb 28</StatHelpText>
        </Stat>
      </Box>
    </Flex>
  );
}

export default index;
