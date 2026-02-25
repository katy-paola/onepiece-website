import CancelIcon from "../../../shared/icons/CancelIcon";
import type { Fruit } from "../types";

const MOCK_FRUIT: Fruit = {
  id: 1,
  name: "",
  roman_name: "",
  description: "",
  type: "",
  filename: "",
};
export default function FruitModal() {
  return (
    <dialog>
      <article>
        <header>
          <div>
            <h2>
              {MOCK_FRUIT.roman_name} / {MOCK_FRUIT.name}
            </h2>
            <button>
              <CancelIcon />
            </button>
          </div>
          <small>{MOCK_FRUIT.type}</small>
        </header>
        <section>
          <picture>
            <img
              src={MOCK_FRUIT.filename}
              alt={`${MOCK_FRUIT.roman_name} / ${MOCK_FRUIT.name}`}
            />
          </picture>
          <p>{MOCK_FRUIT.description}</p>
        </section>
      </article>
    </dialog>
  );
}
