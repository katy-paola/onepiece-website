import { CHARACTERS } from "../consts";
import CharacterCard from "./CharacterCard";

export default function CharactersList() {
  return (
    <ul>
      {CHARACTERS.map((character, index) => (
        <li key={index}>
          {character.id === "zoro" ? (
            <a href="/lost/zoro">
              <CharacterCard data={character} />
            </a>
          ) : (
            <button>
              <CharacterCard data={character} />
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
