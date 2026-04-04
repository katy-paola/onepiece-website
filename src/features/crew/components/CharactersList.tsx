import { Link } from "react-router-dom";
import { CHARACTERS } from "../consts";
import CharacterCard from "./CharacterCard";
import { cn } from "../../../shared/lib/utils";
import CharacterDetails from "./CharacterDetails";
import { useEffect, useRef, useState } from "react";
import type { Character } from "../types";

export default function CharactersList() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null,
  );
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (selectedCharacter) {
      dialogRef.current?.showModal();
    }
  }, [selectedCharacter]);

  return (
    <>
      <ul className="grid gap-4 md:grid-cols-3">
        {CHARACTERS.map((character, index) => (
          <li
            key={index}
            className={cn(
              character.id === "zoro"
                ? "md:order-2 md:col-span-3"
                : "md:order-1",
            )}
          >
            {character.id === "zoro" ? (
              <Link className="contents" to="/lost/zoro">
                <CharacterCard data={character} />
              </Link>
            ) : (
              <button
                className="contents"
                onClick={() => setSelectedCharacter(character)}
              >
                <CharacterCard data={character} />
              </button>
            )}
          </li>
        ))}
      </ul>

      {selectedCharacter && (
        <dialog
          ref={dialogRef}
          onClose={() => setSelectedCharacter(null)}
          className="fixed inset-0 m-auto max-w-80 md:max-w-96"
        >
          <CharacterDetails
            character={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
          />
        </dialog>
      )}
    </>
  );
}
