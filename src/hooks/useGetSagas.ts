import { useEffect, useState } from "react";
import type { Saga } from "../utils/types";
import { getSagas } from "../api/episodes";

export function useGetSagas() {
  const [sagas, setSagas] = useState<Saga[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getAllSagas = async () => {
      setIsLoading(true);
      try {
        const data = await getSagas();

        setSagas(data);
      } catch (err: unknown) {
        console.log("Error getting sagas: ", err);
      } finally {
        setIsLoading(false);
      }
    };
    getAllSagas();
  }, []);

  return {
    sagas,
    isLoading,
  };
}
