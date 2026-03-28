import { useEffect, useState } from "react";
import type { Episode } from "../types";
import { getEpisodes } from "../../../api/episodes";

export function useGetEpisodes(sagaId: number) {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getEpisodesBySagaId = async () => {
      setIsLoading(true);
      try {
        const data = await getEpisodes(sagaId);

        setEpisodes(data);
      } catch (err: unknown) {
        console.log("Error getting episodes: ", err);
      } finally {
        setIsLoading(false);
      }
    };
    getEpisodesBySagaId();
  }, [sagaId]);

  return {
    episodes,
    isLoading,
  };
}
