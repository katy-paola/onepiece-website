import { useMemo } from "react";
import type { ArcLink, Episode } from "../types";

export function useGetVirtuosoOptions(filteredEpisodes: Episode[]) {
  const { groupCounts, groupTitles, arcLinks } = useMemo(() => {
    const counts: number[] = [];
    const titles: string[] = [];
    const links: ArcLink[] = [];

    if (filteredEpisodes.length === 0) {
      return { groupCounts: [], groupTitles: [], arcLinks: [] };
    }

    let currentCount = 0;

    filteredEpisodes.forEach((episode, index) => {
      const currentArcId = episode.arc.id;
      const previousArcId = filteredEpisodes[index - 1]?.arc.id;

      if (index === 0 || currentArcId !== previousArcId) {
        if (index !== 0) {
          counts.push(currentCount);
        }

        currentCount = 1;
        titles.push(episode.arc.title);

        links.push({
          title: episode.arc.title,
          arcIndex: index,
        });
      } else {
        currentCount++;
      }
    });

    counts.push(currentCount);

    return { groupCounts: counts, groupTitles: titles, arcLinks: links };
  }, [filteredEpisodes]);

  return {
    groupCounts,
    groupTitles,
    arcLinks,
  };
}
