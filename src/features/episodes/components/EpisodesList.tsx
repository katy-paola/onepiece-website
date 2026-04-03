import { GroupedVirtuoso, type GroupedVirtuosoHandle } from "react-virtuoso";
import type { Episode } from "../types";
import { forwardRef } from "react";
import { cn } from "../../../shared/lib/utils";
import { type BgColor, BG_COLORS } from "../../../shared/consts";
import { useCurrentTheme } from "../../../shared/hooks/useCurrentTheme";

interface EpisodesListProps {
  data: {
    episodes: Episode[];
    groupCounts: number[];
    groupTitles: string[];
    selectedArcIdToShow: number | null;
    onRangeChanged: (startIndex: number) => void;
  };
}

const EpisodesList = forwardRef<GroupedVirtuosoHandle, EpisodesListProps>(
  function EpisodesList({ data }, ref) {
    const { theme } = useCurrentTheme();
    const bgColor: BgColor = BG_COLORS[theme.color];
    return (
      <GroupedVirtuoso
        ref={ref}
        style={{ height: "100%" }}
        groupCounts={data.groupCounts}
        groupContent={(index) => (
          <div
            className={cn(
              "px-2 py-1 text-center border border-stroke/30 transition-colors",
              bgColor,
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
        rangeChanged={(range) => {
          data.onRangeChanged(range.startIndex);
        }}
      />
    );
  },
);

export default EpisodesList;
