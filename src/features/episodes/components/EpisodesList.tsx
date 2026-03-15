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
        style={{ height: "80vh" }}
        groupCounts={data.groupCounts}
        groupContent={(index) => (
          <div
            className={cn(
              "px-2 py-1 text-center bg-radial border border-stroke/30 transition-colors",
              data.selectedArcIdToShow === index && "border border-stroke",
            )}
          >
            {data.groupTitles[index]}
          </div>
        )}
        itemContent={(index) => {
          const episode = data.episodes[index];
          return (
            <p className="m-2">
              {episode?.id}. {episode?.title}
            </p>
          );
        }}
      />
    );
  },
);

export default EpisodesList;
