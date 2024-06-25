import { useState } from "react";
import ArticlesData from "../../ArticlesData.json";
import { Link } from "react-router-dom";

export default function ArticleBox() {
  // eslint-disable-next-line no-unused-vars
  const [allArticles, setAllArticles] = useState(ArticlesData);

  return (
    <>
      {allArticles.map((article) => (
        <div
          key={article.id}
          className="rounded-md shadow-md bg-slate-200 w-5/6 hover-handler dark:bg-gray-600 dark:border-2 dark:border-gray-600"
        >
          <img
            src={article.cover}
            alt="Article Cover"
            className="h-56 w-full object-cover rounded-t-md dark:rounded"
          />
          <div className="p-4">
            <h4 className="font-semibold text-lg text-gray-800 w-full overflow-hidden text-ellipsis whitespace-nowrap dark:text-white">
              {article.title}
            </h4>
            <p className="font-normal text-base text-gray-700 mt-4 w-full overflow-hidden text-ellipsis whitespace-nowrap dark:text-zinc-300">
              {article.description}
            </p>
          </div>
          <div className="p-4">
            <Link
              to={`/article-info/${article.id}`}
              className="block text-center p-2 border-2 border-sky-500 rounded-md w-full hover:bg-sky-200 dark:bg-sky-500 dark:text-white transition"
            >
              بیشتر بخوانید
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
