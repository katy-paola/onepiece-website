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
    <aside>
      {/* Input de búsqueda */}
      <input
        type="search"
        placeholder={data.placeholder}
        value={data.query}
        onChange={(e) => data.onQueryChange(e.target.value)}
      />

      {/* Filtro por opciones */}
      <div className="flex gap-2 flex-wrap">
        {data.categories.map((option) => (
          <label key={option.id} className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={data.selectedIds.includes(option.id)}
              onChange={(e) => toggleId(option.id, e.target.checked)}
            />
            {option.label}
          </label>
        ))}
      </div>

      {/* Botón para limpiar filtros */}
      <button
        onClick={() => {
          data.onQueryChange("");
          data.onSelectedIdsChange([]);
        }}
      >
        Clear Filters
      </button>
    </aside>
  );
}
