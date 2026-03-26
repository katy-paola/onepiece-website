import { Tooltip } from "react-tooltip";
import { THEME_CARDS } from "../consts";

export default function ThemeList() {
  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {THEME_CARDS.map((card, index) => (
        <div key={index}>
          <a
            data-tooltip-id={`${card.label.toLowerCase()}-tooltip-id`}
            data-tooltip-content={card.tooltip.message}
            href="#"
            onClick={(e) => e.preventDefault()}
            className="flex flex-col justify-between p-2 text-action-text bg-radial border border-stroke/30 shadow-card hover:shadow-none"
          >
            <span className="w-full text-start">{card.label}</span>
            <img
              src={card.srcImg}
              alt={`${card.label} chibi photo`}
              className="size-14 self-end -mt-4"
            />
          </a>
          <Tooltip
            id={`${card.label.toLowerCase()}-tooltip-id`}
            className={`${card.tooltip.idColor}`}
            openOnClick
          />
        </div>
      ))}
    </ul>
  );
}
