import React from "react";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { Box } from "@chakra-ui/react";

export default function mainLayout({ children }) {
  return (
    <>
      <Sidebar />
      <Box pl="12vw">
        {children}
        <Footer />
      </Box>
    </>
  );
}
