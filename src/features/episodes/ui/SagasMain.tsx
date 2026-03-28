import Hero from "../../../shared/ui/Hero";
import SagasList from "../components/SagasList";

export default function SagasMain() {
  return (
    <>
      <Hero currentHero="episodes" />
      <SagasList />
    </>
  );
}
