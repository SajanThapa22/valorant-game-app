import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const [isDark, setIsDark] = useState<boolean>();
  const onSwitchTouch = () => {
    toggleColorMode();
    setIsDark(!isDark);
  };
  return (
    <HStack>
      <Switch
        colorScheme="red"
        isChecked={colorMode === "dark"}
        onChange={onSwitchTouch}
      />
      <Text>{isDark === true ? "Light Mode" : "Dark Mode"}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
