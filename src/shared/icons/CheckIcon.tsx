import { SVG_ATTRIBUTES } from "../consts";
import type { IconProps } from "../types";

export default function CheckIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className ? props.className : SVG_ATTRIBUTES.size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M3.33334 9.33331L5.66668 11.6666L12.6667 4.33331"
        stroke={SVG_ATTRIBUTES.color}
        strokeWidth={SVG_ATTRIBUTES.strokeWidth}
        strokeLinecap={SVG_ATTRIBUTES.strokeLinecap}
        strokeLinejoin={SVG_ATTRIBUTES.strokeLinejoin}
      />
    </svg>
  );
}
