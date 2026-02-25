export interface Saga {
  id: number;
  title: string;
  href: string;
}

export interface ArcLink {
  title: string;
  arcIndex: number;
}

export interface Episode {
  id: number;
  title: string;
  description: string;
  arc: {
    id: number;
    title: string;
  };
}
