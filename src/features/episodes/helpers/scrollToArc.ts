import type { VirtuosoHandle } from "react-virtuoso";

export const scrollToArc = (
  index: number,
  virtuosoRef: React.RefObject<VirtuosoHandle | null>,
) => {
  virtuosoRef.current?.scrollToIndex({
    index,
    align: "start",
    behavior: "smooth",
  });
};
