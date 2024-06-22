import SectionHeader from "../SectionHeader/SectionHeader";
import CourseBox from "../CourseBox/CourseBox";

export default function LastCourses() {
  return (
    <div className="container mx-auto">
      <SectionHeader
        title="جدیدترین دوره ها"
        desc="سکوی پرتاب شما به سمت موفقیت"
        btnTitle="تمامی دوره ها"
        btnHref="/courses"
      />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center dark:bg-gray-800 rounded-lg p-4">
          <CourseBox />
        </div>
      </div>
    </div>
  );
}
