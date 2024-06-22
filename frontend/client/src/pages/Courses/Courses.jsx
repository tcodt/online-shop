import { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
// import TopBar from "../../components/TopBar/TopBar";
import CourseData from "../../CourseData.json";
import { FaChalkboardTeacher, FaStarHalfAlt } from "react-icons/fa";
import { FaArrowLeftLong, FaStar, FaUsers } from "react-icons/fa6";
import { PiArrowFatRightDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Courses() {
  const [courseData, setCourseData] = useState(CourseData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseData]);

  return (
    <>
      {/* <TopBar /> */}
      <NavBar />
      <BreadCrumb
        links={[
          { id: 1, title: "خانه", to: "/" },
          {
            id: 2,
            title: "تمامی دوره ها",
            to: "/courses",
          },
        ]}
      />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center p-4">
          {courseData.map((course) => (
            <div
              key={course.id}
              className="rounded-md shadow-md bg-slate-200 w-5/6 hover-handler"
            >
              <img
                src={course.image}
                alt="Course Image"
                className="h-56 w-full object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="font-semibold text-base text-gray-800">
                  {course.title}
                </h3>
                <div className="flex justify-between mt-4">
                  <span className="text-gray-700 text-base flex items-center">
                    <FaChalkboardTeacher className="text-xl text-sky-500" />
                    &nbsp;{course.teacher}
                  </span>
                  <span className="text-gray-700 text-base flex gap-1">
                    {course.rate === 5 ? (
                      <FaStar className="text-yellow-500" />
                    ) : (
                      <FaStarHalfAlt className="text-yellow-500" />
                    )}
                    {course.rate}
                  </span>
                </div>
                <div className="flex justify-between mt-4">
                  <span className="text-gray-700 text-base flex items-center">
                    <FaUsers className="text-xl text-sky-500" />
                    &nbsp;{course.student}
                  </span>
                  <span className="text-gray-800 text-base">
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
        </div>
        <div className="flex gap-2 justify-center">
          <button className="w-10 h-10 text-gray-600 hover:text-sky-500 transition focus-visible:outline-none">
            <PiArrowFatRightDuotone className="text-3xl" />
          </button>
          <button className="w-10 h-10 bg-sky-500 flex items-center justify-center hover:bg-sky-500 text-white transition rounded-md focus-visible:outline-none">
            1
          </button>
          <button className="w-10 h-10 bg-slate-300 flex items-center justify-center text-gray-800 hover:bg-sky-500 hover:text-white transition rounded-md focus-visible:outline-none">
            2
          </button>
          <button className="w-10 h-10 bg-slate-300 flex items-center justify-center text-gray-800 hover:bg-sky-500 hover:text-white transition rounded-md focus-visible:outline-none">
            3
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
