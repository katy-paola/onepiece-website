import Hero from "../../../shared/ui/Hero";
import CharactersList from "../components/CharactersList";

export default function CrewMain() {
  return (
    <>
      <Hero currentHero="crew" />
      <CharactersList />
    </>
  );
}
