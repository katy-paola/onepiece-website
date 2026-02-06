export function normalizeQuery(value: string) {
  return value.toLowerCase().trim().replace(/\s+/g, " ");
}
