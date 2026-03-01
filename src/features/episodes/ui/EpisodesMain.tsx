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
import type { VirtuosoHandle } from "react-virtuoso";
import { useRef } from "react";

export default function EpisodesMain() {
  const { sagaId } = useParams();
  const currentSaga = SAGAS.find((saga) => saga.id === Number(sagaId)) ?? {
    id: 0,
    title: "",
    href: "#",
  };

  const { episodes, isLoading: isLoadingEpisodes } = useGetEpisodes(
    Number(sagaId),
  );

  const virtuosoRef = useRef<VirtuosoHandle>(null);

  const { groupCounts, groupTitles, arcLinks } =
    useGetVirtuosoOptions(episodes);

  const handleSidebarClick = (arcIndex: number) => {
    scrollToArc(arcIndex, virtuosoRef);
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
          placeholder: "Search episodes...",
          categories: arcLinks.map((arc) => arc.title),
        }}
      />
      <section>
        <Sidebar arcLinks={arcLinks} handleClick={handleSidebarClick} />
        <small>Showing 0 of 0 episodes</small>

        {isLoadingEpisodes && <p>Loading...</p>}
        <EpisodesList
          episodes={episodes}
          groupCounts={groupCounts}
          groupTitles={groupTitles}
          ref={virtuosoRef}
        />
        <Button>
          Arc Romance Dawn
          <SecMenuIcon />
        </Button>
      </section>
    </>
  );
}
