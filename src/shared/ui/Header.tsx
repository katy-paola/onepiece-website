import { Link } from "react-router-dom";
import { NAVBAR_LINKS } from "../consts";
import Button from "../components/Button";
import MainMenuIcon from "../icons/MainMenuIcon";
import CancelIcon from "../icons/CancelIcon";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="relative flex justify-between items-center p-4 bg-radial z-10">
      <Link to="/" title="Go to homepage">
        <img
          src="/logos/onepiece-logo.png"
          alt="One Piece Logo"
          className="h-10"
        />
      </Link>
      <nav
        className={cn(
          "flex justify-between items-start p-4 fixed top-0 right-0 translate-x-full z-10 bg-radial w-full transition-transform duration-300",
          isOpen && "translate-x-0",
        )}
      >
        <ul className="flex-1">
          {NAVBAR_LINKS.map((link, index) => (
            <li key={index} className="flex" onClick={() => setIsOpen(false)}>
              <Link className="p-2" to={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          className=""
          onClick={() => setIsOpen(false)}
          variant="icon"
          hierarchy="secondary"
        >
          <CancelIcon />
        </Button>
      </nav>
      <Button
        onClick={() => setIsOpen(true)}
        variant="icon"
        hierarchy="secondary"
      >
        <MainMenuIcon />
      </Button>
    </header>
  );
}
