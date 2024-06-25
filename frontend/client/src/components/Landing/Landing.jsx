import { IoSearch } from "react-icons/io5";
import Typewriter from "typewriter-effect";

import "./Landing.css";
import LandingCounter from "../LandingCounter/LandingCounter";
import {
  PiBookOpenTextDuotone,
  PiClockCountdownDuotone,
  PiStudentDuotone,
} from "react-icons/pi";
import useTheme from "../../hooks/useTheme";

export default function Landing() {
  const [isDarkMode] = useTheme();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="bg-slate-100 dark:bg-gray-800 relative z-20 overflow-hidden">
      <span className="absolute top-0 right-[10%] text-[400px] text-white custom-animation dark:text-opacity-5 -z-10">
        TCOD
      </span>
      <div className="w-full p-12">
        <div className="flex items-center justify-center flex-col gap-12">
          <div className="text-center">
            <h2 className="font-semibold text-gray-900 mb-4">
              <Typewriter
                className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      `<span style='color: white'>گروه برنامه نویسی کد وظیفه در خدمت شماست !</span>`
                    )
                    .start()
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(
                      `<span style='color: white'>TCOD - گروه کد وظیفه آماده برای ساختن دنیایی مدرن</span>`
                    )
                    .start()
                    .pauseFor(2000);
                }}
                options={{
                  loop: true,
                }}
              />
            </h2>
            <p className="text-lg text-gray-700 dark:text-zinc-300">
              با ما همیشه و همه جا با خیال راحت پیشرفت کنید
            </p>
          </div>
          <div className="w-full lg:w-2/4">
            <form onSubmit={submitHandler}>
              <div className="flex gap-2">
                <input
                  className="text-sm w-full h-12 p-4 rounded-md outline-none bg-white shadow-sm text-gray-700 font-semibold"
                  type="text"
                  placeholder="چه چیزی دوست داری بگیری..."
                />
                <button className="text-xl bg-sky-500 hover:bg-sky-600 transition rounded-md text-white py-2 px-3 shadow-sm">
                  <IoSearch />
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-between items-center w-full lg:w-2/5">
            <div className="flex flex-col items-center gap-4">
              <PiStudentDuotone className="text-5xl text-sky-500" />
              <LandingCounter count={3345} />
              <p className="text-base text-gray-700 dark:text-zinc-300">
                کاربر
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <PiBookOpenTextDuotone className="text-5xl text-sky-500" />
              <LandingCounter count={123} />
              <p className="text-base text-gray-700 dark:text-zinc-300">
                دوره آموزشی
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <PiClockCountdownDuotone className="text-5xl text-sky-500" />
              <LandingCounter count={4990} />
              <p className="text-base text-gray-700 dark:text-zinc-300">
                دقیقه آموزش
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
