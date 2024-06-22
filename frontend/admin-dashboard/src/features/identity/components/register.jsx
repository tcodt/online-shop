import logo from "@assets/images/tcod-logo-white.jpg";
import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
          جهت استفاده از ویژگی های داشبورد لطفا ثبت نام کنید
        </p>
        {/* <p className="text-sm text-gray-600">
          قبلا ثبت نام کرده اید؟{" "}
          <Link to="/login" className="text-sky-500">
            وارد شوید
          </Link>
        </p> */}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4 lg:w-[30%] md:w-2/4 sm:w-[70%] w-4/5"
      >
        <div className="flex flex-col gap-1">
          <label className="text-start text-sm text-gray-600 font-semibold">
            نام کاربری
          </label>
          <input
            type="text"
            {...register("username", {
              required: "نام کاربری الزامی است",
              minLength: 4,
              maxLength: 18,
            })}
            className={`p-1 bg-slate-200 outline-none rounded-lg border-2 ${
              errors.username
                ? "border-red-500"
                : "border-slate-300 focus-within:border-sky-500"
            }`}
          />
          {errors.username && errors.username.type === "required" && (
            <p className="text-xs text-red-500 font-bold">
              {errors.username?.message}
            </p>
          )}
          {(errors.username && errors.username.type === "minLength") ||
            (errors.username && errors.username.type === "maxLength" && (
              <p className="text-xs text-red-500 font-bold">
                نام کاربری باید بیشتر از 4 و کمتر از 18 کاراکتر باشد
              </p>
            ))}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-start text-sm text-gray-600 font-semibold">
            موبایل
          </label>
          <input
            type="text"
            {...register("number", {
              required: "شماره موبایل الزامی است",
              minLength: 11,
              maxLength: 11,
            })}
            className={`p-1 bg-slate-200 outline-none rounded-lg border-2 ${
              errors.number
                ? "border-red-500"
                : "border-slate-300 focus-within:border-sky-500"
            }`}
          />
          {errors.number && errors.number.type === "required" && (
            <p className="text-xs text-red-500 font-bold">
              {errors.number?.message}
            </p>
          )}
          {(errors.number && errors.number.type === "minLength") ||
            (errors.number && errors.number.type === "maxLength" && (
              <p className="text-xs text-red-500 font-bold">
                شماره موبایل باید 11 رقم باشد
              </p>
            ))}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-start text-sm text-gray-600 font-semibold">
            رمز عبور
          </label>
          <input
            type="password"
            {...register("password", {
              required: "رمز عبور الزامی است",
              minLength: 8,
              maxLength: 18,
            })}
            className={`p-1 bg-slate-200 outline-none rounded-lg border-2 ${
              errors.password
                ? "border-red-500"
                : "border-slate-300 focus-within:border-sky-500"
            }`}
          />
          {errors.password && errors.password.type === "required" && (
            <p className="text-xs text-red-500 font-bold">
              {errors.password?.message}
            </p>
          )}
          {(errors.password && errors.password.type === "minLength") ||
            (errors.password && errors.password.type === "maxLength" && (
              <p className="text-xs text-red-500 font-bold">
                رمز عبور باید بیشتر از 8 و کمتر از 18 کاراکتر باشد
              </p>
            ))}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-start text-sm text-gray-600 font-semibold">
            تکرار رمز عبور
          </label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "تکرار رمز عبور الزامی است",
              validate: (value) => {
                if (watch("password") !== value) {
                  return "عدم تطابق با رمز وارد شده";
                }
              },
            })}
            className={`p-1 bg-slate-200 outline-none rounded-lg border-2 ${
              errors.confirmPassword
                ? "border-red-500"
                : "border-slate-300 focus-within:border-sky-500"
            }`}
          />
          {errors.confirmPassword &&
            errors.confirmPassword.type === "required" && (
              <p className="text-xs text-red-500 font-bold">
                {errors.confirmPassword?.message}
              </p>
            )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === "validate" && (
              <p className="text-xs text-red-500 font-bold">
                {errors.confirmPassword?.message}
              </p>
            )}
        </div>
        <button className="p-2 bg-sky-500 rounded-lg text-white hover:bg-sky-600 transition">
          ثبت نام کنید
        </button>
      </form>
    </>
  );
};

export default Register;
