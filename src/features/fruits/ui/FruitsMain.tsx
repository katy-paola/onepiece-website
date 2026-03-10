import { useMemo } from "react";
import useGetFruits from "../../../hooks/useGetFruits";
import Filter from "../../../shared/ui/Filter";
import Hero from "../../../shared/ui/Hero";
import FruitsList from "../components/FruitsList";
import { useFilter } from "../../../shared/hooks/useFilter";

export default function FruitsMain() {
  const { fruits, isLoading: isLoadingFruits } = useGetFruits();

  const fruitsToDisplay = fruits.filter(
    (fruit) => fruit.filename && fruit.filename !== "",
  );

  // map type -> numeric id
  const typeToId = useMemo(() => {
    const types = Array.from(new Set(fruitsToDisplay.map((f) => f.type)));

    return new Map(types.map((type, index) => [type, index]));
  }, [fruitsToDisplay]);

  // categories for Filter
  const filterCategories = useMemo(() => {
    return Array.from(typeToId.entries()).map(([type, id]) => ({
      id,
      label: type,
    }));
  }, [typeToId]);

  const {
    query,
    setQuery,
    selectedIds,
    setSelectedIds,
    filteredData: filteredFruits,
  } = useFilter({
    data: fruitsToDisplay,
    getItemSearchText: (fruit) => `${fruit.roman_name} ${fruit.name}`,
    getItemFilterId: (fruit) => typeToId.get(fruit.type) ?? -1,
  });

  return (
    <>
      <Hero currentHero="fruits" />

      <Filter
        data={{
          categories: filterCategories,
          selectedIds,
          onSelectedIdsChange: setSelectedIds,
          query,
          onQueryChange: setQuery,
          placeholder: "Search fruits...",
        }}
      />

      <section>
        <small>
          Showing {filteredFruits.length} of {fruitsToDisplay.length} fruits
        </small>

        {isLoadingFruits && <p>Loading...</p>}

        <FruitsList fruits={filteredFruits} />
      </section>
    </>
  );
}
