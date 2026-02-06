import { Link } from "react-router-dom";
import { useGetSagas } from "../../hooks/useGetSagas";

export default function SagasPage() {
  const { sagas, isLoading } = useGetSagas();

  return (
    <section className="flex flex-col gap-4 h-full w-full">
      <h1>One Piece Episodes</h1>
      <p>
        From the East Blue to the latest battles, here is the complete journey
        of the Straw Hat crew. Get some popcorn because we have over a thousand
        episodes to go through, and remember, skipping Skypiea is a crime in
        this house.
      </p>

      {isLoading ? (
        <div>
          <p className="font-medium">Loading sagas...</p>
        </div>
      ) : (
        <ul className="h-full">
          {sagas.map((saga) => (
            <li key={saga.id}>
              <Link to={`/episodes/${saga.id}`} state={{ saga }}>
                <h2>{saga.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
