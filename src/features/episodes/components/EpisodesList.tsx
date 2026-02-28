import { GroupedVirtuoso, type VirtuosoHandle } from "react-virtuoso";
import type { Episode } from "../types";
import { forwardRef } from "react";

type EpisodesListProps = {
  episodes: Episode[];
  groupCounts: number[];
  groupTitles: string[];
};

const EpisodesList = forwardRef<VirtuosoHandle, EpisodesListProps>(
  function EpisodesList({ episodes, groupCounts, groupTitles }, ref) {
    return (
      <GroupedVirtuoso
        ref={ref}
        style={{ height: "100vh" }}
        groupCounts={groupCounts}
        groupContent={(index) => <div>{groupTitles[index]}</div>}
        itemContent={(index) => {
          const episode = episodes[index];
          return (
            <p key={episode.id}>
              {episode.id}. {episode.title} - {episode.arc.title}
            </p>
          );
        }}
      />
    );
  },
);

export default EpisodesList;
