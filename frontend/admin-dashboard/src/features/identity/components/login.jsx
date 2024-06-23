import logo from "@assets/images/tcod-logo-white.jpg";
import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../user-info/userInfoSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitFormHandler = (data) => {
    const infos = {
      phone: data.phoneFeild,
      password: data.passwordFeild,
    };

    axios
      .post("http://localhost:5000/api-v1/user/login", infos)
      .then((data) => {
        console.log(data);
        console.log(data.data);
        console.log(data.data.data.body);
        console.log(data.data.data.token);

        const userToken = data.data.data.token;
        const userData = data.data.data;

        if (userToken) {
          dispatch(getUserInfo(userData));
          navigate("/admin");
        }
      })
      .catch((err) => alert(err.response.data.message));
  };

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
          جهت ورود از طریق موبایل و رمز عبور خود اقدام کنید
        </p>
        {/* <p className="text-sm text-gray-600">
          قبلا ثبت نام نکرده اید؟{" "}
          <Link to="/register" className="text-sky-500">
            ثبت نام کنید
          </Link>
        </p> */}
      </div>
      <form
        onSubmit={handleSubmit(submitFormHandler)}
        className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4 lg:w-[30%] md:w-2/4 sm:w-[70%] w-4/5"
      >
        <div className="flex flex-col gap-1">
          <label className="text-start text-sm text-gray-600">موبایل</label>
          <input
            type="text"
            {...register("phoneFeild", {
              required: "شماره موبایل الزامی است",
              minLength: 11,
              maxLength: 11,
            })}
            className={`p-1 bg-slate-200 outline-none rounded-lg border-2 ${
              errors.phoneFeild
                ? "border-red-500"
                : "border-slate-300 focus-within:border-sky-500"
            }`}
          />
          {errors?.phoneFeild && errors?.phoneFeild?.type === "required" && (
            <p className="text-xs text-red-500 font-bold">
              {errors.phoneFeild.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-start text-sm text-gray-600">رمز عبور</label>
          <input
            type="password"
            {...register("passwordFeild", {
              required: "رمز عبور الزامی است",
            })}
            className={`p-1 bg-slate-200 outline-none rounded-lg border-2 ${
              errors.passwordFeild
                ? "border-red-500"
                : "border-slate-300 focus-within:border-sky-500"
            }`}
          />
          {errors?.passwordFeild &&
            errors?.passwordFeild?.type === "required" && (
              <p className="text-xs text-red-500 font-bold">
                {errors.passwordFeild.message}
              </p>
            )}
        </div>
        <button className="p-2 bg-sky-500 rounded-lg text-white hover:bg-sky-600 transition">
          وارد شوید
        </button>
      </form>
    </>
  );
};

export default Login;
