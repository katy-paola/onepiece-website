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

    let episodesPerArc = 0;

    filteredEpisodes.forEach((episode, index) => {
      const currentArcId = episode.arc.id;
      const previousArcId = filteredEpisodes[index - 1]?.arc.id;

      if (index === 0 || currentArcId !== previousArcId) {
        if (index !== 0) {
          counts.push(episodesPerArc);
        }

        episodesPerArc = 1;
        titles.push(episode.arc.title);

        links.push({
          title: episode.arc.title,
          arcIndex: titles.length - 1,
        });
      } else {
        episodesPerArc++;
      }
    });

    counts.push(episodesPerArc);

    return { groupCounts: counts, groupTitles: titles, arcLinks: links };
  }, [filteredEpisodes]);

  return {
    groupCounts,
    groupTitles,
    arcLinks,
  };
}
