// eslint-disable-next-line react/prop-types
export default function CourseDetailBox({ title, text, icon }) {
  return (
    <>
      <div className="bg-slate-200 dark:bg-gray-700 shadow-md w-full p-4 rounded-md">
        <div className="flex items-center">
          <div className="text-4xl text-sky-500 me-2">{icon}</div>
          <div className="flex flex-col">
            <span className="text-gray-700 dark:text-zinc-300">{title}:</span>
            <span className="text-gray-800 dark:text-zinc-200">{text}</span>
          </div>
        </div>
      </div>
    </>
  );
}
