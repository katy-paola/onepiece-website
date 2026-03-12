import React, { useState } from "react";
import CancelIcon from "../../../shared/icons/CancelIcon";
import type { ArcLink } from "../types";
import { cn } from "../../../shared/lib/utils";

interface SidebarProps {
  data: {
    arcLinks: ArcLink[];
    handleClick: (index: number) => void;
    selectedArcIdToShow: number | null;
    setSelectedArcIdToShow: React.Dispatch<React.SetStateAction<number | null>>;
  };
}
export default function Sidebar({ data }: SidebarProps) {
  const [selectedArcId, setSelectedArcId] = useState<number>(0);

  const handleArcClick = (index: number) => {
    data.handleClick(index);
    setSelectedArcId(index);
    showSelectedArc(index);
  };

  const showSelectedArc = (index: number) => {
    data.setSelectedArcIdToShow(index);
    setTimeout(() => {
      data.setSelectedArcIdToShow(null);
    }, 2000);
  };

  return (
    <aside>
      <div className="relative bg-white border border-stroke/30">
        <ul>
          {data.arcLinks.map((arc, index) => (
            <li key={index}>
              <button
                className={cn(
                  "px-5 py-4 w-full text-start hover:underline",
                  selectedArcId === arc.arcIndex && "underline",
                )}
                onClick={() => handleArcClick(arc.arcIndex)}
              >
                {arc.title}
              </button>
            </li>
          ))}
        </ul>
        <button className="absolute top-4 right-4 md:hidden">
          <CancelIcon />
        </button>
      </div>
    </aside>
  );
}
