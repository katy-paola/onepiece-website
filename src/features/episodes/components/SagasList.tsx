import { Link } from "react-router-dom";
import { SAGAS } from "../consts";
import ArrowRightIcon from "../../../shared/icons/ArrowRightIcon";

export default function SagasList() {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {SAGAS.map((saga, index) => (
        <li key={index}>
          <Link
            to={saga.href}
            className="flex justify-between items-center px-5 py-4 text-action-text bg-default-bg border border-stroke/30 shadow-card hover:shadow-none"
          >
            {saga.title}
            <ArrowRightIcon />
          </Link>
        </li>
      ))}
    </ul>
  );
}
