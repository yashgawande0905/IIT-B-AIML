import { useCallback } from "react";
import { Link, useLocation } from "react-router";
import {
  BoxCubeIcon,
  CalenderIcon,
  GridIcon,
  PieChartIcon,
  PlugInIcon,
  TableIcon,
  PageIcon,
  UserCircleIcon,
  HorizontaLDots,
} from "../icons";
import { useSidebar } from "../context/SidebarContext";

const navItems = [
  { icon: <GridIcon />, name: "Dashboard", path: "/" },
  { icon: <BoxCubeIcon />, name: "Upload CSV", path: "/upload" },
  { icon: <TableIcon />, name: "Equipment Table", path: "/equipment-table" },

  // Analytics submenu removed from UI (still showing 3 items flat)
  { icon: <PieChartIcon />, name: "Flowrate Analysis", path: "/flowrate" },
  { icon: <PieChartIcon />, name: "Pressure Analysis", path: "/pressure" },
  { icon: <PieChartIcon />, name: "Temperature Analysis", path: "/temperature" },

  { icon: <CalenderIcon />, name: "History", path: "/history" },
  { icon: <PageIcon />, name: "Generate PDF", path: "/generate-pdf" },
];

const othersItems = [
  { icon: <PlugInIcon />, name: "Settings", path: "/settings" },
  { icon: <UserCircleIcon />, name: "Sign In", path: "/signin" },
  { icon: <UserCircleIcon />, name: "Sign Up", path: "/signup" },
];

const AppSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();

  const isActive = useCallback(
    (path) => location.pathname === path,
    [location.pathname]
  );

  return (
    <aside
      className={`fixed top-0 left-0 mt-16 lg:mt-0 px-5 flex flex-col bg-white dark:bg-gray-900 border-r 
      h-screen transition-all duration-300 z-50
      ${isExpanded || isMobileOpen ? "w-[290px]" : isHovered ? "w-[290px]" : "w-[90px]"}
      ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
      lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* IITB LOGO — DESKTOP ONLY */}
      <div className="hidden lg:flex justify-center py-8">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/240px-Indian_Institute_of_Technology_Bombay_Logo.svg.png"
          width={130}
          className="object-contain"
          alt="IIT Bombay"
        />
      </div>

      {/* MENU ITEMS */}
      <div className="flex flex-col overflow-y-auto no-scrollbar">
        
        {/* MAIN MENU */}
        <h2 className="mb-4 text-xs uppercase text-gray-400 flex">
          Menu
        </h2>

        <ul className="flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`menu-item group ${
                  isActive(item.path)
                    ? "menu-item-active"
                    : "menu-item-inactive"
                }`}
              >
                <span className="menu-item-icon-size">{item.icon}</span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="menu-item-text">{item.name}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* OTHERS */}
        <h2 className="mt-6 mb-4 text-xs uppercase text-gray-400">
          Others
        </h2>

        <ul className="flex flex-col gap-4">
          {othersItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`menu-item ${
                  isActive(item.path)
                    ? "menu-item-active"
                    : "menu-item-inactive"
                }`}
              >
                <span className="menu-item-icon-size">{item.icon}</span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="menu-item-text">{item.name}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </aside>
  );
};

export default AppSidebar;
