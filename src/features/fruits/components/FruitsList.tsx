import type { Fruit } from "../types";

const MOCK_FRUITS: Fruit[] = [];
export default function FruitsList() {
  return (
    <ul>
      {
        /** Here we will put all the fruits from api */
        MOCK_FRUITS.map((fruit, index) => (
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
