import { useEffect, useState } from "react";
import type { Fruit } from "../types";
import { getFruits } from "../../../api/fruits";

export default function useGetFruits() {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getAllFruits = async () => {
      setIsLoading(true);
      try {
        const data = await getFruits();

        setFruits(data);
      } catch (err: unknown) {
        console.log("Error getting fruits: ", err);
      } finally {
        setIsLoading(false);
      }
    };
    getAllFruits();
  }, []);

  return {
    fruits,
    isLoading,
  };
}
