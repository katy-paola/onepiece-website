import CancelIcon from "../../../shared/icons/CancelIcon";
import type { ArcLink } from "../types";

interface SidebarProps {
  arcLinks: ArcLink[];
}
export default function Sidebar({ arcLinks }: SidebarProps) {
  return (
    <aside>
      <ul>
        {arcLinks.map((arc, index) => (
          <li key={index}>
            <button>{arc.title}</button>
          </li>
        ))}
      </ul>
      <button>
        <CancelIcon />
      </button>
    </aside>
  );
}
