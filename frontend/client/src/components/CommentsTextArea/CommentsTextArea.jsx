export default function CommentsTextArea() {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-gray-900 dark:text-white">
        دیدگاهتان را بنویسید
      </span>
      <p className="text-gray-900 dark:text-zinc-300">
        با عنوان <span className="font-semibold">امیر خانجانی</span> وارد شده
        اید، خارج میشوید؟ بخش های مورد نیاز علامت گذاری شده اند*
      </p>
      <span className="text-gray-900 dark:text-zinc-400">دیدگاه*</span>
      <textarea
        cols="30"
        rows="10"
        className="border-2 border-slate-300 dark:bg-gray-800 dark:text-zinc-400 dark:border-2 dark:border-gray-600 rounded-md p-4 focus-visible:outline-none"
      ></textarea>
      <button className="py-1 px-2 rounded-md bg-sky-500 hover:bg-sky-600 transition w-2/4 lg:w-1/4 text-white">
        فرستادن دیدگاه
      </button>
    </div>
  );
}
