import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideBar from "../components/sidebar/sidebar";
import { FaRegBell } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { loginUser } from "../features/user-slice/user-slice";

const AdminDashboard = () => {
  const selectUser = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  console.log(selectUser);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    console.log(localStorageData);

    if (pathname === "/") {
      return;
    }
    if (!selectUser.isLoggin) {
      axios
        .get("http://localhost:5000/api-v1/user/admin")
        .then((res) => {
          console.log(res);
          dispatch(loginUser(res.data));
        })
        .catch((err) => {
          // navigate("/");
          console.log(err);
        });
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-2">
          <SideBar />
        </div>
        <div className="col-span-10">
          <nav className="flex items-center justify-between p-2 sticky">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="جستجو..."
                className="p-1 rounded-lg bg-slate-200 shadow-sm outline-none border-2 focus-within:border-sky-500 focus-within:bg-white transition"
              />
              <FaRegBell className="text-gray-600 text-2xl" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base text-gray-600">{selectUser.name}</span>
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
