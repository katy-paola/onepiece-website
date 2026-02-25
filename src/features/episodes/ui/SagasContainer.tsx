import Hero from "../../../shared/ui/Hero";
import SagasList from "../components/SagasList";

export default function SagasContainer() {
  return (
    <>
      <Hero currentHero="episodes" />
      <SagasList />
    </>
  );
}
