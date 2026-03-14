import Checkbox from "../components/Checkbox";
import Searchbar from "../components/Searchbar";

interface FilterProps {
  data: {
    categories: { id: number; label: string }[];
    selectedIds: number[];
    onSelectedIdsChange: (ids: number[]) => void;
    query: string;
    onQueryChange: (value: string) => void;
    placeholder?: string;
  };
}

export default function Filter({ data }: FilterProps) {
  const toggleId = (id: number, checked: boolean) => {
    data.onQueryChange("");
    data.onSelectedIdsChange(
      checked
        ? [...data.selectedIds, id]
        : data.selectedIds.filter((selectedId) => selectedId !== id),
    );
  };
  return (
    <section className="flex flex-col gap-3 md:grid md:grid-cols-[1fr_auto] md:gap-6 xl:flex">
      <Searchbar
        className="md:col-span-2"
        placeholder={data.placeholder}
        inputAttributes={{ value: data.query, onChange: data.onQueryChange }}
      />
      <div className="flex gap-2 w-full overflow-x-auto xl:flex-col">
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
        className="underline hover:no-underline w-max"
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
