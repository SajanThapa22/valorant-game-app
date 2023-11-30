import {
  Box,
  Card,
  Heading,
  Image,
  Text,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import useWeapons, { Weapon } from "../hooks/useWeapons";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

interface Props {
  weapon: Weapon;
}

const WeaponsCard = ({ weapon }: Props) => {
  const { data } = useWeapons();
  return (
    <Card
      display={"flex"}
      justifyContent={"center"}
      height={"500px"}
      border={".5px solid white"}
      background="none"
      borderRadius={0}
      _hover={{
        color: "#FD4556",
      }}
    >
      <Heading fontFamily={"VALORANT"}> {weapon.displayName} </Heading>
      <Box
        transition={"transform .2s ease-in"}
        _hover={{
          transform: "translateY(12px) scale(.9)",
        }}
      >
        <Image width="100%" src={weapon.displayIcon} />
      </Box>
    </Card>
  );
};

export default WeaponsCard;
