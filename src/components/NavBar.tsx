import { Box, HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/valorant-logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" paddingX="20px">
      <Image src={Logo} boxSize="75px" />
      <Box
        width={"650px"}
        display={"flex"}
        justifyContent={"space-evenly"}
        fontFamily={"VALORANT"}
        cursor={"pointer"}
      >
        <NavLink to={"/"}>
          <Text fontSize={30}>Agents</Text>
        </NavLink>
        <NavLink to={"/weapons"}>
          <Text fontSize={30}>Weapons</Text>
        </NavLink>
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
