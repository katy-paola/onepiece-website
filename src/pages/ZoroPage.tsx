import { useLocation } from "react-router-dom";
import type { Character } from "../utils/types";

export default function ZoroPage() {
  const { state } = useLocation();

  const zoro: Character = state?.character;

  return (
    <section>
      <p>{zoro.name}</p>
      <p>{zoro.job}</p>
      <p>{zoro.bounty}</p>
    </section>
  );
}
