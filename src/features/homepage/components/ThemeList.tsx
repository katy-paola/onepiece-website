import { Tooltip } from "react-tooltip";
import { THEME_CARDS } from "../consts";
import { useTheme } from "../../../shared/hooks/useTheme";
import type { ThemeName } from "../../../shared/consts";

export default function ThemeList() {
  const { setTheme } = useTheme();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: ThemeName,
  ) => {
    e.preventDefault();
    setTheme(id);
  };

  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {THEME_CARDS.map((card, index) => (
        <div key={index}>
          <a
            data-tooltip-id={`${card.label.toLowerCase()}-tooltip-id`}
            href="#"
            onClick={(e) => handleClick(e, card.id as ThemeName)}
            className="flex flex-col justify-between p-2 text-action-text bg-radial border border-stroke/30 shadow-card hover:shadow-none"
          >
            <span className="w-full text-start">{card.label}</span>
            <img
              loading="lazy"
              src={card.srcImg}
              alt={`${card.label} chibi photo`}
              className="size-14 self-end -mt-4"
            />
          </a>
          <Tooltip
            id={`${card.label.toLowerCase()}-tooltip-id`}
            delayShow={500}
            opacity={1}
            style={{
              color: "#1e1e1e",
              backgroundColor: `${card.tooltip.color}`,
              maxWidth: "90%",
            }}
          >
            <div>{card.tooltip.message}</div>
          </Tooltip>
        </div>
      ))}
    </ul>
  );
}
