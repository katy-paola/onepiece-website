import { Link, Outlet } from "react-router-dom";
import HeroBackground from "../components/HeroBackground";

export default function MainLayout() {
  return (
    <section className="relative max-w-7xl mx-auto flex flex-col gap-8 px-16 py-12 h-full isolate">
      <header>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/episodes">Episodes</Link>
            </li>
            <li>
              <Link to="/crew">Crew</Link>
            </li>
            <li>
              <Link to="/fruits">Fruits</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="contents">
        <Outlet />
      </main>

      <HeroBackground />
      <img
        className="w-20 fixed right-8 bottom-2"
        src="/sunny.png"
        aria-hidden="true"
        role="presentation"
        alt=""
      />
    </section>
  );
}
