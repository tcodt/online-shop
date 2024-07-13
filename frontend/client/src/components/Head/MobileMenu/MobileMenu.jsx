import {
  PiListBold,
  PiPhoneCallDuotone,
  PiStorefrontDuotone,
  PiUserDuotone,
  PiXBold,
} from "react-icons/pi";
import "./MobileMenu.css";
import { useEffect, useRef, useState } from "react";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  const handleBtnToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        btnRef.current &&
        !btnRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside, true);
    } else {
      document.removeEventListener("click", handleClickOutside, true);
    }

    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, [isMenuOpen]);

  return (
    <div className="lg:hidden relative">
      <button
        onClick={handleBtnToggle}
        ref={btnRef}
        className="flex items-center gap-1 text-2xl bg-primary-light p-2 rounded-full hover:shadow-md transition"
      >
        {isMenuOpen ? <PiXBold /> : <PiListBold />}
      </button>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className={`bg-primary-light p-4 rounded-lg shadow-lg absolute top-[45px] right-0 z-50 w-[200px] ${
            isMenuOpen ? "block animate-fade-in" : "hidden animate-fade-out"
          }`}
        >
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="#"
                className="flex items-center justify-between p-2 rounded-lg hover:bg-primary-blue hover:text-white transition"
              >
                حساب کاربری <PiUserDuotone className="text-xl" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between p-2 rounded-lg hover:bg-primary-blue hover:text-white transition"
              >
                محصولات <PiStorefrontDuotone className="text-xl" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between p-2 rounded-lg hover:bg-primary-blue hover:text-white transition"
              >
                ارتباط با ما <PiPhoneCallDuotone className="text-xl" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
