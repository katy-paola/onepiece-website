import { Link, useParams } from "react-router-dom";
import { SAGAS } from "../consts";
import ArrowLeftIcon from "../../../shared/icons/ArrowLeftIcon";
import Filter from "../../../shared/ui/Filter";
import type { ArcLink } from "../types";
import Button from "../../../shared/components/Button";
import SecMenuIcon from "../../../shared/icons/SecMenuIcon";
import Sidebar from "../components/Sidebar";
import { useGetEpisodes } from "../hooks/useGetEpisodes";

const MOCK_ARCS: ArcLink[] = [];
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
          categories: MOCK_ARCS.map((arc) => arc.title),
        }}
      />
      <section>
        <small>Showing 0 of 0 episodes</small>
        <p>Arc Romance Dawn</p>
        <ul>
          {isLoadingEpisodes && <p>Loading...</p>}
          {episodes.slice(0, 10).map((episode, index) => (
            <li key={index}>
              {episode.id}. {episode.title}
            </li>
          ))}
        </ul>
        <Button>
          Arc Romance Dawn
          <SecMenuIcon />
        </Button>
        <Sidebar />
      </section>
    </>
  );
}
