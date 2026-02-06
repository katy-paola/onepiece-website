import { GroupedVirtuoso, type VirtuosoHandle } from "react-virtuoso";
import type { Episode } from "../utils/types";
import { forwardRef } from "react";

type EpisodesListProps = {
  episodes: Episode[];
  groupCounts: number[];
  groupTitles: string[];
  isLoading?: boolean;
};

const EpisodesList = forwardRef<VirtuosoHandle, EpisodesListProps>(
  function EpisodesList(
    { episodes, groupCounts, groupTitles, isLoading = false },
    ref,
  ) {
    return (
      <GroupedVirtuoso
        ref={ref}
        style={{ height: "100%" }}
        groupCounts={groupCounts}
        groupContent={(index) => (
          <div
            style={{
              background: "#2c3e50",
              color: "white",
              padding: "10px",
              zIndex: 10,
            }}
          >
            {isLoading ? `Loading arc ${index + 1}...` : groupTitles[index]}
          </div>
        )}
        itemContent={(index) => {
          if (isLoading) {
            return <p>Loading episode {index + 1}...</p>;
          }
          const episode = episodes[index];
          return (
            <div key={episode.id}>
              {episode.id}. {episode.title} - {episode.arc.title}
            </div>
          );
        }}
      />
    );
  },
);

export default EpisodesList;
