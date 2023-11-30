import { useState } from "react";
import useWeapons from "../hooks/useWeapons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
} from "@chakra-ui/react";
import WeaponsCard from "./WeaponsCard";
import { BsChevronDown } from "react-icons/bs";
import categories from "../data/weaponsCategories";

const WeaponsGrid = () => {
  const { data: weapons, error, isLoading } = useWeapons();
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const visibleWeapons = selectedCategory
    ? weapons?.data.filter((weapon) => weapon.category === selectedCategory)
    : weapons?.data;
  return (
    <>
      <Menu>
        <MenuButton
          bg={"transparent"}
          as={Button}
          rightIcon={<BsChevronDown />}
          fontSize={25}
        >
          {!selectedCategory ? "All weapons" : selectedCategory.substr(21)}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => setSelectedCategory("")}>
            All Weapons
          </MenuItem>
          {categories.map((category) => (
            <MenuItem
              onClick={() => {
                setSelectedCategory(category);
              }}
              key={category}
            >
              {category.substr(21)}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <SimpleGrid
        paddingX={10}
        columns={{
          base: 1,
          md: 2,
        }}
      >
        {visibleWeapons?.map((weapon) => (
          <WeaponsCard weapon={weapon} key={weapon.uuid} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default WeaponsGrid;
