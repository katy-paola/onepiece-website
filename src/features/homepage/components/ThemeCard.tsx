import type { ThemeCardProps } from "../types";

export default function ThemeCard({ data }: ThemeCardProps) {
  return (
    <div>
      <button>
        {data.label}
        <img src={data.srcImg} alt={`${data.label} chibi photo`} />
      </button>
      <span className={`${data.tooltip.idColor}`}>{data.tooltip.message}</span>
    </div>
  );
}
