import { Link } from "react-router-dom";
import type { Character } from "../types";
import ArrowLeftIcon from "../../../shared/icons/ArrowLeftIcon";
import CancelIcon from "../../../shared/icons/CancelIcon";
import CakeIcon from "../../../shared/icons/CakeIcon";
import type React from "react";

interface CharacterDetailsProps {
  character: Character;
  setSelectedCharacter?: React.Dispatch<React.SetStateAction<Character | null>>;
}
export default function CharacterDetails({
  character,
  setSelectedCharacter,
}: CharacterDetailsProps) {
  const handleCancel = () => {
    if (setSelectedCharacter) {
      setSelectedCharacter(null);
    }
  };

  return (
    <article>
      <header>
        <div>
          {character.id === "zoro" ? (
            <Link to="/crew">
              <ArrowLeftIcon />
            </Link>
          ) : (
            <button onClick={handleCancel}>
              <CancelIcon />
            </button>
          )}

          <h2>{character.id === "zoro" ? "Roronoa Zoro" : character.name}</h2>
        </div>
        <small>{character.job}</small>
      </header>
      <section>
        {character.id === "zoro" ? (
          <div>
            {character.gallery?.map((photo, index) => (
              <img src={photo} alt={`Zoro's photo number ${index + 1}`} />
            ))}
          </div>
        ) : (
          <picture>
            <img src={character.srcImg} alt={`${character.name}'s photo`} />
          </picture>
        )}
        <div>
          <p>
            <CakeIcon />
            {character.birthday}
          </p>
          <p>{character.age}</p>
          <p>{character.size}</p>
        </div>
        {character.id === "zoro" ? (
          <div>
            {character.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <p>{character.description[0]}</p>
        )}
      </section>
    </article>
  );
}
