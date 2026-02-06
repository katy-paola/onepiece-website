interface FilterProps {
  filterOptions: { id: number; label: string }[];
  selectedIds: number[];
  onSelectedIdsChange: (ids: number[]) => void;
  query: string;
  onQueryChange: (value: string) => void;
  placeholder?: string;
}

export default function Filter({
  filterOptions,
  selectedIds,
  onSelectedIdsChange,
  query,
  onQueryChange,
  placeholder = "Search...",
}: FilterProps) {
  const toggleId = (id: number, checked: boolean) => {
    onQueryChange("");
    onSelectedIdsChange(
      checked
        ? [...selectedIds, id]
        : selectedIds.filter((selectedId) => selectedId !== id),
    );
  };

  return (
    <aside>
      {/* Input de búsqueda */}
      <input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />

      {/* Filtro por opciones */}
      <div className="flex gap-2 flex-wrap">
        {filterOptions.map((option) => (
          <label key={option.id} className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={selectedIds.includes(option.id)}
              onChange={(e) => toggleId(option.id, e.target.checked)}
            />
            {option.label}
          </label>
        ))}
      </div>

      {/* Botón para limpiar filtros */}
      <button
        onClick={() => {
          onQueryChange("");
          onSelectedIdsChange([]);
        }}
      >
        Clear Filters
      </button>
    </aside>
  );
}
