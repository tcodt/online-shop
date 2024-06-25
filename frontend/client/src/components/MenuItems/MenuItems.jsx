import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function MenuItems({ hideSubMenu }) {
  return (
    <ul
      className={`${
        hideSubMenu ? "flex items-center" : "flex flex-col"
      } gap-4 z-30 relative`}
    >
      {hideSubMenu && (
        <li>
          <Link to="/">
            <img
              src="/images/tcod-logo-white.jpg"
              alt="Logo"
              className="w-14 h-14 object-cover rounded-full"
            />
          </Link>

          {/* <Link
            to="/"
            className="text-3xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:bg-gradient-to-l hover:from-sky-600 hover:to-indigo-600 transition p-1 rounded-md text-white"
            style={{ fontFamily: "fantasy" }}
          >
            TCOD
          </Link> */}
        </li>
      )}
      <li>
        <Link
          to="/"
          className="text-gray-800 hover:text-sky-500 dark:text-white transition"
        >
          صفحه اصلی
        </Link>
      </li>
      <li className="relative">
        <a
          href="#"
          className="flex items-center text-gray-800 hover:text-sky-500 dark:text-white transition"
        >
          فرانت اند&nbsp;
          {hideSubMenu && <IoIosArrowDown className="text-lg" />}
        </a>
        {hideSubMenu && (
          <ul className="dark:bg-gray-600">
            <li className="block my-1">
              <a
                href="#"
                className="text-gray-800 text-base block py-2 hover:text-sky-500 dark:text-white transition"
              >
                آموزش Html
              </a>
            </li>
            <li className="block my-1">
              <a
                href="#"
                className="text-gray-800 text-base block py-2 hover:text-sky-500 dark:text-white transition"
              >
                آموزش Css
              </a>
            </li>
            <li className="block my-1">
              <a
                href="#"
                className="text-gray-800 text-base block py-2 hover:text-sky-500 dark:text-white transition"
              >
                آموزش جاوا اسکریپت
              </a>
            </li>
            <li className="block my-1">
              <a
                href="#"
                className="text-gray-800 text-base block py-2 hover:text-sky-500 dark:text-white transition"
              >
                آموزش FlexBox
              </a>
            </li>
            <li className="block my-1">
              <a
                href="#"
                className="text-gray-800 text-base block py-2 hover:text-sky-500 dark:text-white transition"
              >
                آموزش جامع ریکت
              </a>
            </li>
          </ul>
        )}
      </li>
      <li className="relative">
        <a
          href="#"
          className="flex items-center text-gray-800 hover:text-sky-500 dark:text-white transition"
        >
          امنیت&nbsp;
          {hideSubMenu && <IoIosArrowDown className="text-lg" />}
        </a>
        {hideSubMenu && (
          <ul className="dark:bg-gray-600">
            <li className="block my-1">
              <a
                href="#"
                className="text-gray-800 text-base block py-2 hover:text-sky-500 dark:text-white transition"
              >
                آموزش کالی لینوکس
              </a>
            </li>
            <li className="block my-1">
              <a
                href="#"
                className="text-gray-800 text-base block py-2 hover:text-sky-500 dark:text-white transition"
              >
                آموزش پایتون سیاه
              </a>
            </li>
            <li className="block my-1">
              <a
                href="#"
                className="text-gray-800 text-base block py-2 hover:text-sky-500 dark:text-white transition"
              >
                آموزش جاوا اسکریپت سیاه
              </a>
            </li>
            <li className="block my-1">
              <a
                href="#"
                className="text-gray-800 text-base block py-2 hover:text-sky-500 dark:text-white transition"
              >
                آموزش شبکه
              </a>
            </li>
          </ul>
        )}
      </li>
      <li className="relative">
        <a
          href="#"
          className="flex items-center text-gray-800 hover:text-sky-500 dark:text-white transition"
        >
          مقالات&nbsp;
          {hideSubMenu && <IoIosArrowDown className="text-lg" />}
        </a>
        {hideSubMenu && (
          <ul className="dark:bg-gray-600">
            <li className="block my-1">
              <a
                href="#"
                className="text-gray-800 text-base block py-2 hover:text-sky-500 dark:text-white transition"
              >
                توسعه وب
              </a>
            </li>
            <li className="block my-1">
              <a
                href="#"
                className="text-gray-800 text-base block py-2 hover:text-sky-500 dark:text-white transition"
              >
                جاوا اسکریپت
              </a>
            </li>
            <li className="block my-1">
              <a
                href="#"
                className="text-gray-800 text-base block py-2 hover:text-sky-500 dark:text-white transition"
              >
                فرانت اند
              </a>
            </li>
          </ul>
        )}
      </li>
      <li className="relative">
        <a
          href="#"
          className="flex items-center text-gray-800 hover:text-sky-500 dark:text-white transition"
        >
          پایتون&nbsp;
          {hideSubMenu && <IoIosArrowDown className="text-lg" />}
        </a>
        {hideSubMenu && (
          <ul className="dark:bg-gray-600">
            <li className="block my-1">
              <a
                href="#"
                className="text-gray-800 text-base block py-2 hover:text-sky-500 dark:text-white transition"
              >
                دوره متخصص پایتون
              </a>
            </li>
            <li className="block my-1">
              <a
                href="#"
                className="text-gray-800 text-base block py-2 hover:text-sky-500 dark:text-white transition"
              >
                دوره هوش مصنوعی با پایتون
              </a>
            </li>
            <li className="block my-1">
              <a
                href="#"
                className="text-gray-800 text-base block py-2 hover:text-sky-500 dark:text-white transition"
              >
                دوره متخصص جنگو
              </a>
            </li>
          </ul>
        )}
      </li>
      <li>
        <a
          href="#"
          className="text-gray-800 hover:text-sky-500 dark:text-white transition"
        >
          مهارت های نرم
        </a>
      </li>
    </ul>
  );
}
