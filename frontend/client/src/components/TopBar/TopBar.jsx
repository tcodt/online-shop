import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

export default function TopBar() {
  return (
    <div className="flex justify-center md:justify-between items-center bg-slate-200 dark:bg-gray-800 p-4">
      <nav className="hidden md:block">
        <ul className="flex gap-4">
          <li>
            <a
              href="#"
              className="text-sm text-gray-800 hover:text-sky-500 dark:text-sky-200 transition"
            >
              آموزش Html
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-gray-800 hover:text-sky-500 dark:text-sky-200 transition"
            >
              آموزش Css
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-gray-800 hover:text-sky-500 dark:text-sky-200 transition"
            >
              آموزش جاوا اسکریپت
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-gray-800 hover:text-sky-500 dark:text-sky-200 transition"
            >
              آموزش بوت استرپ
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-gray-800 hover:text-sky-500 dark:text-sky-200 transition"
            >
              آموزش پایتون
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-gray-800 hover:text-sky-500 dark:text-sky-200 transition"
            >
              آموزش ریکت
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-gray-800 hover:text-sky-500 dark:text-sky-200 transition"
            >
              20,000 تومان
            </a>
          </li>
        </ul>
      </nav>
      <div className="md:hidden lg:flex flex gap-4">
        <span className="flex items-center text-sm dark:text-zinc-300">
          amirprogrammer38@gmail.com &nbsp;
          <MdEmail className="text-lg text-sky-500" />
        </span>
        <span className="flex items-center text-sm dark:text-zinc-300">
          09051061529 &nbsp;
          <IoCallSharp className="text-lg text-sky-500" />
        </span>
      </div>
    </div>
  );
}
