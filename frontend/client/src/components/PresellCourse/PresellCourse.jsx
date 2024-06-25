import SectionHeader from "../SectionHeader/SectionHeader";
// import CourseBox from "../CourseBox/CourseBox";

export default function PresellCourse() {
  return (
    <div className="container mx-auto">
      <SectionHeader
        title="دوره های پیش فروش"
        desc="دوره های در حال عرضه به شما"
      />
      {/* <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center p-4">
          <CourseBox />
        </div>
      </div> */}
    </div>
  );
}
