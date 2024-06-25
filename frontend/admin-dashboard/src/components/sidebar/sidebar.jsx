import { Link } from "react-router-dom";
import logo from "@assets/images/tcod-logo-white.jpg";

const SideBar = () => {
  return (
    <>
      <aside className="p-2 bg-white sticky h-full">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo" className="h-32 object-contain" />
        </div>
        <ul className="flex flex-col gap-2 py-2">
          <li>
            <Link
              className="bg-slate-200 rounded-xl w-full block p-3 hover:bg-sky-500 hover:text-white transition"
              to="/admin"
            >
              داشبورد
            </Link>
          </li>
          <li>
            <Link
              className="bg-slate-200 rounded-xl w-full block p-3 hover:bg-sky-500 hover:text-white transition"
              to="product"
            >
              محصولات
            </Link>
          </li>
          <li>
            <Link
              className="bg-slate-200 rounded-xl w-full block p-3 hover:bg-sky-500 hover:text-white transition"
              to="review"
            >
              نظرات
            </Link>
          </li>
          <li>
            <Link
              className="bg-slate-200 rounded-xl w-full block p-3 hover:bg-sky-500 hover:text-white transition"
              to="cart"
            >
              سبد خرید
            </Link>
          </li>
          <li>
            <Link
              className="bg-slate-200 rounded-xl w-full block p-3 hover:bg-sky-500 hover:text-white transition"
              to="category"
            >
              دسته بندی
            </Link>
          </li>
          <li>
            <Link
              className="bg-slate-200 rounded-xl w-full block p-3 hover:bg-sky-500 hover:text-white transition"
              to="message"
            >
              تیکت ها
            </Link>
          </li>
          <li>
            <Link
              className="bg-slate-200 rounded-xl w-full block p-3 hover:bg-sky-500 hover:text-white transition"
              to="off"
            >
              تخفیف ها
            </Link>
          </li>
          <li>
            <Link
              className="bg-slate-200 rounded-xl w-full block p-3 hover:bg-sky-500 hover:text-white transition"
              to="users"
            >
              کاربران
            </Link>
          </li>
          <li>
            <Link
              className="bg-slate-200 rounded-xl w-full block p-3 hover:bg-sky-500 hover:text-white transition"
              to="upload"
            >
              عکس ها
            </Link>
          </li>
          <li>
            <Link
              className="bg-slate-200 rounded-xl w-full block p-3 hover:bg-sky-500 hover:text-white transition"
              to="profile"
            >
              پروفایل
            </Link>
          </li>
          <li>
            <button className="bg-slate-200 rounded-xl w-full block p-3 text-start hover:bg-sky-500 hover:text-white transition">
              خروج
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
