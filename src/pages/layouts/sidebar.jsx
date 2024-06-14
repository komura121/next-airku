import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

export default function sidebar({ children }) {
  return (
    <Flex zIndex={2} w={{ base: "18vw", md: "12vw", lg: "12vw" }} pos="fixed" minH="full" align="flex-start" top="0">
      <Box bgColor="whitesmoke" w="full" borderRadius={20} h="100vh" m={3} p={3} align="center">
        <Image />
        ini gambar
      </Box>
    </Flex>
  );
}
