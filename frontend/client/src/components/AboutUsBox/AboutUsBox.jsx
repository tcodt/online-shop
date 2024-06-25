// eslint-disable-next-line react/prop-types
export default function AboutUsBox({ title, desc, icon }) {
  return (
    <div className="bg-slate-200 rounded-md p-4 shadow-sm dark:bg-gray-800">
      <div className="flex items-center gap-4">
        <div className="text-4xl">{icon}</div>
        <div>
          <h4 className="text-gray-700 font-semibold dark:text-white">
            {title}
          </h4>
          <p className="text-gray-600 font-normal text-base dark:text-zinc-300">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
