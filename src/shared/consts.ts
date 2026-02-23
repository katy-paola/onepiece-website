import type {
  HeroContentProps,
  NavbarLinkProps,
  SvgAttributesProps,
} from "./types";

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

/** This will be moved to its corresponding feature folder later */
export const HERO_CONTENT: HeroContentProps[] = [
  {
    title: "Welcome to One Piece",
    paragraphs: [
      "Here you can find all the episodes and a little something extra. Stick around, it'll be fun, trust me.",
      "You don't know One Piece? It's a 25-year-long story about a rubber boy who can't swim but wants to be King of the Pirates. He travels with a crew of weirdos chasing a treasure that is supposedly real, in an epic tale of dreams and freedom.",
      "But before we dive in: who's your favorite character? Mine is Roronoa Zoro. He gets lost walking in a straight line, but I love him.",
    ],
    subtitle: "Pick your favorite:",
  },
  {
    title: "One Piece Episodes",
    paragraphs: [
      "From the East Blue to the latest battles, here is the complete journey of the Mugiwara crew. Get some popcorn because we have over a thousand episodes to go through, and remember, skipping Skypiea is a crime in this house.",
    ],
    subtitle: "Pick a saga:",
  },
  {
    title: "Mugiwara Crew",
    paragraphs: [
      "Warning: prolonged exposure to this crew may cause emotional attachment and a sudden urge to yell “nakama.”",
    ],
  },
  {
    title: "One Piece Fruits",
    paragraphs: [
      "Careful! They taste like garbage, but they grant you incredible powers (at the low, low price of never swimming again). Here are some of the most iconic fruits we've found so far, and no, you can't eat them through the screen.",
    ],
  },
];
