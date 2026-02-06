const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getCrewCharacters = async () => {
  const response = await fetch(`${BASE_URL}characters/en/crew/1`);
  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }
  const data = await response.json();
  return data;
};
