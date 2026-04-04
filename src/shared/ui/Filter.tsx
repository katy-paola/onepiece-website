import Checkbox from "../components/Checkbox";
import Searchbar from "../components/Searchbar";
import { cn } from "../lib/utils";

interface FilterProps {
  data: {
    categories: { id: number; label: string }[];
    selectedIds: number[];
    onSelectedIdsChange: (ids: number[]) => void;
    query: string;
    onQueryChange: (value: string) => void;
    placeholder?: string;
  };
  className?: string;
}

export default function Filter({ data, className }: FilterProps) {
  const toggleId = (id: number, checked: boolean) => {
    data.onQueryChange("");
    data.onSelectedIdsChange(
      checked
        ? [...data.selectedIds, id]
        : data.selectedIds.filter((selectedId) => selectedId !== id),
    );
  };
  return (
    <section
      className={cn(
        "grid gap-3 h-max md:grid-cols-[1fr_auto] md:gap-6 lg:flex lg:flex-col",
        className,
      )}
    >
      <Searchbar
        className="md:col-span-2"
        placeholder={data.placeholder}
        inputAttributes={{ value: data.query, onChange: data.onQueryChange }}
      />
      <div className="flex gap-2 w-full h-max overflow-x-auto lg:flex-col">
        {data.categories.map((category) => (
          <Checkbox
            key={category.id}
            label={category.label}
            inputAttributes={{
              checked: data.selectedIds.includes(category.id),
              onChange: (checked) => toggleId(category.id, checked),
            }}
            className="cursor-pointer"
          />
        ))}
      </div>
      <button
        className={cn(
          "underline hover:no-underline w-max transition-all",
          data.categories.length === 0
            ? "opacity-0 invisible"
            : "opacity-100 visible",
        )}
        onClick={() => {
          data.onQueryChange("");
          data.onSelectedIdsChange([]);
        }}
      >
        Clear filters
      </button>
    </section>
  );
}
