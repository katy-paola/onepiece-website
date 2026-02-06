import { useMemo, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDebouncedQuery } from "../hooks/shared/useDebouncedQuery";
import { normalizeQuery } from "../helpers/normalizeQuery";
import useGetCrewCharacters from "../hooks/useGetCrewCharacters";

export default function CrewPage() {
  const navigate = useNavigate();
  const { characters, isLoading } = useGetCrewCharacters();
  const charactersToDisplay = characters.filter(
    (character) => character.id !== 11,
  );
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebouncedQuery(query);

  const filteredCharacters = useMemo(() => {
    if (!debouncedQuery) return charactersToDisplay;

    return charactersToDisplay.filter((character) => {
      const name = normalizeQuery(character.name || "");

      return name.includes(normalizeQuery(debouncedQuery));
    });
  }, [charactersToDisplay, debouncedQuery]);

  return (
    <section className="flex flex-col gap-4 h-full w-full">
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>Mugiwara Crew</h1>
      <p>
        Warning: prolonged exposure to this crew may cause emotional attachment
        and a sudden urge to yell “nakama.”
      </p>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search characters..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isLoading ? (
        <div>
          <p className="font-medium">Loading characters...</p>
          <p>
            We sent Zoro to fetch all the characters, but he got lost on the way
            back.
          </p>
          <p>Please wait while we find him (and your data).</p>
          <img src="/zoro_loading.png" alt="" className="max-w-40 mx-auto" />
        </div>
      ) : (
        <ul className="h-full grid grid-cols-5 grid-rows-2 gap-4">
          {filteredCharacters.map((character) => (
            <li key={character.id} className="border border-text flex">
              {character.id === 2 ? (
                <Link
                  className="flex flex-col h-full"
                  to={`/lost/zoro`}
                  state={{ character }}
                >
                  <h2>{character.name}</h2>
                  <p>404 — Crew member not found</p>
                  <p>Yes, he got lost again.</p>
                  <p>Go find him</p>
                </Link>
              ) : (
                <button className="flex flex-col text-start w-full">
                  <p>{character.name}</p>
                  <p>{character.job}</p>
                  <p>{character.bounty}</p>
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
