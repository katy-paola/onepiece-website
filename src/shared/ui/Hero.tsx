import { HERO_LIST } from "../consts";

interface HeroProps {
  currentHero: "homepage" | "episodes" | "crew" | "fruits";
}

export default function Hero({ currentHero }: HeroProps) {
  const hero = HERO_LIST.find((hero) => hero.id === currentHero) ?? {
    id: "",
    title: "",
    paragraphs: [],
  };
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-4xl font-onepiece text-gradient w-max md:text-5xl">
        {hero.title}
      </h1>
      {hero.id === "homepage" ? (
        <div>
          {hero.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      ) : (
        <p>{hero.paragraphs[0]}</p>
      )}
      {hero.subtitle && <p className="font-semibold">{hero.subtitle}</p>}
    </section>
  );
}
