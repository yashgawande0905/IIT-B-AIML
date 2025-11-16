import { useState } from "react";
import { Link } from "react-router";
import { useSidebar } from "../context/SidebarContext";
import { ThemeToggleButton } from "../components/common/ThemeToggleButton";
import UserDropdown from "../components/header/UserDropdown";

const AppHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleSidebar, toggleMobileSidebar } = useSidebar();

  const handleToggle = () => {
    if (window.innerWidth >= 1024) toggleSidebar();
    else toggleMobileSidebar();
  };

  return (
    <header className="sticky top-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 lg:px-6">

        {/* LEFT — HAMBURGER */}
        <button
          onClick={handleToggle}
          className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <svg width="20" height="20" fill="currentColor">
            <path d="M3 6h14M3 12h14M3 18h14" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        {/* CENTER LOGO — ONLY MOBILE */}
        <div className="flex-1 flex justify-center lg:hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/240px-Indian_Institute_of_Technology_Bombay_Logo.svg.png"
            className="h-10 object-contain"
            alt="IIT Bombay"
          />
        </div>

        {/* RIGHT — THEME + USER */}
        <div className="flex items-center gap-4">
          <ThemeToggleButton />

          {/* Ellipsis Menu (3 dots) — Desktop Only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hidden lg:flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg width="22" height="22" fill="currentColor">
              <circle cx="5" cy="11" r="2" />
              <circle cx="11" cy="11" r="2" />
              <circle cx="17" cy="11" r="2" />
            </svg>
          </button>

          {/* User Avatar */}
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
