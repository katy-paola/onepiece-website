import { Link } from "react-router-dom";
import { NAVBAR_LINKS } from "../consts";
import Button from "../components/Button";
import MainMenuIcon from "../icons/MainMenuIcon";
import CancelIcon from "../icons/CancelIcon";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("homepage");
  return (
    <header className="fixed top-0 w-full flex justify-between items-center p-4 bg-radial z-10">
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
          "md:static md:translate-none md:right-auto md:w-max md:p-0",
        )}
      >
        <ul className="flex-1 md:flex">
          {NAVBAR_LINKS.map((link, index) => (
            <li key={index} className="flex" onClick={() => setIsOpen(false)}>
              <Link
                className={cn(
                  "p-2 hover:underline",
                  activeTab === link.id && "underline",
                )}
                to={link.href}
                onClick={() => setActiveTab(link.id)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          className="md:hidden"
          onClick={() => setIsOpen(false)}
          variant="icon"
          hierarchy="secondary"
        >
          <CancelIcon />
        </Button>
      </nav>
      <Button
        className="md:hidden"
        onClick={() => setIsOpen(true)}
        variant="icon"
        hierarchy="secondary"
      >
        <MainMenuIcon />
      </Button>
    </header>
  );
}
