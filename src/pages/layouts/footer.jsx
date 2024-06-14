import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function footer() {
  return (
    <Flex justify="center" py={2} shadow="2xl" bgColor="white" pos="fixed" bottom="0px" width="100%" zIndex="1">
      <Text>Development @2024</Text>
    </Flex>
  );
}

export default footer;
