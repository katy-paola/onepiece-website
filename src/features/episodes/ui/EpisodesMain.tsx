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

  return (
    <>
      <header>
        <Link to="/episodes">
          <ArrowLeftIcon />
        </Link>
        <h1>{currentSaga.title}</h1>
      </header>
      <Filter
        data={{
          categories: filterCategories,
          selectedIds: selectedIds,
          onSelectedIdsChange: setSelectedIds,
          query: query,
          onQueryChange: setQuery,
          placeholder: "Search episode...",
        }}
      />
      <section>
        <Sidebar
          data={{
            arcLinks: arcLinks,
            handleClick: handleSidebarClick,
            selectedArcIdToShow: selectedArcIdToShow,
            setSelectedArcIdToShow: setSelectedArcIdToShow,
          }}
        />
        <small>Showing 0 of 0 episodes</small>

        {isLoadingEpisodes && <p>Loading...</p>}

        <EpisodesList
          episodes={filteredEpisodes}
          groupCounts={groupCounts}
          groupTitles={groupTitles}
          ref={virtuosoRef}
          selectedArcIdToShow={selectedArcIdToShow}
        />
        <Button>
          Arc Romance Dawn
          <SecMenuIcon />
        </Button>
      </section>
    </>
  );
}
