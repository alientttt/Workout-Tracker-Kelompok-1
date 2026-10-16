import { navItems } from "../../config/Navigation";
import { NavLink } from "react-router";
import "../Bottomnav/BottomNav.css";

export default function Navbar() {
  return (
    <nav className="bottom-nav bg-black" aria-label="Navigasi utama">
      <ul className="bottom-nav__list">
        {navItems.map((item) => (
          <li key={item.id} className="bottom-nav__item">
            <NavLink
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `bottom-nav__button ${isActive ? "bottom-nav__button--active" : ""}`
              }
            >
              <svg
                className="bottom-nav__icon text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={item.iconPath} />
              </svg>
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
