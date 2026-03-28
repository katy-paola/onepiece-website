import { useMemo, useState } from "react";
import { normalizeQuery } from "../helpers/normalizeQuery";
import { useDebouncedQuery } from "../../hooks/shared/useDebouncedQuery";

interface UseFilterOptions<T> {
  data: T[];
  getItemSearchText: (item: T) => string;
  getItemFilterId: (item: T) => number;
}

export function useFilter<T>({
  data,
  getItemSearchText,
  getItemFilterId,
}: UseFilterOptions<T>) {
  const [query, setQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const debouncedQuery = useDebouncedQuery(query);

  const filteredData = useMemo(() => {
    const normalizedQuery = normalizeQuery(debouncedQuery);

    let result = data;

    if (normalizedQuery.length > 0) {
      result = result.filter((item) =>
        normalizeQuery(getItemSearchText(item)).includes(normalizedQuery),
      );
    }

    if (selectedIds.length > 0) {
      result = result.filter((item) =>
        selectedIds.includes(getItemFilterId(item)),
      );
    }

    return result;
  }, [data, debouncedQuery, selectedIds, getItemSearchText, getItemFilterId]);

  return {
    query,
    setQuery,
    selectedIds,
    setSelectedIds,
    filteredData,
  };
}
