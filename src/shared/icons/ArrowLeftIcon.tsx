import { SVG_ATTRIBUTES } from "../consts";
import type { IconProps } from "../types";

export default function ArrowLeftIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className ?? SVG_ATTRIBUTES.size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M3.66667 8.00132H12.6667M7.33327 12.0013C7.33327 12.0013 3.33332 9.05532 3.33331 8.00125C3.33331 6.94718 7.33333 4.00128 7.33333 4.00128"
        stroke={SVG_ATTRIBUTES.color}
        strokeWidth={SVG_ATTRIBUTES.strokeWidth}
        strokeLinecap={SVG_ATTRIBUTES.strokeLinecap}
        strokeLinejoin={SVG_ATTRIBUTES.strokeLinejoin}
      />
    </svg>
  );
}

