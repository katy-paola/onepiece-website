import { Link } from "react-router-dom";
import { NAVBAR_LINKS } from "../consts";
import Button from "../components/Button";
import MainMenuIcon from "../icons/MainMenuIcon";
import CancelIcon from "../icons/CancelIcon";

export default function Header() {
  return (
    <header>
      <Link to="/" title="Go to homepage">
        <img src="/logos/onepiece-logo.png" alt="One Piece Logo" />
      </Link>
      <nav>
        <ul>
          {NAVBAR_LINKS.map((link, index) => (
            <li key={index}>
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button>
        <MainMenuIcon />
        <CancelIcon />
      </Button>
    </header>
  );
}
