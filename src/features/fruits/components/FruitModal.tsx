import type React from "react";
import { type BgColor, BG_COLORS } from "../../../shared/consts";
import { useCurrentTheme } from "../../../shared/hooks/useCurrentTheme";
import CancelIcon from "../../../shared/icons/CancelIcon";
import type { Fruit } from "../types";
import { cn } from "../../../shared/lib/utils";

interface FruitDetailsProps {
  fruit: Fruit;
  setSelectedFruit?: React.Dispatch<React.SetStateAction<Fruit | null>>;
}
export default function FruitModal({
  fruit,
  setSelectedFruit,
}: FruitDetailsProps) {
  const theme = useCurrentTheme();
  const bgColor: BgColor = BG_COLORS[theme.color];

  const handleCancel = () => {
    if (setSelectedFruit) {
      setSelectedFruit(null);
    }
  };
  return (
    <article
      className={cn(
        "flex flex-col gap-4 p-4 max-h-[80vh] border border-stroke/30 text-action-text",
        bgColor,
      )}
    >
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
        <p className="overflow-y-auto flex-1 text-text">{fruit.description}</p>
      </section>
    </article>
  );
}
