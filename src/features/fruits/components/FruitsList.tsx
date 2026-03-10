import type { Fruit } from "../types";

export default function FruitsList({ fruits }: { fruits: Fruit[] }) {
  return (
    <ul>
      {
        /** Here we will put all the fruits from api */
        fruits.map((fruit, index) => (
          <li key={index}>
            <button>
              <img
                src={fruit.filename}
                alt={`${fruit.roman_name} / ${fruit.name}`}
              />
              <span>
                <span>
                  {fruit.roman_name} / {fruit.name}
                </span>
                <small>{fruit.type}</small>
              </span>
            </button>
          </li>
        ))
      }
    </ul>
  );
}
