import CharacterDetails from "../components/CharacterDetails";
import { CHARACTERS, EMPTY_CHARACTER } from "../consts";

export default function ZoroMain() {
  const character =
    CHARACTERS.find((character) => character.id === "zoro") ?? EMPTY_CHARACTER;
  return (
    <>
      <CharacterDetails data={character} />
    </>
  );
}
