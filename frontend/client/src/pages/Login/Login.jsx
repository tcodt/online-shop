import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
// import TopBar from "../../components/TopBar/TopBar";
import {
  PiLockKeyOpenDuotone,
  PiSealWarningDuotone,
  PiWarningDuotone,
  PiPhoneDuotone,
  PiEnvelopeSimpleDuotone,
} from "react-icons/pi";

import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import SharedDataContext from "../../Contexts/SharedDataProvider";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();

  const { login } = useContext(SharedDataContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userLoginHandler = (data) => {
    setIsLoading(true);

    const userData = {
      email: data.registerEmail,
      phone: data.registerPhone,
      password: data.passwordField,
    };

    console.log(userData);

    axios
      .post("http://localhost:5000/api-v1/user/login", userData)
      .then((res) => {
        toast.success("ورود با موفقیت انجام شد");

        const userInfos = res.data.data.body;
        const token = res.data.data.token;

        login(userInfos, token);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });

    setIsLoading(false);
  };

  return (
    <div className="dark:bg-gray-700">
      <Toaster />
      {/* <TopBar /> */}
      <NavBar />

      <div className="container mx-auto p-4 flex justify-center items-center">
        <div
          className="bg-slate-200 dark:bg-gray-800 border-s-4 border-sky-500 p-4 shadow-md rounded-md w-full md:w-2/5 flex flex-col gap-3 z-20"
          id="login_bg"
        >
          <h4 className="text-lg text-gray-700 dark:text-white font-semibold text-center">
            ورود به حساب کاربری
          </h4>
          <p className="text-base text-gray-600 dark:text-zinc-400 text-center">
            خوشحالیم که دوباره میبینیمت دوست عزیز 😊
          </p>
          <div className="bg-slate-300 dark:bg-gray-900 p-2 rounded-md flex gap-2 items-center justify-center">
            <span className="text-base text-gray-700 dark:text-white">
              کاربر جدید هستید؟
            </span>
            <Link to="/register">
              <button className="py-1 px-2 bg-slate-400 dark:bg-gray-950 rounded-md text-white shadow transition hover:shadow-sky-500">
                ثبت نام
              </button>
            </Link>
          </div>
          <form
            onSubmit={handleSubmit(userLoginHandler)}
            className="flex flex-col gap-4 mt-4"
          >
            <div className="relative">
              <Input
                type="email"
                placeholder="آدرس ایمیل"
                className=" bg-white dark:bg-gray-900 dark:border-2 dark:border-gray-700 dark:text-zinc-300 rounded-md p-2 focus-visible:outline-none w-full border border-slate-300 text-gray-500 font-semibold"
                register={register}
                name="registerEmail"
                errors={errors}
                element="emailInput"
              />
              <PiEnvelopeSimpleDuotone className="absolute top-3 left-2 text-2xl text-gray-500" />
            </div>
            {errors.registerEmail &&
              errors.registerEmail.type === "required" && (
                <>
                  <p className="flex items-center gap-2 text-base text-red-500">
                    <PiSealWarningDuotone className="text-red-500 text-2xl" />{" "}
                    ایمیل اجباری است !
                  </p>
                </>
              )}
            {errors.registerEmail &&
              errors.registerEmail.type === "minLength" && (
                <>
                  <p className="flex items-center gap-2 text-base text-gray-500 dark:text-zinc-400">
                    <PiWarningDuotone className="text-yellow-500 text-2xl" />{" "}
                    ایمیل باید بیشتر از 8 کاراکتر باشد !
                  </p>
                </>
              )}
            {errors.registerEmail &&
              errors.registerEmail.type === "maxLength" && (
                <>
                  <p className="flex items-center gap-2 text-base text-gray-500 dark:text-zinc-400">
                    <PiWarningDuotone className="text-yellow-500 text-2xl" />{" "}
                    ایمیل باید کمتر از 35 کاراکتر باشد !
                  </p>
                </>
              )}
            {errors.registerEmail &&
              errors.registerEmail.type === "validate" && (
                <>
                  <p className="flex items-center gap-2 text-base text-gray-500 dark:text-zinc-400">
                    <PiWarningDuotone className="text-yellow-500 text-2xl" />{" "}
                    ایمیل معتبر وارد کنید !
                  </p>
                </>
              )}

            <div className="relative">
              <Input
                type="tel"
                placeholder="شماره همراه"
                className=" bg-white dark:bg-gray-900 dark:border-2 dark:border-gray-700 dark:text-zinc-300 rounded-md p-2 focus-visible:outline-none w-full border border-slate-300 text-gray-500 font-semibold"
                register={register}
                name="registerPhone"
                errors={errors}
                element="phoneInput"
              />
              <PiPhoneDuotone className="absolute top-3 left-2 text-2xl text-gray-500" />
            </div>
            {errors.registerPhone &&
              errors.registerPhone.type === "required" && (
                <>
                  <p className="flex items-center gap-2 text-base text-red-500">
                    <PiSealWarningDuotone className="text-red-500 text-2xl" />{" "}
                    شماره همراه اجباری است !
                  </p>
                </>
              )}
            {errors.registerPhone &&
              errors.registerPhone.type === "minLength" && (
                <>
                  <p className="flex items-center gap-2 text-base text-gray-500 dark:text-zinc-400">
                    <PiWarningDuotone className="text-yellow-500 text-2xl" />{" "}
                    شماره همراه باید 11 عدد باشد !
                  </p>
                </>
              )}
            {errors.registerPhone &&
              errors.registerPhone.type === "maxLength" && (
                <>
                  <p className="flex items-center gap-2 text-base text-gray-500 dark:text-zinc-400">
                    <PiWarningDuotone className="text-yellow-500 text-2xl" />{" "}
                    شماره همراه باید 11 عدد باشد !
                  </p>
                </>
              )}
            {errors.registerPhone &&
              errors.registerPhone.type === "validate" && (
                <>
                  <p className="flex items-center gap-2 text-base text-gray-500">
                    <PiWarningDuotone className="text-yellow-500 text-2xl" />{" "}
                    شماره همراه معتبر وارد کنید !
                  </p>
                </>
              )}
            <div className="relative">
              <Input
                type="password"
                placeholder="رمز عبور"
                className=" bg-white dark:bg-gray-900 dark:border-2 dark:border-gray-700 dark:text-zinc-300 rounded-md p-2 focus-visible:outline-none w-full border border-slate-300 text-gray-500 font-semibold"
                register={register}
                name="passwordField"
                element="passwordInput"
              />
              <PiLockKeyOpenDuotone className="absolute top-3 left-2 text-2xl text-gray-500" />
            </div>
            {errors.passwordField &&
              errors.passwordField.type === "required" && (
                <>
                  <p className="flex items-center gap-2 text-base text-red-500">
                    <PiSealWarningDuotone className="text-red-500 text-2xl" />{" "}
                    رمز عبور اجباری است !
                  </p>
                </>
              )}
            {errors.passwordField &&
              errors.passwordField.type === "minLength" && (
                <>
                  <p className="flex items-center gap-2 text-base text-gray-500 dark:text-zinc-400">
                    <PiWarningDuotone className="text-yellow-500 text-2xl" />{" "}
                    رمز عبور باید بیشتر از 8 کاراکتر باشد !
                  </p>
                </>
              )}
            {errors.passwordField &&
              errors.passwordField.type === "maxLength" && (
                <>
                  <p className="flex items-center gap-2 text-base text-gray-500 dark:text-zinc-400">
                    <PiWarningDuotone className="text-yellow-500 text-2xl" />{" "}
                    رمز عبور باید کمتر از 18 کاراکتر باشد !
                  </p>
                </>
              )}
            {errors.passwordField &&
              errors.passwordField.type === "validate" && (
                <>
                  <p className="flex items-center gap-2 text-base text-gray-500 dark:text-zinc-400">
                    <PiWarningDuotone className="text-yellow-500 text-2xl" />{" "}
                    رمز عبور را بدون فاصله وارد کنید !
                  </p>
                </>
              )}

            <Button
              className="w-full bg-sky-500 text-white h-10 rounded-md hover:bg-sky-600 transition"
              type="submit"
              disabled={false}
              onClick={handleSubmit(userLoginHandler)}
            >
              {isLoading ? "در حال بارگذاری..." : "ورود"}
            </Button>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="check" />
                <label
                  htmlFor="check"
                  className="text-base text-gray-600 dark:text-zinc-300"
                >
                  مرا به خاطر داشته باش
                </label>
              </div>
              <a
                href="#"
                className="text-base text-gray-700 dark:text-zinc-300 hover:text-sky-500 transition"
              >
                رمز عبور را فراموش کرده اید؟
              </a>
            </div>
          </form>
          <div className="mt-8">
            <h5 className="text-base text-gray-700 dark:text-zinc-300">
              درود کاربر محترم:
            </h5>
            <ul className="list-disc ms-4 mt-2">
              <li className="text-base text-gray-500 dark:text-zinc-400">
                لطفا از مرورگرهای مطمئن وبروز مانند گوگل کروم و فایرفاکس استفاده
                کنید.
              </li>
              <li className="text-base text-gray-500 dark:text-zinc-400">
                ما هرگز اطلاعات محرمانه شما را از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className="text-base text-gray-500 dark:text-zinc-400">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
