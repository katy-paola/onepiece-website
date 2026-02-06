import { useMemo, useState } from "react";
import useGetFruits from "../hooks/useGetFruits";
import { useNavigate } from "react-router-dom";
import { useDebouncedQuery } from "../hooks/shared/useDebouncedQuery";
import { normalizeQuery } from "../helpers/normalizeQuery";
import FruitsList from "../components/FruitsList";

export default function FruitsPage() {
  const navigate = useNavigate();
  const { fruits, isLoading } = useGetFruits();
  const fruitsToDisplay = fruits.filter(
    (fruit) => fruit.filename && fruit.filename !== "",
  );
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebouncedQuery(query);

  const filteredFruits = useMemo(() => {
    if (!debouncedQuery) return fruitsToDisplay;

    return fruitsToDisplay.filter((fruit) => {
      const name = normalizeQuery(fruit.name || "");
      const romanName = normalizeQuery(fruit.roman_name || "");

      return (
        name.includes(normalizeQuery(debouncedQuery)) ||
        romanName.includes(normalizeQuery(debouncedQuery))
      );
    });
  }, [fruitsToDisplay, debouncedQuery]);

  return (
    <section className="flex flex-col gap-4 h-full w-full">
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>One Piece Fruits</h1>
      <p>
        Careful! They taste like garbage, but they grant you incredible powers
        (at the low, low price of never swimming again). Here are some of the
        most iconic fruits we've found so far, and no, you can't eat them
        through the screen.
      </p>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search fruits..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isLoading ? (
        <div>
          <p className="font-medium">Loading fruits...</p>
          <p>
            We sent Zoro to fetch all the fruits, but he got lost on the way
            back.
          </p>
          <p>Please wait while we find him (and your data).</p>
          <img src="/zoro_loading.png" alt="" className="max-w-40 mx-auto" />
        </div>
      ) : (
        <section className="h-full">
          <FruitsList fruits={filteredFruits} />
        </section>
      )}
    </section>
  );
}
