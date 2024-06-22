import {
  PiBellDuotone,
  PiHouseLineDuotone,
  PiMoonDuotone,
  PiSunDimDuotone,
  PiUserDuotone,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import useModal from "../../hooks/useModal";

export default function DashboardNavBar() {
  const [showModal, modalContent, openModal, closeModal, modalContentRef] =
    useModal();

  // const username = JSON.parse(localStorage.getItem("name"));

  const [isDarkMode, toggleTheme] = useTheme();

  const openNotificationModal = () => {
    openModal(
      <>
        <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-zinc-100">
          اعلان ها
        </h2>
        <hr />
        <p className="text-base text-gray-600 bg-slate-200 dark:bg-slate-700 dark:text-zinc-400 p-4 rounded-lg mt-4">
          اعلان جدیدی وجود ندارد.
        </p>
      </>
    );
  };

  const openProfileModal = () => {
    openModal(
      <div>
        <div className="flex items-center gap-4">
          <button className="bg-slate-200 dark:bg-slate-500 rounded-full w-12 h-12 flex items-center justify-center hover:bg-slate-100 transition">
            <PiUserDuotone className="text-3xl text-gray-700 dark:text-zinc-100 hover:text-sky-500 transition" />
            {/* <img src="/images/user.png" alt="User Profile" /> */}
          </button>
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-gray-800 dark:text-zinc-100">
              {/* {username.name} */}
              Test
            </h2>
            <p className="text-base text-sky-600 dark:text-sky-400">
              موجودی: 0 تومان
            </p>
          </div>
        </div>
        <hr className="my-4" />
      </div>
    );
  };

  return (
    <div className="flex justify-between items-center my-12">
      <h3 className="text-2xl font-semibold text-gray-700 dark:text-zinc-100">
        Test عزیز؛ خوش اومدی 🙌
      </h3>
      <div className="flex gap-4 items-center">
        <button
          className="bg-slate-200 dark:bg-slate-600 rounded-full w-12 h-12 flex items-center justify-center hover:bg-slate-100 transition"
          onClick={openNotificationModal}
        >
          <PiBellDuotone className="text-3xl text-gray-700 dark:text-zinc-100 hover:text-sky-500 transition" />
        </button>

        {/* Dark Mode */}
        <button
          className={`bg-slate-200 dark:bg-slate-600 rounded-full w-12 h-12 flex items-center justify-center hover:bg-slate-100 transition-colors duration-300 ${
            isDarkMode
              ? "bg-gray-600 text-white hover:bg-gray-500"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={toggleTheme}
        >
          {isDarkMode ? (
            <PiSunDimDuotone className="text-3xl text-gray-700 dark:text-zinc-100 hover:text-sky-500 transition" />
          ) : (
            <PiMoonDuotone className="text-3xl text-gray-700 dark:text-zinc-100 hover:text-sky-500 transition" />
          )}
        </button>
        {/* Dark Mode */}

        <button
          className="bg-slate-200 dark:bg-slate-600 rounded-full w-12 h-12 flex items-center justify-center hover:bg-slate-100 transition"
          onClick={openProfileModal}
        >
          <PiUserDuotone className="text-3xl text-gray-700 dark:text-zinc-100 hover:text-sky-500 transition" />
          {/* <img src="/images/user.png" alt="User Profile" /> */}
        </button>

        <Link
          to="/"
          className="bg-slate-200 dark:bg-slate-600 rounded-full w-12 h-12 flex items-center justify-center hover:bg-slate-100 transition"
        >
          <PiHouseLineDuotone className="text-3xl text-gray-700 dark:text-zinc-100 hover:text-sky-500 transition" />
        </Link>

        {showModal && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10 animate-fade-in"
            onClick={closeModal}
          >
            <div
              className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-lg min-w-[300px] modal-content animate-slide-in"
              ref={modalContentRef}
            >
              {modalContent}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
