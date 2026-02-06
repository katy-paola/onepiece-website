const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getFruits = async () => {
  const response = await fetch(`${BASE_URL}fruits/en/`);
  if (!response.ok) {
    throw new Error("Failed to fetch fruits");
  }
  const data = await response.json();
  return data;
};
