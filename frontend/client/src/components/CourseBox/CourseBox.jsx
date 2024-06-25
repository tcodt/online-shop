import { useState } from "react";
import CourseData from "../../CourseData.json";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUsers, FaArrowLeftLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

import "./CourseBox.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function CourseBox() {
  // eslint-disable-next-line no-unused-vars
  const [allCourses, setAllCourses] = useState(CourseData);
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const imgLoadHandler = () => setIsImgLoaded(true);

  return (
    <>
      {allCourses.map((course) => (
        <div
          key={course.id}
          className="rounded-md shadow-md bg-slate-200 w-5/6 relative hover-handler dark:border-2 dark:border-gray-600"
        >
          <img
            src={course.image}
            alt="Course Image"
            className="h-56 w-full object-cover rounded-t-md dark:rounded"
            onLoad={imgLoadHandler}
          />
          {!isImgLoaded && <Loader />}
          <div className="p-4 dark:bg-gray-600">
            <h3 className="font-semibold text-base text-gray-800 dark:text-white">
              {course.title}
            </h3>
            <div className="flex justify-between mt-4">
              <span className="text-gray-700 text-base flex items-center dark:text-zinc-300">
                <FaChalkboardTeacher className="text-xl text-sky-500" />
                &nbsp;{course.teacher}
              </span>
              <span className="text-gray-700 text-base flex gap-1 dark:text-zinc-300">
                {course.rate === 5 ? (
                  <FaStar className="text-yellow-500" />
                ) : (
                  <FaStarHalfAlt className="text-yellow-500" />
                )}
                {course.rate}
              </span>
            </div>
            <div className="flex justify-between mt-4">
              <span className="text-gray-700 text-base flex items-center dark:text-zinc-300">
                <FaUsers className="text-xl text-sky-500" />
                &nbsp;{course.student}
              </span>
              <span className="text-gray-800 text-base dark:text-zinc-300">
                {course.price.toLocaleString("fa")} تومان
              </span>
            </div>
            <Link to={`/course-info/${course.id}`}>
              <button className="mt-4 w-full text-sky-500 border-t-2 border-slate-300 pt-4 hover:text-sky-600 transition flex items-center justify-center">
                مشاهده اطلاعات&nbsp;
                <FaArrowLeftLong className="text-xl" />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
