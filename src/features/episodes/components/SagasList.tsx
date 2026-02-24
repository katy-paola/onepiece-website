import { Link } from "react-router-dom";
import { SAGAS } from "../consts";
import ArrowRightIcon from "../../../shared/icons/ArrowRightIcon";

export default function SagasList() {
  return (
    <ul>
      {SAGAS.map((saga, index) => (
        <li key={index}>
          <Link to={saga.href}>{saga.title}</Link>
          <ArrowRightIcon />
        </li>
      ))}
    </ul>
  );
}
