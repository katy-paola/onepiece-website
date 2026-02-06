export interface Saga {
  id: number;
  title: string;
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

export interface Character {
  id: number;
  name: string;
  job: string;
  size: string;
  birthday: string;
  age: string;
  bounty: string;
}

export interface Fruit {
  id: number;
  name: string;
  roman_name: string;
  description: string;
  type: string;
  filename?: string;
}
