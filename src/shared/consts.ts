import type { HeroContent, NavbarLink, SvgAttributes } from "./types";

export const SVG_ATTRIBUTES: SvgAttributes = {
  size: "size-4",
  color: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const NAVBAR_LINKS: NavbarLink[] = [
  {
    id: "homepage",
    label: "Home",
    href: "/",
  },
  {
    id: "episodes",
    label: "Episodes",
    href: "/episodes",
  },
  {
    id: "crew",
    label: "Crew",
    href: "/crew",
  },
  {
    id: "fruits",
    label: "Fruits",
    href: "/fruits",
  },
];

export const HERO_LIST: HeroContent[] = [
  {
    id: "homepage",
    title: "Welcome to One Piece",
    paragraphs: [
      "Here you can explore info about episodes and a little extra. Stick around, it'll be fun, trust me.",
      "You don't know One Piece? It's a 25-year-long story about a rubber boy who can't swim but wants to be King of the Pirates. He travels with a crew of weirdos chasing a treasure that is supposedly real, in an epic tale of dreams and freedom.",
      "But before we dive in: who's your favorite character? Mine is Roronoa Zoro. He gets lost walking in a straight line, but I love him.",
    ],
    subtitle: "Pick your favorite:",
  },
  {
    id: "episodes",
    title: "One Piece Episodes",
    paragraphs: [
      "From the East Blue to the latest battles, here is the complete journey of the Mugiwara crew. Get some popcorn because we have over a thousand episodes to go through, and remember, skipping Skypiea is a crime in this house.",
    ],
    subtitle: "Pick a saga:",
  },
  {
    id: "crew",
    title: "Mugiwara Crew",
    paragraphs: [
      "Warning: prolonged exposure to this crew may cause emotional attachment and a sudden urge to yell “nakama.”",
    ],
  },
  {
    id: "fruits",
    title: "One Piece Fruits",
    paragraphs: [
      "Careful! They taste like garbage, but they grant you incredible powers (at the low, low price of never swimming again). Here are some of the most iconic fruits we've found so far, and no, you can't eat them through the screen.",
    ],
  },
];

const BASE_LOGO_URL = "/logos/";
const END_LOGO_URL = "-logo.png";
export const THEMES = {
  default: {
    color: "default",
    logoUrl: `${BASE_LOGO_URL}onepiece${END_LOGO_URL}`,
  },
  luffy: {
    color: "luffy",
    logoUrl: `${BASE_LOGO_URL}luffy${END_LOGO_URL}`,
  },
  zoro: {
    color: "zoro",
    logoUrl: `${BASE_LOGO_URL}zoro${END_LOGO_URL}`,
  },
  usopp: {
    color: "usopp",
    logoUrl: `${BASE_LOGO_URL}usopp${END_LOGO_URL}`,
  },
  sanji: {
    color: "sanji",
    logoUrl: `${BASE_LOGO_URL}sanji${END_LOGO_URL}`,
  },
  nami: {
    color: "nami",
    logoUrl: `${BASE_LOGO_URL}nami${END_LOGO_URL}`,
  },
  chopper: {
    color: "chopper",
    logoUrl: `${BASE_LOGO_URL}chopper${END_LOGO_URL}`,
  },
  robin: {
    color: "robin",
    logoUrl: `${BASE_LOGO_URL}robin${END_LOGO_URL}`,
  },
  franky: {
    color: "franky",
    logoUrl: `${BASE_LOGO_URL}franky${END_LOGO_URL}`,
  },
  brook: {
    color: "brook",
    logoUrl: `${BASE_LOGO_URL}brook${END_LOGO_URL}`,
  },
  jinbe: {
    color: "jinbe",
    logoUrl: `${BASE_LOGO_URL}jinbe${END_LOGO_URL}`,
  },
} as const;

export const TITLE_COLORS = {
  default: "text-default-text",
  luffy: "text-luffy-text",
  zoro: "text-zoro-text",
  nami: "text-nami-text",
  sanji: "text-sanji-text",
  robin: "text-robin-text",
  usopp: "text-usopp-text",
  chopper: "text-chopper-text",
  franky: "text-franky-text",
  brook: "text-brook-text",
  jinbe: "text-jinbe-text",
} as const;

export type ThemeName = keyof typeof THEMES;
export type Theme = (typeof THEMES)[ThemeName];
export type TitleColor = (typeof TITLE_COLORS)[keyof typeof TITLE_COLORS];
