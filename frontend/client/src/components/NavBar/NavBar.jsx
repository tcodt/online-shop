/* eslint-disable no-unused-vars */
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { TfiMenu } from "react-icons/tfi";
import { useContext, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import "./NavBar.css";
import MenuItems from "../MenuItems/MenuItems";
import { Link } from "react-router-dom";
import SharedDataContext from "../../Contexts/SharedDataProvider";
import { PiMoonStarsDuotone, PiSunDimDuotone } from "react-icons/pi";
import useTheme from "../../hooks/useTheme";

export default function NavBar() {
  const [subMenu, setSubMenu] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isDarkMode, toggleTheme] = useTheme();

  const { isLoggedIn, userInfos } = useContext(SharedDataContext);

  console.log(isLoggedIn);

  const menuHandler = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
      <div>
        <button className="px-2 py-2 bg-sky-500 rounded hover:bg-sky-400 transition md:hidden">
          <TfiMenu
            className="text-xl text-white"
            onClick={() => menuHandler()}
          />
        </button>
        <nav className="hidden md:block">
          <MenuItems hideSubMenu={subMenu} />
        </nav>

        {/* Mobile Menu */}

        {showMobileMenu && (
          <MobileMenu
            showMobileMenu={showMobileMenu}
            menuHandler={menuHandler}
          />
        )}

        {/* Mobile Menu */}
      </div>
      <div className="flex items-center gap-4">
        <button className="px-2 py-2 outline-none" onClick={toggleTheme}>
          {isDarkMode ? (
            <PiMoonStarsDuotone className="text-3xl text-gray-600 dark:text-zinc-100" />
          ) : (
            <PiSunDimDuotone className="text-3xl text-gray-600 dark:text-zinc-100" />
          )}
        </button>
        <button className="px-2 py-2 bg-sky-500 rounded hover:bg-sky-400 transition">
          <IoSearch className="text-xl text-white" />
        </button>
        <Link
          to="/dashboard/courses"
          className="px-2 py-2 bg-slate-200 rounded hover:bg-slate-300 transition"
        >
          <FaCartShopping className="text-xl text-gray-700" />
        </Link>

        <Link
          to={`${isLoggedIn ? "/" : "/login"}`}
          className="flex items-center gap-2 px-2 py-2 border-2 border-sky-500 rounded hover:bg-sky-100 text-sky-600 dark:bg-sky-500 dark:text-white transition"
        >
          {isLoggedIn ? userInfos?.name : "ثبت نام / ورود"}
        </Link>
      </div>
    </div>
  );
}
