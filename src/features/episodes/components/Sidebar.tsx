import CancelIcon from "../../../shared/icons/CancelIcon";
import type { ArcLink } from "../types";

interface SidebarProps {
  arcLinks: ArcLink[];
  handleClick: (index: number) => void;
}
export default function Sidebar({ arcLinks, handleClick }: SidebarProps) {
  return (
    <aside>
      <ul>
        {arcLinks.map((arc, index) => (
          <li key={index}>
            <button onClick={() => handleClick(arc.arcIndex)}>
              {arc.title}
            </button>
          </li>
        ))}
      </ul>
      <button>
        <CancelIcon />
      </button>
    </aside>
  );
}
