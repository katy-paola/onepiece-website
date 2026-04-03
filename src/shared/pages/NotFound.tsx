import LinkElement from "../components/Link";
import { type TitleColor, TITLE_COLORS } from "../consts";
import { useCurrentTheme } from "../hooks/useCurrentTheme";
import { cn } from "../lib/utils";

export default function NotFound() {
  const { theme } = useCurrentTheme();
  const titleColor: TitleColor = TITLE_COLORS[theme.color];
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col items-center">
        <h1
          className={cn(
            "text-4xl font-onepiece transition-colors duration-300 lg:text-center md:text-5xl",
            titleColor,
          )}
        >
          404 - Page not found
        </h1>
        <img src="/zoro-lost.png" alt="Zoro lost" className="w-40" />
        <p className="text-center">Lost enough to run into Zoro.</p>
      </div>
      <div className="flex justify-center gap-4">
        <LinkElement href="/" hierarchy="secondary">
          Back to homepage
        </LinkElement>
        <LinkElement href="/episodes">Explore episodes</LinkElement>
      </div>
    </section>
  );
}
