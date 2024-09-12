import { Menu } from "../Menu";
import "./style.css";

export function Header() {
  return (
    <nav className="navbar bg-dark navbar-dark">
      <div className="container-fluid">
        <Menu />
        <button className="navbar-brand custom-navbar-brand">
          <img src="https://via.placeholder.com/30" alt="Your Logo" />
        </button>
      </div>
    </nav>
  );
}
