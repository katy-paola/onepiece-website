import { cn } from "../../../shared/lib/utils";
import type { Character } from "../types";

interface CharacterCardProps {
  data: Character;
}

export default function CharacterCard({ data }: CharacterCardProps) {
  const isZoro = data.id === "zoro";
  return (
    <article
      className={cn(
        "grid p-4 text-action-text bg-radial border border-stroke/30 shadow-card hover:shadow-none transition-all",
        isZoro && "md:grid-cols-[auto_1fr] md:grid-rows-[auto_1fr]",
      )}
    >
      <p
        className={cn(
          "text-8xl md:text-4xl",
          isZoro && "md:col-start-2 md:pt-4 md:pl-4",
        )}
      >
        WANTED
      </p>
      <picture className={cn(isZoro && "md:row-span-2 md:row-start-1")}>
        <img
          src={data.srcImg}
          alt={`${data.name} poster`}
          className="border border-stroke/30 md:max-h-45"
        />
      </picture>
      <section
        className={cn(
          "flex flex-col gap-4 p-4 pb-0 font-medium text-center",
          isZoro && "md:col-start-2 md:text-start",
        )}
      >
        <p className="text-3xl md:text-xl">DEAD OR ALIVE</p>
        <h2 className="text-[2.5rem] md:text-2xl">{data.name.toUpperCase()}</h2>
        <p className="text-4xl font-normal md:text-2xl">{data.bounty}</p>
      </section>
    </article>
  );
}
