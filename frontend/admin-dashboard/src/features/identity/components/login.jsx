import logo from "@assets/images/tcod-logo-white.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <img
          src={logo}
          alt="logo"
          className="h-28 w-28 object-contain rounded-full shadow-md"
        />
        <h4 className="text-lg text-gray-700">THE CODE OF DUTY</h4>
        <p className="text-base text-gray-600">
          جهت ورود لازم است از طریق موبایل و رمز عبور خود اقدام کنید
        </p>
        <p className="text-sm text-gray-600">
          قبلا ثبت نام نکرده اید؟{" "}
          <Link to="/register" className="text-sky-500">
            ثبت نام کنید
          </Link>
        </p>
      </div>
      <form className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4 lg:w-[30%] md:w-2/4 sm:w-[70%] w-4/5">
        <div className="flex flex-col gap-1">
          <label className="text-start text-sm text-gray-600">موبایل</label>
          <input
            type="text"
            className="p-1 bg-slate-200 outline-none rounded-lg border-2 border-slate-300 focus:border-sky-500"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-start text-sm text-gray-600">رمز عبور</label>
          <input
            type="text"
            className="p-1 bg-slate-200 outline-none rounded-lg border-2 border-slate-300 focus:border-sky-500"
          />
        </div>
        <button className="p-2 bg-sky-500 rounded-lg text-white hover:bg-sky-600 transition">
          وارد شوید
        </button>
      </form>
    </>
  );
};

export default Login;
