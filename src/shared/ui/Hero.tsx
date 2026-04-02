import { HERO_LIST, TITLE_COLORS, type TitleColor } from "../consts";
import { useCurrentTheme } from "../hooks/useCurrentTheme";
import { cn } from "../lib/utils";

interface HeroProps {
  currentHero: "homepage" | "episodes" | "crew" | "fruits";
}

export default function Hero({ currentHero }: HeroProps) {
  const hero = HERO_LIST.find((hero) => hero.id === currentHero) ?? {
    id: "",
    title: "",
    paragraphs: [],
  };

  const theme = useCurrentTheme();
  const titleColor: TitleColor = TITLE_COLORS[theme.color];

  return (
    <section className="flex flex-col gap-4">
      <h1
        className={cn(
          "text-4xl font-onepiece w-max transition-colors duration-300 md:text-5xl",
          titleColor,
        )}
      >
        {hero.title}
      </h1>
      {hero.id === "homepage" ? (
        <div className="flex flex-col gap-4">
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
