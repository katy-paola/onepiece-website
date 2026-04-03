import { useEffect, useRef, useState } from "react";
import type { Fruit } from "../types";
import FruitModal from "./FruitModal";

export default function FruitsList({ fruits }: { fruits: Fruit[] }) {
  const [selectedFruit, setSelectedFruit] = useState<Fruit | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (selectedFruit) {
      dialogRef.current?.showModal();
    }
  }, [selectedFruit]);
  return (
    <>
      <ul className="grid gap-4 text-action-text md:grid-cols-2">
        {fruits.map((fruit) => (
          <li key={fruit.id} title={`${fruit.roman_name} / ${fruit.name}`}>
            <button
              onClick={() => setSelectedFruit(fruit)}
              className="flex items-center gap-2 p-2 w-full bg-radial border border-stroke/30 shadow-card hover:shadow-none transition-all"
            >
              <picture className="h-16 aspect-square">
                <img
                  src={fruit.filename}
                  alt={`${fruit.roman_name} / ${fruit.name}`}
                  loading="lazy"
                  className="size-full object-contain"
                />
              </picture>
              <span className="flex flex-col gap-2 text-start">
                <span className="font-medium line-clamp-1">
                  {fruit.roman_name} / {fruit.name}
                </span>
                <small className="text-xs">{fruit.type}</small>
              </span>
            </button>
          </li>
        ))}
      </ul>
      {selectedFruit && (
        <dialog
          ref={dialogRef}
          onClose={() => setSelectedFruit(null)}
          className="fixed inset-0 m-auto max-w-80 max-h-[80vh] md:max-w-xl"
        >
          <FruitModal
            fruit={selectedFruit}
            setSelectedFruit={setSelectedFruit}
          />
        </dialog>
      )}
    </>
  );
}
