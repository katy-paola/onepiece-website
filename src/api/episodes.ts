const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getSagas = async () => {
  const response = await fetch(`${BASE_URL}sagas/en`);
  if (!response.ok) {
    throw new Error("Failed to fetch sagas");
  }
  const data = await response.json();
  return data;
};

export const getEpisodes = async (sagaId: number) => {
  const response = await fetch(`${BASE_URL}episodes/en/saga/${sagaId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch episodes");
  }
  const data = await response.json();
  return data;
};
