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
    <section>
      <Searchbar
        placeholder={data.placeholder}
        inputAttributes={{ value: data.query, onChange: data.onQueryChange }}
      />
      <div>
        {data.categories.map((category) => (
          <Checkbox
            key={category.id}
            label={category.label}
            inputAttributes={{
              checked: data.selectedIds.includes(category.id),
              onChange: (checked) => toggleId(category.id, checked),
            }}
          />
        ))}
      </div>
      <button
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
