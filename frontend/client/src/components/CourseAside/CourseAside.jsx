/* eslint-disable react/prop-types */
import CourseData from "../../CourseData.json";
import {
  PiGraduationCapDuotone,
  PiStudentDuotone,
  PiChatsCircleDuotone,
  PiEyeDuotone,
  PiLinkDuotone,
} from "react-icons/pi";

export default function CourseAside({
  courseView,
  courseComments,
  courseStudent,
}) {
  return (
    <aside className="bg-slate-200 dark:bg-gray-700 p-4 rounded-md shadow-md hidden lg:flex flex-col gap-4 absolute left-0">
      <div className="bg-white rounded-md dark:bg-gray-800 p-2 shadow-sm">
        <span className="flex items-center justify-center gap-2 text-gray-700 dark:text-white">
          <PiGraduationCapDuotone className="text-3xl text-sky-500" /> شما
          دانشجوی دوره هستید
        </span>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-md p-2 shadow-sm flex flex-col gap-4">
        <div className="border-2 border-slate-300 dark:border-2 dark:border-gray-700 rounded-md p-2">
          <span className="flex items-center justify-center gap-2 text-base text-gray-700 dark:text-zinc-200">
            <PiStudentDuotone className="text-3xl text-sky-500" />
            تعداد دانشجو:
            <span className="bg-sky-500 py-1 px-2 rounded-md text-white">
              {courseStudent}
            </span>
          </span>
        </div>
        <div className="flex gap-2 justify-center">
          <span className="border-e-2 border-slate-300 pe-2 text-gray-600 flex items-center gap-2 dark:text-zinc-300">
            <PiChatsCircleDuotone className="text-2xl text-sky-500" />{" "}
            {courseComments}
          </span>
          <span className="text-gray-600 flex items-center gap-2 dark:text-zinc-300">
            <PiEyeDuotone className="text-2xl text-sky-500" /> {courseView}
          </span>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-md p-2 shadow-sm flex flex-col gap-2">
        <span className="text-lg text-gray-800 flex items-center gap-2 dark:text-white">
          <PiLinkDuotone className="text-2xl text-sky-500" /> لینک کوتاه
        </span>
        <p className="p-2 bg-slate-100 dark:bg-gray-900 dark:border-2 dark:border-gray-700 border-2 border-slate-300 text-gray-500 cursor-copy rounded-md">
          https://tcodweb.com/?p=117472
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-md p-2 shadow-sm flex flex-col gap-2">
        <span className="text-lg text-gray-800 dark:text-white">
          سرفصل های دوره
        </span>
        <p className="text-gray-600 dark:text-zinc-300">
          برای مشاهده و یا دانلود دوره روی کلمه{" "}
          <a href="#" className="text-sky-500">
            لینک
          </a>{" "}
          کلیک کنید
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-md p-2 shadow-sm flex flex-col gap-2">
        <span className="text-lg text-gray-800">دوره های مرتبط</span>
        <ul className="flex flex-col gap-4">
          {CourseData.map((course) => (
            <li key={course.id} className="flex gap-2 items-center">
              <img
                src={course.image}
                alt="Course Image"
                className="w-20 h-12 rounded-md hover:rounded-xl transition"
              />
              <a
                href="#"
                className="text-gray-600 dark:text-zinc-300 text-sm hover:text-sky-500 transition"
              >
                {course.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
