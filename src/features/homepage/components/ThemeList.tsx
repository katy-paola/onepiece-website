import { THEME_CARDS } from "../consts";

export default function ThemeList() {
  return (
    <ul>
      {THEME_CARDS.map((card) => (
        <div>
          <button>
            {card.label}
            <img src={card.srcImg} alt={`${card.label} chibi photo`} />
          </button>
          <span className={`${card.tooltip.idColor}`}>
            {card.tooltip.message}
          </span>
        </div>
      ))}
    </ul>
  );
}
