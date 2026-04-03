import { useEffect, useState } from "react";

const DEBOUNCE_DELAY = 250;

export function useDebouncedQuery(query: string) {
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedQuery(query);
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(id);
  }, [query]);

  return debouncedQuery;
}
