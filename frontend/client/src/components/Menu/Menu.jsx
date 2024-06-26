import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

export default function Menu() {
  return (
    <div className="bg-white rounded-b-3xl p-4 shadow-md grid grid-cols-12 items-center gap-8">
      <div className="col-span-1 flex items-center justify-center gap-4">
        <img
          src="/images/tcod-logo-white.jpg"
          alt="Logo"
          className="h-16 object-contain"
        />
      </div>
      <div className="col-span-3">
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/" className="text-primary-dark font-semibold">
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link to="/" className="text-primary-dark font-semibold">
              محصولات
            </Link>
          </li>
          <li>
            <Link to="/" className="text-primary-dark font-semibold">
              ارتباط با ما
            </Link>
          </li>
          <li>
            <Link to="/" className="text-primary-dark font-semibold">
              درباره ما
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-8 grid grid-cols-12 items-center gap-8">
        <div className="flex items-center col-span-6">
          <button className="bg-primary-blue text-white p-2 rounded-s-xl h-[40px] ">
            <FiSearch className="text-xl" />
          </button>
          <input
            type="search"
            placeholder="جستجو..."
            className="bg-primary-light p-2 rounded-xl rounded-s-none outline-none text-gray-900 w-full h-[40px]"
          />
        </div>
        <div className="col-span-2">
          <div className="flex items-center gap-2">
            <p className="text-primary-dark text-base">علاقمندی</p>
            <FaRegHeart className="text-2xl text-primary-dark cursor-pointer" />
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="flex flex-col">
              <span className="text-base text-primary-dark">سبد خرید</span>
              <span className="text-sm text-primary-blue">0 تومان</span>
            </div>
            <div>
              <BsCart3 className="text-2xl text-primary-dark" />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div>
            <img
              src="/images/57.jpg"
              alt="User Profile"
              className="h-12 object-contain rounded-full border-2 border-primary-blue mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
