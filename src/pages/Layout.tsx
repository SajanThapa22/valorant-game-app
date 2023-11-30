import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";
import valogo from "../assets/valorant-logo.webp";

const Layout = () => {
  return (
    <Box
      backgroundImage={valogo}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="50%"
      backgroundAttachment="fixed"
    >
      <NavBar />
      <Box paddingX={5}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
