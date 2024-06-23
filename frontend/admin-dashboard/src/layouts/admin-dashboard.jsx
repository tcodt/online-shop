import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar/sidebar";
import { FaRegBell } from "react-icons/fa6";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const authInfo = useSelector((state) => state.authReducer);

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <SideBar />
        </div>
        <div className="col-span-10">
          <nav className="flex items-center justify-between p-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="جستجو..."
                className="p-1 rounded-lg bg-slate-200 outline-none border-2 focus-within:border-sky-500 focus-within:bg-white transition"
              />
              <FaRegBell className="text-gray-600 text-2xl" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base text-gray-600">{authInfo.user}</span>
              <img
                src="/images/user.png"
                alt="User Image"
                className="h-8 object-contain rounded-full"
              />
            </div>
          </nav>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
