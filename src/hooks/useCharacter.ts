import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import { useState } from "react";

export interface AgentData {
  background: string;
  description: string;
  displayIcon: string;
  displayName: string;
  uuid: string;
  fullPortrait: string;
  fullPortraitV2: string;
  role: {
    description: string;
    displayIcon: string;
    displayName: string;
    uuid: string;
  };
}

const apiClient = new APIclient<AgentData>("/agents");

const useCharacter = () => {
  return useQuery({
    queryKey: ["agents"],
    queryFn: () =>
      apiClient.getAll({
        params: {
          isPlayableCharacter: true,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 4,
  });
};

export default useCharacter;
