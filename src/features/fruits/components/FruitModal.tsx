import CancelIcon from "../../../shared/icons/CancelIcon";
import type { Fruit } from "../types";

interface FruitDetailsProps {
  fruit: Fruit;
  setSelectedFruit?: React.Dispatch<React.SetStateAction<Fruit | null>>;
}
export default function FruitModal({
  fruit,
  setSelectedFruit,
}: FruitDetailsProps) {
  const handleCancel = () => {
    if (setSelectedFruit) {
      setSelectedFruit(null);
    }
  };
  return (
    <article className="flex flex-col gap-4 p-4 max-h-[80vh] bg-default-bg border border-stroke/30 text-action-text">
      <header>
        <div className="flex gap-4 mb-1">
          <h2 className="flex-1 text-2xl font-medium">
            {fruit.roman_name} / {fruit.name}
          </h2>
          <button onClick={handleCancel} className="size-6">
            <CancelIcon className="size-6" />
          </button>
        </div>
        <small className="font-semibold text-sm">{fruit.type}</small>
      </header>
      <section className="flex flex-col gap-4 min-h-0">
        <picture className="h-48 aspect-square shrink-0">
          <img
            src={fruit.filename}
            alt={`${fruit.roman_name} / ${fruit.name}`}
            loading="lazy"
            className="size-full object-contain"
          />
        </picture>
        <p className="overflow-y-auto flex-1">{fruit.description}</p>
      </section>
    </article>
  );
}
