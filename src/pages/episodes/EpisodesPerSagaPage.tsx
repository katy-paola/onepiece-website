import { useMemo, useRef } from "react";
import EpisodesList from "../../components/EpisodesList";
import { useNavigate, useParams } from "react-router-dom";
import type { VirtuosoHandle } from "react-virtuoso";
import { useGetEpisodes } from "../../hooks/useGetEpisodes";
import Filter from "../../components/Filter";
import { useFilter } from "../../hooks/shared/useFilter";

export default function EpisodesPerSagaPage() {
  const navigate = useNavigate();
  const virtuosoRef = useRef<VirtuosoHandle>(null);

  const { sagaId } = useParams();
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

  const filterOptions = useMemo(() => {
    return Array.from(new Set(episodes.map((e) => e.arc.id))).map((arcId) => ({
      id: arcId,
      label: episodes.find((e) => e.arc.id === arcId)?.arc.title || "",
    }));
  }, [episodes]);

  // Agrupar para EpisodesList
  const { groupCounts, groupTitles, arcLinks } = useMemo(() => {
    const counts: number[] = [];
    const titles: string[] = [];
    const links: { title: string; index: number }[] = [];

    if (filteredEpisodes.length === 0) {
      return { groupCounts: [], groupTitles: [], arcLinks: [] };
    }

    let currentCount = 0;

    filteredEpisodes.forEach((episode, index) => {
      const currentArcId = episode.arc.id;
      const previousArcId = filteredEpisodes[index - 1]?.arc.id;

      if (index === 0 || currentArcId !== previousArcId) {
        if (index !== 0) {
          counts.push(currentCount);
        }

        currentCount = 1;
        titles.push(episode.arc.title);

        links.push({
          title: episode.arc.title,
          index,
        });
      } else {
        currentCount++;
      }
    });

    counts.push(currentCount);

    return { groupCounts: counts, groupTitles: titles, arcLinks: links };
  }, [filteredEpisodes]);

  const scrollToArc = (index: number) => {
    virtuosoRef.current?.scrollToIndex({
      index,
      align: "start",
      behavior: "smooth",
    });
  };

  return (
    <section className="flex flex-col gap-4 h-full w-full">
      <h1>One Piece Episodes</h1>

      <button className="w-max" onClick={() => navigate(-1)}>
        Back
      </button>

      <section className="grid grid-cols-5 gap-4">
        {/* Sidebar */}
        <ul>
          {arcLinks.map((arc, i) => (
            <li key={`arc-${i}`}>
              <button
                className="text-start"
                onClick={() => scrollToArc(arc.index)}
              >
                {arc.title}
              </button>
            </li>
          ))}
        </ul>

        {/* Lista de episodios */}
        <section className="col-span-3">
          <p>
            Showing {filteredEpisodes.length} of {episodes.length} episodes
          </p>

          <section className="h-full">
            {isLoadingEpisodes ? (
              <EpisodesList
                episodes={[]}
                groupCounts={[10]}
                groupTitles={["Loading arc..."]}
                isLoading
              />
            ) : episodes.length === 0 ? (
              <p>No episodes available</p>
            ) : filteredEpisodes.length === 0 ? (
              <p>No results</p>
            ) : (
              <EpisodesList
                episodes={filteredEpisodes}
                groupCounts={groupCounts}
                groupTitles={groupTitles}
                ref={virtuosoRef}
              />
            )}
          </section>
        </section>

        {}

        <Filter
          filterOptions={filterOptions}
          selectedIds={selectedIds}
          onSelectedIdsChange={setSelectedIds}
          query={query}
          onQueryChange={setQuery}
          placeholder="Search episodes..."
        />
      </section>
    </section>
  );
}
