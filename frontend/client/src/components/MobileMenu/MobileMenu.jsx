import { MdCancel } from "react-icons/md";
import { useState, useEffect } from "react";
import "../NavBar/NavBar.css";

// eslint-disable-next-line react/prop-types
export default function MobileMenu({ showMobileMenu, menuHandler }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(window.innerWidth <= 768);

      if (!isMobile && showMobileMenu && windowWidth > 768) {
        menuHandler(); // Close the menu if it is open and the window is resized to a larger size
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, showMobileMenu, menuHandler]);

  return (
    <nav
      className={`bg-slate-200 fixed top-0 right-0 w-full h-screen overflow-y-auto z-50 mobile-nav ${
        showMobileMenu && isMobile ? "open-menu" : ""
      }`}
    >
      <div className="flex justify-between items-center m-4">
        <div>
          <img
            src="/images/tcod-logo-white.jpg"
            alt="Logo"
            className="w-12 h-12 object-cover rounded-full"
          />
          {/* <a
            href="#"
            className="text-3xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:bg-gradient-to-l hover:from-sky-600 hover:to-indigo-600 transition p-1 rounded-md text-white"
            style={{ fontFamily: "fantasy" }}
          >
            TCOD
          </a> */}
        </div>
        <button
          className="text-sky-500 hover:text-sky-600 text-4xl"
          onClick={menuHandler}
        >
          <MdCancel />
        </button>
      </div>
      <ul className="flex flex-col gap-8 mt-16 ms-8">
        <li className="block">
          <a
            href="#"
            className="text-gray-800 hover:text-sky-500 text-xl block transition"
          >
            صفحه اصلی
          </a>
        </li>
        <li className="block">
          <a
            href="#"
            className="text-gray-800 hover:text-sky-500 text-xl block transition"
          >
            فرانت اند
          </a>
        </li>
        <li className="block">
          <a
            href="#"
            className="text-gray-800 hover:text-sky-500 text-xl block transition"
          >
            امنیت
          </a>
        </li>
        <li className="block">
          <a
            href="#"
            className="text-gray-800 hover:text-sky-500 text-xl block transition"
          >
            مقالات
          </a>
        </li>
        <li className="block">
          <a
            href="#"
            className="text-gray-800 hover:text-sky-500 text-xl block transition"
          >
            پایتون
          </a>
        </li>
        <li className="block">
          <a
            href="#"
            className="text-gray-800 hover:text-sky-500 text-xl block transition"
          >
            مهارت های نرم
          </a>
        </li>
      </ul>
    </nav>
  );
}
