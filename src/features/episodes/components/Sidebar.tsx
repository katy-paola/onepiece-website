import React from "react";
import CancelIcon from "../../../shared/icons/CancelIcon";
import type { ArcLink } from "../types";
import { cn } from "../../../shared/lib/utils";

interface SidebarProps {
  data: {
    arcLinks: ArcLink[];
    handleClick: (index: number) => void;
    selectedArcIdToShow: number | null;
    setSelectedArcIdToShow: React.Dispatch<React.SetStateAction<number | null>>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    visibleArcIndex: number;
  };
  className?: string;
}
export default function Sidebar({ data, className }: SidebarProps) {
  const handleArcClick = (index: number) => {
    data.handleClick(index);
    showSelectedArc(index);
  };

  const showSelectedArc = (index: number) => {
    data.setSelectedArcIdToShow(index);
    data.setIsOpen(false);
    setTimeout(() => {
      data.setSelectedArcIdToShow(null);
    }, 2000);
  };

  return (
    <aside className={cn(className)}>
      <div className="relative w-full bg-white border border-stroke/30">
        <ul>
          {data.arcLinks.map((arc, index) => (
            <li key={index}>
              <button
                className={cn(
                  "px-5 py-4 w-full text-start hover:underline",
                  data.visibleArcIndex === arc.arcIndex && "underline",
                )}
                onClick={() => handleArcClick(arc.arcIndex)}
              >
                {arc.title}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="absolute top-4 right-4 md:hidden"
          onClick={() => data.setIsOpen(false)}
        >
          <CancelIcon />
        </button>
      </div>
    </aside>
  );
}
