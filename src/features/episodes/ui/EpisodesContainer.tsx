import { Link } from "react-router-dom";
import { SAGAS } from "../consts";
import ArrowLeftIcon from "../../../shared/icons/ArrowLeftIcon";
import Filter from "../../../shared/ui/Filter";
import type { ArcLink, Episode } from "../types";
import Button from "../../../shared/components/Button";
import SecMenuIcon from "../../../shared/icons/SecMenuIcon";
import Sidebar from "../components/Sidebar";

interface EpisodesContainerProps {
  sagaId: number;
}
const MOCK_ARCS: ArcLink[] = [];
const MOCK_EPISODES: Episode[] = [];
export default function EpisodesContainer({ sagaId }: EpisodesContainerProps) {
  const currentSaga = SAGAS.find((saga) => saga.id === sagaId) ?? {
    id: 0,
    title: "",
    href: "#",
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
          categories: MOCK_ARCS.map((arc) => arc.title),
        }}
      />
      <section>
        <small>Showing 0 of 0 episodes</small>
        <p>Arc Romance Dawn</p>
        <ul>
          {MOCK_EPISODES.map((episode, index) => (
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
