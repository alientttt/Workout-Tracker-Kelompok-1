import { navItems, type PageId } from "../../config/Navigation";
import "./BottomNav.css";

interface BottomNavProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function BottomNav({ activePage, onNavigate }: BottomNavProps) {
  return (
    <nav className="bottom-nav" aria-label="Navigasi utama">
      <ul className="bottom-nav__list">
        {navItems.map((item) => {
          const isActive = item.id === activePage;

          return (
            <li key={item.id} className="bottom-nav__item">
              <button
                type="button"
                className={`bottom-nav__button ${
                  isActive ? "bottom-nav__button--active" : ""
                }`}
                onClick={() => onNavigate(item.id)}
                aria-current={isActive ? "page" : undefined}
              >
                <svg
                  className="bottom-nav__icon"
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
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
