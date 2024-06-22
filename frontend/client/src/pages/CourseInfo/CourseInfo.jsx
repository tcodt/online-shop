// import TopBar from "../../components/TopBar/TopBar";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import CourseDetailBox from "../../components/CourseDetailBox/CourseDetailBox";
import CourseData from "../../CourseData.json";

import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

import {
  PiGraduationCapDuotone,
  PiAlarmDuotone,
  PiCalendarDuotone,
  PiUserDuotone,
  PiInfoDuotone,
  PiMonitorPlayDuotone,
  PiChartLineDuotone,
  PiChalkboardTeacherDuotone,
  PiBookOpenTextDuotone,
  PiCaretDownBold,
} from "react-icons/pi";

import "./CourseInfo.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import CourseAside from "../../components/CourseAside/CourseAside";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import CommentsTextArea from "../../components/CommentsTextArea/CommentsTextArea";

export default function CourseInfo() {
  const params = useParams();
  const [courseData, setCourseData] = useState(CourseData);

  useEffect(() => {
    // console.log(params);
    // console.log(courseData);

    window.scrollTo(0, 0);

    if (courseData && courseData.length > 0) {
      const mainCourse = courseData.find(
        (course) => course.id == params.courseName
      );
      setCourseData(mainCourse);
    }
  }, [params, courseData]);

  return (
    <div className="dark:bg-gray-600">
      {/* <TopBar /> */}
      <NavBar />
      <BreadCrumb
        links={[
          { id: 1, title: "خانه", to: "/" },
          {
            id: 2,
            title: "آموزش برنامه نویسی فرانت اند",
            to: "/category-info/frontend",
          },
          {
            id: 3,
            title: "دوره متخصص جاوا اسکریپت",
            to: "/course-info/js-expert",
          },
        ]}
      />
      <section className="container mx-auto my-4 p-4 lg:p-0">
        <div className="md:flex lg:flex items-center bg-slate-200 dark:bg-gray-700 p-4 rounded-md shadow-md">
          <div className="flex flex-col gap-8 flex-1 me-2 mb-4 lg:mb-0">
            <Link
              to={`/category-info/frontend`}
              className="font-semibold p-2 bg-sky-200 rounded-md text-sky-700 text-sm"
              style={{ width: "fit-content" }}
            >
              {courseData.courseCategory}
            </Link>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {courseData.title}
            </h3>
            <p className="text-base text-gray-600 dark:text-zinc-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد
            </p>
            <div className="flex justify-between">
              {/* Price */}
              {/* <span>{courseData.price}</span> */}
              {/* Price */}
              <button className="py-2 px-3 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition flex items-center gap-2">
                <PiBookOpenTextDuotone className="text-3xl" /> مشاهده دوره
              </button>
            </div>
            <div className="flex">
              <a
                href="#"
                className="text-2xl text-gray-400 mx-4 hover:text-blue-600 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-2xl text-gray-400 mx-4 hover:text-black transition"
              >
                <FaSquareXTwitter />
              </a>
              <a
                href="#"
                className="text-2xl text-gray-400 mx-4 hover:text-sky-400 transition"
              >
                <FaTelegram />
              </a>
            </div>
          </div>
          <div className="ms-2 flex-1">
            <img
              src={courseData.image}
              alt="Course Image"
              className="rounded-md w-full h-96 object-fill"
            />
          </div>
        </div>
      </section>
      <section className="my-4">
        <div className="container mx-auto p-4 lg:p-0 grid grid-cols-3 gap-4 relative">
          <div className="grid lg:grid-cols-3 grid-cols-2 col-span-3 lg:col-span-2 gap-4">
            <CourseDetailBox
              title="وضعیت دوره"
              text={courseData.courseStatus ? "تکمیل شده" : "درحال برگزاری"}
              icon={<PiGraduationCapDuotone />}
            />
            <CourseDetailBox
              title="مدت زمان دوره"
              text={`${courseData.courseTime} ساعت`}
              icon={<PiAlarmDuotone />}
            />
            <CourseDetailBox
              title="آخرین بروزرسانی"
              text={courseData.courseUpdate}
              icon={<PiCalendarDuotone />}
            />
            <CourseDetailBox
              title="روش پشتیبانی"
              text="آنلاین"
              icon={<PiUserDuotone />}
            />
            <CourseDetailBox
              title="پیش نیاز"
              text={courseData.coursePrerequisit}
              icon={<PiInfoDuotone />}
            />
            <CourseDetailBox
              title="نوع مشاهده"
              text="ظبط شده / آنلاین"
              icon={<PiMonitorPlayDuotone />}
            />
            <div className="bg-slate-300 dark:bg-gray-700 p-2 rounded-md shadow-md mt-4 col-span-full">
              <div className="flex items-center gap-1 mb-2">
                <PiChartLineDuotone className="text-sky-500 text-3xl" />
                <p className="text-base text-gray-700 dark:text-zinc-200">
                  درصد پیشرفت دوره: 50%
                </p>
              </div>
              <div className="bg-slate-200 rounded-full h-3 w-full">
                <span className="bg-sky-500 rounded-full h-3 w-2/4 block"></span>
              </div>
            </div>
          </div>
          <CourseAside
            courseView={courseData.courseView}
            courseComments={courseData.courseComments}
            courseStudent={courseData.student}
          />
          <article className="p-4 bg-slate-200 dark:bg-gray-700 rounded-md shadow-md col-span-3 lg:col-span-2 mt-4">
            <div>
              <SectionHeader title={courseData.title} />
              <img
                src="/images/js-course-article.png"
                alt="Coures Image"
                className="rounded-md shadow-sm w-full"
              />
              <div className="mt-4">
                <p className="text-base text-gray-600 dark:text-zinc-400">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                <p className="text-base text-gray-600 dark:text-zinc-400 mt-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </p>
              </div>
            </div>
            <div>
              <SectionHeader title="هدف از این دوره چیست؟ (تنها راه ورود به بازار کار و کسب درآمد)" />
              <img
                src="/images/js-course-article-2.jpg"
                alt="Coures Image"
                className="rounded-md shadow-sm w-full"
              />
              <div className="mt-4">
                <p className="text-base text-gray-600 dark:text-zinc-400">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </p>
                <p className="text-base text-gray-600 dark:text-zinc-400 mt-4">
                  برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                  بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد
                  گذشته، حال و آینده
                </p>
                <p className="text-base text-gray-600 dark:text-zinc-400 mt-4">
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                  هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                  درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                  طلبد
                </p>
                <p className="text-base text-gray-600 dark:text-zinc-400 mt-4">
                  {" "}
                  در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
                <p className="text-base text-gray-600 dark:text-zinc-400 mt-4">
                  در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
                  نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-start gap-2 mt-4">
              <button className="py-1 px-2 border-2 border-sky-500 rounded-md text-sky-500 hover:text-white hover:bg-sky-500 transition">
                دانلود همگانی ویدیوها
              </button>
              <button className="py-1 px-2 border-2 border-sky-500 rounded-md text-sky-500 hover:text-white hover:bg-sky-500 transition">
                دانلود همگانی پیوست ها
              </button>
            </div>
            {/* Accordion */}
            <div className="flex flex-col gap-2 mt-4">
              <Accordion className="dark:bg-gray-800" defaultExpanded>
                <AccordionSummary
                  expandIcon={<PiCaretDownBold />}
                  id="panel-header"
                  aria-controls="panel-content"
                  className="font-semibold dark:text-white"
                >
                  معرفی دوره
                </AccordionSummary>
                <AccordionDetails className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full border border-slate-400 flex items-center justify-center text-gray-500 dark:text-zinc-400">
                        1
                      </div>
                      <PiMonitorPlayDuotone className="text-2xl text-sky-500" />
                      <a
                        href="#"
                        className="text-gray-600 dark:text-zinc-200 hover:text-sky-500 transition"
                      >
                        معرفی دوره + چرا یادگیری کتابخانه ضروری است؟
                      </a>
                    </div>
                    <span className="text-gray-500">18:34</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full border border-slate-400 flex items-center justify-center text-gray-500 dark:text-zinc-400">
                        2
                      </div>
                      <PiMonitorPlayDuotone className="text-2xl text-sky-500" />
                      <a
                        href="#"
                        className="text-gray-600 dark:text-zinc-200 hover:text-sky-500 transition"
                      >
                        مفاهیم اولیه و مهم!
                      </a>
                    </div>
                    <span className="text-gray-500">18:34</span>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion className="dark:bg-gray-800">
                <AccordionSummary
                  expandIcon={<PiCaretDownBold />}
                  id="panel-header"
                  aria-controls="panel-content"
                  className="font-semibold dark:text-white"
                >
                  اصطلاحات مقدماتی مربوط به بک اند
                </AccordionSummary>
                <AccordionDetails className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full border border-slate-400 flex items-center justify-center text-gray-500 dark:text-zinc-400">
                        1
                      </div>
                      <PiMonitorPlayDuotone className="text-2xl text-sky-500" />
                      <a
                        href="#"
                        className="text-gray-600 dark:text-zinc-300 hover:text-sky-500 transition"
                      >
                        معرفی دوره + چرا یادگیری کتابخانه ضروری است؟
                      </a>
                    </div>
                    <span className="text-gray-500">18:34</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full border border-slate-400 flex items-center justify-center text-gray-500 dark:text-zinc-400">
                        2
                      </div>
                      <PiMonitorPlayDuotone className="text-2xl text-sky-500" />
                      <a
                        href="#"
                        className="text-gray-600 dark:text-zinc-300 hover:text-sky-500 transition"
                      >
                        جلسه اول
                      </a>
                    </div>
                    <span className="text-gray-500">18:34</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full border border-slate-400 flex items-center justify-center text-gray-500 dark:text-zinc-400">
                        3
                      </div>
                      <PiMonitorPlayDuotone className="text-2xl text-sky-500" />
                      <a
                        href="#"
                        className="text-gray-600 dark:text-zinc-300 hover:text-sky-500 transition"
                      >
                        جلسه دوم
                      </a>
                    </div>
                    <span className="text-gray-500">18:34</span>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* Accordion */}
            <div className="flex flex-col gap-4 my-4 bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <img
                    src="/images/57.jpg"
                    alt="Teacher"
                    className="w-12 h-12 rounded-full border-2 border-sky-500"
                  />
                  <div className="flex flex-col gap-2">
                    <h5 className="text-base font-semibold dark:text-white">
                      رضا خانی
                    </h5>
                    <span className="text-xs text-gray-600 dark:text-zinc-400">
                      Front End & Back End Developer
                    </span>
                  </div>
                </div>
                <span className="flex items-center gap-2 text-gray-700 dark:text-zinc-300 border-b-2 border-sky-500">
                  <PiChalkboardTeacherDuotone className="text-3xl text-sky-500" />
                  مدرس
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-zinc-400 overflow-hidden text-ellipsis whitespace-nowrap w-full">
                در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز
                شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته شامل
                حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته
              </p>
            </div>
            <CommentsTextArea />
          </article>
        </div>
      </section>
      <Footer />
    </div>
  );
}
