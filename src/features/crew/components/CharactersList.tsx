import { Link } from "react-router-dom";
import { CHARACTERS } from "../consts";
import CharacterCard from "./CharacterCard";

export default function CharactersList() {
  return (
    <>
      <ul>
        {CHARACTERS.map((character, index) => (
          <li key={index}>
            {character.id === "zoro" ? (
              <Link to="/lost/zoro">
                <CharacterCard data={character} />
              </Link>
            ) : (
              <button>
                <CharacterCard data={character} />
              </button>
            )}
          </li>
        ))}
      </ul>
      {/* {data.id === "zoro" ? (
        <section>
          <CharacterDetails data={data} />
        </section>
      ) : (
        <dialog>
          <CharacterDetails data={data} />
        </dialog>
      )} */}
    </>
  );
}
