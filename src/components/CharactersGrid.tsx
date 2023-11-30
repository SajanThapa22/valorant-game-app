import {
  Button,
  Grid,
  GridItem,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";
import CharactersCard from "./CharactersCard";
import { BsChevronDown } from "react-icons/bs";
import { roles } from "../roles";
import useCharacter from "../hooks/useCharacter";
import { useState } from "react";

const CharactersGrid = () => {
  const { data: agents, error, isLoading } = useCharacter();

  const [selectedCharacter, setSelectedCharacter] = useState<string>("Gekko");
  const [selectedRole, setSelectedRole] = useState<string>();

  const visibleAgents = selectedCharacter
    ? agents?.data.filter((agent) => agent.displayName === selectedCharacter)
    : agents?.data;

  const visibleAgentsByRole = selectedRole
    ? agents?.data.filter((agent) => agent.role.displayName === selectedRole)
    : agents?.data;

  return (
    <>
      <Grid
        templateAreas={{
          base: `"card"`,
          md: `"list card "`,
        }}
      >
        <Show above="lg">
          <GridItem
            maxWidth="20vw"
            area="list"
            height="94vh"
            overflow="scroll"
            paddingX={5}
          >
            <Menu>
              <MenuButton
                bg={"transparent"}
                as={Button}
                rightIcon={<BsChevronDown />}
                fontSize={25}
              >
                {!selectedRole ? "All roles" : selectedRole}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => setSelectedRole("")}>
                  All roles
                </MenuItem>
                {roles.map((role) => (
                  <MenuItem
                    onClick={() => {
                      setSelectedRole(role);
                    }}
                    key={role}
                  >
                    {role}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            {visibleAgentsByRole?.map((agent) => (
              <Heading
                fontFamily={"VALORANT"}
                _hover={{
                  transform: "translateX(15px)",
                  transition: ".65s ",
                }}
                color={selectedCharacter === agent.displayName ? "#FD4556" : ""}
                transform={
                  selectedCharacter === agent.displayName
                    ? "translateX(15px)"
                    : ""
                }
                variant="link"
                fontSize="27px"
                marginY={5}
                cursor={"pointer"}
                key={agent.uuid}
                textTransform="uppercase"
                onClick={() => setSelectedCharacter(agent.displayName)}
              >
                {agent.displayName}
              </Heading>
            ))}
          </GridItem>
        </Show>
        <GridItem width="auto" area="card">
          {visibleAgents?.map((agent) => (
            <CharactersCard agent={agent} key={agent.uuid}></CharactersCard>
          ))}
        </GridItem>
      </Grid>
    </>
  );
};

export default CharactersGrid;
