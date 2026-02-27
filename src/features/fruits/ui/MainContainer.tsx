import Filter from "../../../shared/ui/Filter";
import Hero from "../../../shared/ui/Hero";
import FruitsList from "../components/FruitsList";
import type { Fruit } from "../types";

const MOCK_FRUITS: Fruit[] = [];

export default function MainContainer() {
  return (
    <>
      <Hero currentHero="fruits" />
      <Filter
        data={{
          placeholder: "Search fruits...",
          categories: MOCK_FRUITS.map((fruit) => fruit.type),
        }}
      />
      <section>
        <small>Showing 0 of 0 fruits</small>
        <FruitsList />
      </section>
    </>
  );
}
