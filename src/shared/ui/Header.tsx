import { Link, useLocation } from "react-router-dom";
import { NAVBAR_LINKS, BG_COLORS, type BgColor } from "../consts";
import Button from "../components/Button";
import MainMenuIcon from "../icons/MainMenuIcon";
import CancelIcon from "../icons/CancelIcon";
import { useState } from "react";
import { cn } from "../lib/utils";
import { useCurrentTheme } from "../hooks/useCurrentTheme";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const pathname = location.pathname;
  const activeTab =
    pathname === "/lost/zoro" ? "/crew" : `/${pathname.split("/")[1]}`;

  const theme = useCurrentTheme();
  const bgColor: BgColor = BG_COLORS[theme.color];

  return (
    <header
      className={cn(
        "fixed top-0 w-full flex justify-between items-center p-4 z-10 transition-colors duration-300 lg:px-12 lg:py-8",
        bgColor,
      )}
    >
      <Link to="/" title="Go to homepage">
        <img src={theme.logoUrl} alt="One Piece Logo" className="h-10" />
      </Link>
      <nav
        className={cn(
          "flex justify-between items-start p-4 fixed top-0 right-0 translate-x-full z-10 w-full transition-all duration-300",
          bgColor,
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
                  activeTab === link.href && "underline",
                )}
                to={link.href}
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
