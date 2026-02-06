import { Virtuoso } from "react-virtuoso";
import type { Fruit } from "../utils/types";

export default function FruitsList({ fruits }: { fruits: Fruit[] }) {
  return (
    <Virtuoso
      style={{ height: "100%" }}
      data={fruits}
      itemContent={(_, fruit) => (
        <article key={fruit.id}>
          <img src={fruit.filename} alt={fruit.roman_name} />
          <h2>
            {fruit.roman_name} / {fruit.name}
          </h2>
          <p>{fruit.description}</p>
          <p>{fruit.type}</p>
        </article>
      )}
    />
  );
}
