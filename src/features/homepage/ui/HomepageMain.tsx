import LinkElement from "../../../shared/components/Link";
import Hero from "../../../shared/ui/Hero";
import ThemeList from "../components/ThemeList";

export default function HomepageMain() {
  return (
    <>
      <Hero currentHero="homepage" />
      <ThemeList />
      <LinkElement href="/episodes" />
    </>
  );
}
