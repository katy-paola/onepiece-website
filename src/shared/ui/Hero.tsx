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
    <section>
      <h1>{hero.title}</h1>
      {hero.id === "homepage" ? (
        <div>
          {hero.paragraphs.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </div>
      ) : (
        <p>{hero.paragraphs[0]}</p>
      )}
      {hero.subtitle && <p>{hero.subtitle}</p>}
    </section>
  );
}
