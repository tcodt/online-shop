import PopularArticles from "../../PopularArticles.json";
import NewArticles from "../../NewArticles.json";

import { PiCaretLeftDuotone } from "react-icons/pi";
import MenuItems from "../MenuItems/MenuItems";
import { useState } from "react";

export default function ArticleAside() {
  // eslint-disable-next-line no-unused-vars
  const [subMenu, setSubMenu] = useState(false);
  const [newCourseData, setNewCourseData] = useState(NewArticles);

  return (
    <aside className="bg-slate-200 p-4 rounded-md shadow-md flex flex-col gap-4 absolute left-0">
      {/* Popular Articles */}
      <div className="bg-white rounded-md p-2 shadow-sm flex flex-col gap-2">
        <span className="text-lg text-gray-800 flex items-center">
          <PiCaretLeftDuotone className="text-sky-500" />
          مقاله های مرتبط
        </span>
        <ul className="flex flex-col gap-4">
          {PopularArticles.map((article) => (
            <li key={article.id} className="flex gap-2 items-center">
              <img
                src={article.cover}
                alt="article Image"
                className="w-20 h-12 rounded-md hover:rounded-xl transition"
              />
              <a
                href="#"
                className="text-gray-600 text-sm hover:text-sky-500 transition"
              >
                {article.title}
              </a>
            </li>
          ))}
          {/* {PopularArticles.map((art) => console.log(art))} */}
        </ul>
      </div>
      {/* Popular Articles */}

      {/* Fast Access */}
      <div className="bg-white rounded-md p-2 shadow-sm">
        <span className="text-lg text-gray-800 flex items-center">
          <PiCaretLeftDuotone className="text-sky-500" />
          دسترسی سریع
        </span>

        <MenuItems hideSubMenu={subMenu} />
      </div>
      {/* Fast Access */}

      <div className="bg-white rounded-md p-2 shadow-sm flex flex-col gap-4">
        <span className="text-lg text-gray-800 flex items-center">
          <PiCaretLeftDuotone className="text-sky-500" />
          مقاله های جدید
        </span>
        <ul className="flex flex-col gap-2">
          {newCourseData.map((article) => (
            <li key={article.id}>
              <a
                href="#"
                className="text-gray-600 hover:text-sky-500 transition"
              >
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
