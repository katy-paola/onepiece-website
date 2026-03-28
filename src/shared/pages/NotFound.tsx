import LinkElement from "../components/Link";

export default function NotFound() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-onepiece text-gradient lg:text-center md:text-5xl">
          404 - Page not found
        </h1>
        <img src="/zoro-lost.png" alt="Zoro lost" className="w-40" />
        <p className="text-center">Lost enough to run into Zoro.</p>
      </div>
      <div className="flex justify-center gap-4">
        <LinkElement href="/" hierarchy="secondary">
          Back to home
        </LinkElement>
        <LinkElement href="/episodes">Explore episodes</LinkElement>
      </div>
    </section>
  );
}
