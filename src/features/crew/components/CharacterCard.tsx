import type { CharacterCard } from "../types";
import CharacterDetails from "./CharacterDetails";

interface CharacterCardProps {
  data: CharacterCard;
}

export default function CharacterCard({ data }: CharacterCardProps) {
  return (
    <>
      <article>
        <p>WANTED</p>
        <picture>
          <img src={data.srcImg} alt={`${data.name} poster`} />
        </picture>
        <section>
          <p>DEAD OR ALIVE</p>
          <h2>{data.name}</h2>
          <p>{data.bounty}</p>
        </section>
      </article>
      {data.id === "zoro" ? (
        <section>
          <CharacterDetails data={data} />
        </section>
      ) : (
        <dialog>
          <CharacterDetails data={data} />
        </dialog>
      )}
    </>
  );
}
