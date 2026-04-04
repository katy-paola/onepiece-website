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
        "grid grid-rows-[auto_auto_1fr] justify-center p-4 h-full text-action-text bg-radial border border-stroke/30 shadow-card hover:shadow-none transition-all md:p-3",
        isZoro && "md:grid-cols-[auto_1fr] md:grid-rows-[auto_1fr] md:gap-4",
      )}
    >
      <p
        className={cn(
          "text-8xl text-center md:text-4xl",
          isZoro && "md:col-start-2 md:text-start",
        )}
      >
        WANTED
      </p>
      <picture className={cn(isZoro && "md:row-span-2 md:row-start-1")}>
        <img
          loading="lazy"
          src={data.srcImg}
          alt={`${data.name} poster`}
          className={cn(
            "aspect-65/48 border border-stroke/30 w-full",
            isZoro && "md:max-w-52",
          )}
        />
      </picture>
      <section
        className={cn(
          "flex flex-col justify-between gap-2 p-4 pb-0 font-medium text-center md:px-0",
          isZoro && "md:col-start-2 md:text-start md:p-0",
        )}
      >
        <p className="text-2xl md:text-xl">DEAD OR ALIVE</p>
        <h2 className="text-3xl md:text-2xl">{data.name.toUpperCase()}</h2>
        <p className="text-3xl font-normal md:text-2xl">{data.bounty}</p>
      </section>
    </article>
  );
}
