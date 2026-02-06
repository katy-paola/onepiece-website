import { useState } from "react";
import Hero from "../components/Hero";
//import "../styles/home-page.css";
import { CHARACTER_CARDS } from "../utils/consts";
import { Link } from "react-router-dom";
import ShipIcon from "../components/icons/ShipIcon";

export default function HomePage() {
  const [selectedCharId, setSelectedCharId] = useState("");
  const [visibleTooltipId, setVisibleTooltipId] = useState("");

  const selectedImgUrl = selectedCharId
    ? `/crew/chibi-${selectedCharId}.png`
    : "";

  const handleSelect = (id: string) => {
    setSelectedCharId(id);
    setVisibleTooltipId(id);

    setTimeout(() => {
      setVisibleTooltipId("");
    }, 5000);
  };

  return (
    <section className="flex flex-col gap-8 flex-1">
      <img
        src={selectedImgUrl}
        alt=""
        className={`fixed left-1/2 top-1/2 -translate-x-10/12 -translate-y-1/2 ${selectedCharId === "" ? "opacity-0" : "opacity-10"}`}
      />
      <div className="flex gap-4">
        <Hero />
        <div className="flex-1 flex flex-col gap-4">
          <p className="font-semibold text-xl">Pick your favorite:</p>
          <div className="grid grid-cols-5 grid-rows-2 gap-4 h-full">
            {CHARACTER_CARDS.map((character) => (
              <div
                key={character.id}
                className="relative flex border-2 border-amber-950"
              >
                <button
                  className={`p-2 w-full flex cursor-pointer`}
                  onClick={() => handleSelect(character.id)}
                >
                  {character.label}
                </button>
                <picture className="absolute w-full max-w-24 right-0 bottom-0 pointer-events-none">
                  <img
                    src={`/crew/chibi-${character.id}.png`}
                    alt={`${character.label} image`}
                  />
                </picture>
                <small
                  className={`absolute top-2/3 -translate-y-1/2 z-10 w-60 rounded-sm text-xs p-2 bg-amber-50 pointer-events-none character-tooltip ${character.id === visibleTooltipId ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ${character.id === "zoro" ? "left-[105%] character-tooltip--zoro" : "right-11/12"}`}
                >
                  {character.tooltip}
                </small>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link className="main-button" to="/episodes">
        Get Started
        <ShipIcon className="size-4" />
      </Link>
    </section>
  );
}
