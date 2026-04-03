export interface IconProps {
  className?: string;
}
export interface SvgAttributes {
  size: string;
  color: string;
  strokeWidth: number;
  strokeLinecap: "round" | "butt" | "square" | "inherit" | undefined;
  strokeLinejoin: "round" | "inherit" | "miter" | "bevel" | undefined;
}

export interface NavbarLink {
  id: "homepage" | "episodes" | "crew" | "fruits";
  label: string;
  href: string;
}

export interface HeroContent {
  id: string;
  title: string;
  paragraphs: string[];
  subtitle?: string;
}

export interface Theme {
  color: string;
  logoUrl: string;
}
