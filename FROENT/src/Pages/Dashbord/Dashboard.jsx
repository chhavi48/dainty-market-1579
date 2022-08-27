import { Box } from "@chakra-ui/react";
import React from "react";
import Calender from "../../Calender/Calender";
import WithSubnavigation from "../../Components/Navbar/Navbar";

const Dashboard = () => {
  return (
    <>
      <Box py={{ base: 2 }} px={{ base: 4 }}>
        <WithSubnavigation />
      </Box>

      <Calender />
    </>
  );
};

export default Dashboard;
