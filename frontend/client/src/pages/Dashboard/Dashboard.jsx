/* eslint-disable no-unused-vars */
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  PiChatsDuotone,
  PiDoorOpenDuotone,
  PiFolderOpenDuotone,
  PiHouseDuotone,
  PiUserDuotone,
} from "react-icons/pi";
import DashboardNavBar from "./DashboardNavBar";
import { useRef, useState } from "react";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const modalContentRef = useRef(null);
  const location = useLocation();
  const [isUserLoggedOut, setIsUserLoggedOut] = useState(false);

  let navigate = useNavigate();

  const openModal = () => {
    setShowModal(true);
  };

  const logoutHandler = () => {
    setIsUserLoggedOut(true);
    navigate("/");
    // localStorage.removeItem("name");
  };

  const closeModal = (e) => {
    if (!modalContentRef.current?.contains(e.target)) {
      setShowModal(false);
    }
  };

  return (
    <>
      <section className="flex gap-8 bg-slate-200 dark:bg-gray-600 p-8 h-screen">
        <aside className="w-1/4 bg-white dark:bg-gray-800 rounded-lg p-4">
          <div className="flex flex-col justify-center items-center gap-6">
            <Link to="/">
              <img
                src="/images/tcod-logo-white.jpg"
                className="h-40 object-contain rounded-2xl"
                alt="Logo"
              />
            </Link>
            <ul className="flex flex-col gap-4 w-full">
              <li className="w-full">
                <Link
                  to="my-account"
                  className="flex gap-2 items-center bg-slate-100 dark:bg-slate-600 dark:text-zinc-100 text-gray-700 text-lg focus-within:bg-sky-500 focus-within:text-white p-2 rounded-lg transition"
                >
                  <PiHouseDuotone className="text-2xl" /> پیشخوان
                </Link>
              </li>
              <li>
                <Link
                  to="courses"
                  className="flex gap-2 items-center bg-slate-100 dark:bg-slate-600 dark:text-zinc-100 text-gray-700 text-lg focus-within:bg-sky-500 focus-within:text-white p-2 rounded-lg transition"
                >
                  <PiFolderOpenDuotone className="text-2xl" /> دوره های من
                </Link>
              </li>
              <li>
                <Link
                  to="tickets"
                  className="flex gap-2 items-center bg-slate-100 dark:bg-slate-600 dark:text-zinc-100 text-gray-700 text-lg focus-within:bg-sky-500 focus-within:text-white p-2 rounded-lg transition"
                >
                  <PiChatsDuotone className="text-2xl" /> تیکت ها
                </Link>
              </li>
              <li>
                <Link
                  to="edit-account"
                  className="flex gap-2 items-center bg-slate-100 dark:bg-slate-600 dark:text-zinc-100 text-gray-700 text-lg focus-within:bg-sky-500 focus-within:text-white p-2 rounded-lg transition"
                >
                  <PiUserDuotone className="text-2xl" /> جزئیات حساب
                </Link>
              </li>
              <li>
                <button
                  className="flex gap-2 items-center bg-slate-100 dark:bg-slate-600 dark:text-zinc-100 text-gray-700 text-lg focus-within:bg-red-500 focus-within:text-white p-2 rounded-lg w-full transition"
                  onClick={openModal}
                >
                  <PiDoorOpenDuotone className="text-2xl" /> خروج
                </button>

                {showModal && (
                  <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10 animate-fade-in"
                    onClick={closeModal}
                  >
                    <div
                      className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-lg min-w-[300px] modal-content animate-slide-in"
                      ref={modalContentRef}
                    >
                      <h2 className="text-lg dark:text-white font-bold mb-4">
                        آیا میخواهید از حساب خود خارج شوید؟
                      </h2>
                      <div className="bg-white dark:bg-slate-600 rounded-lg p-4 flex items-center gap-4">
                        <button
                          className="bg-green-500 hover:bg-green-600 text-white rounded-lg p-2 flex-1 transition"
                          onClick={logoutHandler}
                        >
                          بله
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 flex-1 transition"
                          onClick={() => setShowModal(false)}
                        >
                          خیر
                        </button>
                      </div>
                      {/* Add any additional content or functionality inside the modal */}
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </aside>
        <div className="bg-white dark:bg-gray-800 rounded-lg w-full custom-scrollbar">
          <div className="flex flex-col gap-6 p-6">
            <DashboardNavBar />
            {location.pathname === "/dashboard" && (
              <img
                src="/images/dashboard-1.gif"
                alt="Dashboard Gif"
                className="dark:rounded-xl"
                style={{ height: "500px", width: "500px", margin: "0 auto" }}
              />
            )}

            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}
