import { SVG_ATTRIBUTES } from "../consts";
import type { IconProps } from "../types";

export default function Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className ?? SVG_ATTRIBUTES.size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d=""
        stroke={SVG_ATTRIBUTES.color}
        strokeWidth={SVG_ATTRIBUTES.strokeWidth}
        strokeLinecap={SVG_ATTRIBUTES.strokeLinecap}
        strokeLinejoin={SVG_ATTRIBUTES.strokeLinejoin}
      />
    </svg>
  );
}
