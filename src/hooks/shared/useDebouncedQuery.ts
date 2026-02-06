import { useEffect, useState } from "react";
import { normalizeQuery } from "../../helpers/normalizeQuery";

const DEBOUNCE_DELAY = 250;

export function useDebouncedQuery(query: string) {
  const normalized = normalizeQuery(query);
  const [debouncedQuery, setDebouncedQuery] = useState(normalized);

  useEffect(() => {
    if (normalized === debouncedQuery) return;
    const id = setTimeout(() => {
      setDebouncedQuery(normalized);
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(id);
  }, [normalized, debouncedQuery]);

  return debouncedQuery;
}
