import CancelIcon from "../../../shared/icons/CancelIcon";
import type { ArcLink } from "../types";

const MOCK_ARCS: ArcLink[] = [];
export default function Sidebar() {
  return (
    <aside>
      <ul>
        {
          /** Here we will put all the arcs from api */
          MOCK_ARCS.map((arc, index) => (
            <li key={index}>
              <button>{arc.title}</button>
            </li>
          ))
        }
      </ul>
      <button>
        <CancelIcon />
      </button>
    </aside>
  );
}
