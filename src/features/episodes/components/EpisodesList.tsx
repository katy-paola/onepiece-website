import { GroupedVirtuoso, type GroupedVirtuosoHandle } from "react-virtuoso";
import type { Episode } from "../types";
import { forwardRef } from "react";
import { cn } from "../../../shared/lib/utils";

interface EpisodesListProps {
  data: {
    episodes: Episode[];
    groupCounts: number[];
    groupTitles: string[];
    selectedArcIdToShow: number | null;
  };
}

const EpisodesList = forwardRef<GroupedVirtuosoHandle, EpisodesListProps>(
  function EpisodesList({ data }, ref) {
    return (
      <GroupedVirtuoso
        ref={ref}
        style={{ height: "70vh" }}
        groupCounts={data.groupCounts}
        groupContent={(index) => (
          <div
            className={cn(
              "bg-amber-50 border border-transparent transition-colors",
              data.selectedArcIdToShow === index && "border border-stroke",
            )}
          >
            {data.groupTitles[index]}
          </div>
        )}
        itemContent={(index) => {
          const episode = data.episodes[index];
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
