import { GroupedVirtuoso, type GroupedVirtuosoHandle } from "react-virtuoso";
import type { Episode } from "../types";
import { forwardRef } from "react";

interface EpisodesListProps {
  episodes: Episode[];
  groupCounts: number[];
  groupTitles: string[];
}

const EpisodesList = forwardRef<GroupedVirtuosoHandle, EpisodesListProps>(
  function EpisodesList({ episodes, groupCounts, groupTitles }, ref) {
    return (
      <GroupedVirtuoso
        ref={ref}
        style={{ height: "70vh" }}
        groupCounts={groupCounts}
        groupContent={(index) => (
          <div className="bg-amber-50">{groupTitles[index]}</div>
        )}
        itemContent={(index) => {
          const episode = episodes[index];
          return (
            <p>
              {episode?.id}. {episode?.title}
            </p>
          );
        }}
      />
    );
  },
);

export default EpisodesList;
