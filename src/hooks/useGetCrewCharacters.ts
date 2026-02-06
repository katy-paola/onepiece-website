import { useEffect, useState } from "react";
import type { Character } from "../utils/types";
import { getCrewCharacters } from "../api/crew";

export default function useGetCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getCharacters = async () => {
      setIsLoading(true);
      try {
        const data = await getCrewCharacters();

        setCharacters(data);
      } catch (err: unknown) {
        console.log("Error getting characters: ", err);
      } finally {
        setIsLoading(false);
      }
    };
    getCharacters();
  }, []);

  return {
    characters,
    isLoading,
  };
}
