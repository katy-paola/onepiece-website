import Hero from "../../../shared/ui/Hero";
import CharactersList from "../components/CharactersList";

export default function MainContainer() {
  return (
    <>
      <Hero currentHero="crew" />
      <CharactersList />
    </>
  );
}
