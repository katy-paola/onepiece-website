import type { GroupedVirtuosoHandle } from "react-virtuoso";

export const scrollToArc = (
  arcIndex: number,
  groupCounts: number[],
  ref: React.RefObject<GroupedVirtuosoHandle | null>,
) => {
  const flatIndex = groupCounts
    .slice(0, arcIndex)
    .reduce((sum, count) => sum + count, 0);

  ref.current?.scrollToIndex({
    index: flatIndex,
    align: "start",
    behavior: "smooth",
  });
};
