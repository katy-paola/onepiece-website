import { Link, useParams } from "react-router-dom";
import { SAGAS } from "../consts";
import ArrowLeftIcon from "../../../shared/icons/ArrowLeftIcon";
import Filter from "../../../shared/ui/Filter";
import Button from "../../../shared/components/Button";
import SecMenuIcon from "../../../shared/icons/SecMenuIcon";
import Sidebar from "../components/Sidebar";
import { useGetEpisodes } from "../hooks/useGetEpisodes";
import EpisodesList from "../components/EpisodesList";
import { useGetVirtuosoOptions } from "../hooks/useGetVirtuosoOptions";
import { scrollToArc } from "../helpers/scrollToArc";
import type { GroupedVirtuosoHandle } from "react-virtuoso";
import { useMemo, useRef, useState } from "react";
import { useFilter } from "../../../shared/hooks/useFilter";
import { cn } from "../../../shared/lib/utils";

export default function EpisodesMain() {
  const { sagaId } = useParams();
  const currentSaga = SAGAS.find((saga) => saga.id === Number(sagaId)) ?? {
    id: 0,
    title: "",
    href: "#",
  };

  const [selectedArcIdToShow, setSelectedArcIdToShow] = useState<number | null>(
    null,
  );

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const { episodes, isLoading: isLoadingEpisodes } = useGetEpisodes(
    Number(sagaId),
  );

  const {
    query,
    setQuery,
    selectedIds,
    setSelectedIds,
    filteredData: filteredEpisodes,
  } = useFilter({
    data: episodes,
    getItemSearchText: (episode) => episode.title,
    getItemFilterId: (episode) => episode.arc.id,
  });

  const filterCategories = useMemo(() => {
    return Array.from(new Set(episodes.map((e) => e.arc.id))).map((arcId) => ({
      id: arcId,
      label: episodes.find((e) => e.arc.id === arcId)?.arc.title || "",
    }));
  }, [episodes]);

  const virtuosoRef = useRef<GroupedVirtuosoHandle>(null);

  const { groupCounts, groupTitles, arcLinks } =
    useGetVirtuosoOptions(filteredEpisodes);

  const handleSidebarClick = (groupIndex: number) => {
    scrollToArc(groupIndex, groupCounts, virtuosoRef);
  };

  const [visibleArcIndex, setVisibleArcIndex] = useState(0);

  const handleRangeChanged = (startIndex: number) => {
    let acc = 0;

    for (let i = 0; i < groupCounts.length; i++) {
      acc += groupCounts[i];

      if (startIndex < acc) {
        setVisibleArcIndex(i);
        break;
      }
    }
  };

  return (
    <>
      <header className="flex items-center gap-3">
        <Link to="/episodes" className="hover:scale-105 transition-transform">
          <ArrowLeftIcon className="size-8" />
        </Link>
        <h1 className="text-3xl font-semibold">{currentSaga.title}</h1>
      </header>
      <section className="grid grid-rows-[auto_1fr] gap-6 h-full lg:grid-cols-[8fr_2fr]">
        <Filter
          data={{
            categories: filterCategories,
            selectedIds: selectedIds,
            onSelectedIdsChange: setSelectedIds,
            query: query,
            onQueryChange: setQuery,
            placeholder: "Search episode...",
          }}
          className="lg:order-2"
        />
        <section className="grid grid-cols-1 gap-4 md:grid-cols-[3fr_7fr] grid-rows-[auto_1fr] flex-1">
          <Sidebar
            data={{
              arcLinks: arcLinks,
              handleClick: handleSidebarClick,
              selectedArcIdToShow: selectedArcIdToShow,
              setSelectedArcIdToShow: setSelectedArcIdToShow,
              setIsOpen: setIsSidebarOpen,
              visibleArcIndex: visibleArcIndex,
            }}
            className={cn(
              "hidden fixed z-10 bottom-18.5 left-4 right-4 h-max md:flex md:static md:row-span-2 md:z-0",
              isSidebarOpen && "flex",
            )}
          />
          <small>
            Showing {filteredEpisodes.length} of {episodes.length} episodes
          </small>

          {isLoadingEpisodes && <p>Loading...</p>}

          <EpisodesList
            data={{
              episodes: filteredEpisodes,
              groupCounts: groupCounts,
              groupTitles: groupTitles,
              selectedArcIdToShow: selectedArcIdToShow,
              onRangeChanged: handleRangeChanged,
            }}
            ref={virtuosoRef}
          />
          <Button
            hierarchy="secondary"
            className="flex items-center justify-between fixed left-4 right-4 bottom-4 z-10 md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {groupTitles[visibleArcIndex] ?? ""}
            <SecMenuIcon />
          </Button>
        </section>
      </section>
    </>
  );
}
