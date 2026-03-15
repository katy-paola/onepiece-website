import LinkElement from "../../../shared/components/Link";
import Hero from "../../../shared/ui/Hero";
import ThemeList from "../components/ThemeList";

export default function HomepageMain() {
  return (
    <>
      <Hero currentHero="homepage" />
      <ThemeList />
      <LinkElement
        href="/episodes"
        className="fixed left-4 right-4 bottom-4 text-center md:static md:w-max md:mx-auto"
      >
        Get Started
      </LinkElement>
    </>
  );
}
