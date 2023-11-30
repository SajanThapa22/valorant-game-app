import {
  Card,
  HStack,
  Image,
  VStack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { AgentData } from "../hooks/useCharacter";

interface Props {
  agent: AgentData;
}
const CharactersCard = ({ agent }: Props) => {
  return (
    <Card fontFamily="VALORANT" bgColor="none" overflow="hidden">
      <SimpleGrid
        templateColumns={{
          base: "1fr",
          lg: "7fr 3fr",
        }}
        paddingX={10}
      >
        <Image src={agent.fullPortrait} />

        <VStack textAlign="left" alignItems="center" justifyContent={"center"}>
          <Text width="100%" fontSize={25} marginBottom={2}>
            // ROLE
          </Text>

          <HStack width="100%" marginBottom={7} gap={3}>
            <Text
              fontFamily="VALORANT"
              textAlign="left"
              fontSize={30}
              textTransform="uppercase"
            >
              {agent.role.displayName}
            </Text>
            <Image maxWidth={50} src={agent.role.displayIcon} />
          </HStack>

          <Text width="100%" fontSize="1rem" marginBottom={2}>
            {`// BIOGRAPHY`}
          </Text>
          <Text>{agent.description}</Text>
        </VStack>
      </SimpleGrid>
    </Card>
  );
};

export default CharactersCard;
