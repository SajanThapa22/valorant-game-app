import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";

export interface Skin {
  wallpaper: string;
}

export interface Weapon {
  uuid: string;
  displayName: string;
  category: string;
  assetPath: string;
  displayIcon: string;
  defaultSkinUuid: string;
  skins: Skin[];
}

const apiClient = new APIclient<Weapon>("/weapons");
const useWeapons = () => {
  return useQuery({
    queryKey: ["weapons"],
    queryFn: apiClient.getAll,
  });
};

export default useWeapons;
