import { SVG_ATTRIBUTES } from "../consts";
import { cn } from "../lib/utils";
import type { IconProps } from "../types";

export default function SecMenuIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(SVG_ATTRIBUTES.size, props.className)}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M2.66666 3.33331H13.3333M2.66666 7.99998H13.3333M2.66666 12.6666H13.3333"
        stroke={SVG_ATTRIBUTES.color}
        strokeWidth={SVG_ATTRIBUTES.strokeWidth}
        strokeLinecap={SVG_ATTRIBUTES.strokeLinecap}
        strokeLinejoin={SVG_ATTRIBUTES.strokeLinejoin}
      />
    </svg>
  );
}
