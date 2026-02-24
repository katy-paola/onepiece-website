import type { CharacterCard } from "./types";

const IMG_BASE_URL = "/posters/";

export const CHARACTERS: CharacterCard[] = [
  {
    id: "luffy",
    srcImg: `${IMG_BASE_URL}luffy.png`,
    name: "MONKEY D. LUFFY",
    bounty: "3,000,000,000",
  },
  {
    id: "zoro",
    srcImg: `${IMG_BASE_URL}zoro.png`,
    name: "404 - NOT FOUND",
    bounty: "GO FIND HIM",
  },
  {
    id: "usopp",
    srcImg: `${IMG_BASE_URL}usopp.png`,
    name: "GOD USOPP",
    bounty: "500,000,000",
  },
  {
    id: "sanji",
    srcImg: `${IMG_BASE_URL}sanji.png`,
    name: "VINSMOKE SANJI",
    bounty: "1,032,000,000",
  },
  {
    id: "nami",
    srcImg: `${IMG_BASE_URL}nami.png`,
    name: "NAMI",
    bounty: "366,000,000",
  },
  {
    id: "chopper",
    srcImg: `${IMG_BASE_URL}chopper.png`,
    name: "TONY TONY CHOPPER",
    bounty: "1,000",
  },
  {
    id: "robin",
    srcImg: `${IMG_BASE_URL}robin.png`,
    name: "NICO ROBIN",
    bounty: "930,000,000",
  },
  {
    id: "franky",
    srcImg: `${IMG_BASE_URL}franky.png`,
    name: "FRANKY",
    bounty: "394,000,000",
  },
  {
    id: "brook",
    srcImg: `${IMG_BASE_URL}brook.png`,
    name: "THE SK BROOK",
    bounty: "383,000,000",
  },
  {
    id: "jinbe",
    srcImg: `${IMG_BASE_URL}jinbe.png`,
    name: "JINBE",
    bounty: "1,100,000,000",
  },
];
