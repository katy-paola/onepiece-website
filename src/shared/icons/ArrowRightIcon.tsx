import { SVG_ATTRIBUTES } from "../consts";
import type { IconProps } from "../types";

export default function ArrowRightIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className ?? SVG_ATTRIBUTES.size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M12.3333 8.00132H3.33333M8.66673 12.0013C8.66673 12.0013 12.6667 9.05532 12.6667 8.00125C12.6667 6.94718 8.66667 4.00128 8.66667 4.00128"
        stroke={SVG_ATTRIBUTES.color}
        strokeWidth={SVG_ATTRIBUTES.strokeWidth}
        strokeLinecap={SVG_ATTRIBUTES.strokeLinecap}
        strokeLinejoin={SVG_ATTRIBUTES.strokeLinejoin}
      />
    </svg>
  );
}
