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
    <article className="flex flex-col gap-4 p-4 bg-default-bg border border-stroke/30 text-action-text">
      <header>
        <div className="flex items-center gap-4 mb-1">
          {character.id === "zoro" ? (
            <Link to="/crew">
              <ArrowLeftIcon className="size-6" />
            </Link>
          ) : (
            <button onClick={handleCancel} className="order-2">
              <CancelIcon className="size-6" />
            </button>
          )}

          <h2 className="flex-1 text-2xl font-medium">
            {character.id === "zoro"
              ? "Roronoa Zoro"
              : character.id === "brook"
                ? "Brook"
                : character.name}
          </h2>
        </div>
        <small className="font-semibold text-sm">{character.job}</small>
      </header>
      <section className="flex flex-col gap-4">
        {character.id === "zoro" ? (
          <div className="flex gap-1 overflow-x-auto">
            {character.gallery?.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Zoro's photo number ${index + 1}`}
                className="border border-stroke/30"
              />
            ))}
          </div>
        ) : (
          <picture>
            <img
              src={character.srcImg}
              alt={`${character.name}'s photo`}
              className="border border-stroke/30"
            />
          </picture>
        )}
        <div className="flex justify-between font-medium">
          <div className="flex gap-4">
            <p className="flex gap-1">
              <CakeIcon />
              {character.birthday}
            </p>
            <p>{character.age} years old</p>
            {character.id === "zoro" && <p>1,111,000,000</p>}
          </div>
          <p>{character.size} cm</p>
        </div>
        {character.id === "zoro" ? (
          <div className="flex flex-col gap-4">
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
