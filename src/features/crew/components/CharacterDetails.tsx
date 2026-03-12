import { Link } from "react-router-dom";
import type { Character } from "../types";
import ArrowLeftIcon from "../../../shared/icons/ArrowLeftIcon";
import CancelIcon from "../../../shared/icons/CancelIcon";
import CakeIcon from "../../../shared/icons/CakeIcon";

interface CharacterDetailsProps {
  data: Character;
}
export default function CharacterDetails({ data }: CharacterDetailsProps) {
  return (
    <article>
      <header>
        <div>
          {data.id === "zoro" ? (
            <Link to="/crew">
              <ArrowLeftIcon />
            </Link>
          ) : (
            <button>
              <CancelIcon />
            </button>
          )}

          <h2>{data.id === "zoro" ? "Roronoa Zoro" : data.name}</h2>
        </div>
        <small>{data.job}</small>
      </header>
      <section>
        {data.id === "zoro" ? (
          <div>
            {data.gallery?.map((photo, index) => (
              <img src={photo} alt={`Zoro's photo number ${index + 1}`} />
            ))}
          </div>
        ) : (
          <picture>
            <img src={data.srcImg} alt={`${data.name}'s photo`} />
          </picture>
        )}
        <div>
          <p>
            <CakeIcon />
            {data.birthday}
          </p>
          <p>{data.age}</p>
          <p>{data.size}</p>
        </div>
        {data.id === "zoro" ? (
          <div>
            {data.description.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </div>
        ) : (
          <p>{data.description[0]}</p>
        )}
      </section>
    </article>
  );
}
