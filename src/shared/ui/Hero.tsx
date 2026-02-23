import type { ReactNode } from "react";

interface HeroProps {
  data: {
    title: string;
    children: ReactNode;
  };
}
export default function Hero({ data }: HeroProps) {
  return (
    <section>
      <h1>{data.title}</h1>
      {data.children}
    </section>
  );
}
