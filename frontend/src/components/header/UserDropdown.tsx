import { useState } from "react";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { Dropdown } from "../ui/dropdown/Dropdown";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const handleSignOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/"; // Redirect to home
  };

  return (
    <div className="relative">
      {/* === USER BUTTON === */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 rounded-lg cursor-pointer select-none text-gray-700 dark:text-gray-300 hover:opacity-90"
      >
        {/* Avatar */}
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover border border-gray-300 dark:border-gray-700"
        />

        {/* Name */}
        <span className="font-medium text-sm">Musharof</span>

        {/* Dropdown Icon */}
        <svg
          className={`w-5 h-5 transition-transform text-gray-600 dark:text-gray-400 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* === DROPDOWN MENU === */}
      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-3 w-64 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl dark:border-gray-800 dark:bg-gray-900 z-50"
      >
        {/* User Text Block */}
        <div className="pb-3 border-b border-gray-200 dark:border-gray-800">
          <p className="font-semibold text-gray-800 dark:text-gray-300">
            Musharof Chowdhury
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            randomuser@pimjo.com
          </p>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-1 pt-3 pb-2">
          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              to="/profile"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Edit Profile
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              to="/settings"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Account Settings
            </DropdownItem>
          </li>

          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              to="/support"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Support
            </DropdownItem>
          </li>
        </ul>

        {/* Sign Out */}
        <button
          onClick={handleSignOut}
          className="mt-2 flex items-center gap-3 px-3 py-2 rounded-lg text-left w-full text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-600/10 hover:text-red-600 dark:hover:text-red-400"
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            viewBox="0 0 24 24"
            className="text-gray-500 group-hover:text-red-600 dark:group-hover:text-red-400"
          >
            <path
              d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Sign Out
        </button>
      </Dropdown>
    </div>
  );
}
