import type { NavbarLinkProps, SvgAttributesProps } from "./types";

export const SVG_ATTRIBUTES: SvgAttributesProps = {
  size: "size-4",
  color: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const NAVBAR_LINKS: NavbarLinkProps[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Episodes",
    href: "/episodes",
  },
  {
    label: "Crew",
    href: "/crew",
  },
  {
    label: "Fruits",
    href: "/fruits",
  },
];
