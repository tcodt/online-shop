/* eslint-disable react/prop-types */
import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function BreadCrumb({ links }) {
  return (
    <div className="container mx-auto mt-4 p-4 lg:p-0">
      <div className="p-4 bg-slate-200 dark:bg-gray-700 shadow-md rounded-md flex items-center">
        <Link
          to="/"
          className="bg-white p-2 rounded-sm text-gray-600 text-xl mx-2"
        >
          <TiHome />
        </Link>
        <nav className="mx-2">
          <ul className="flex">
            {links.map((link) => (
              <li className="text-base dark:text-zinc-300" key={link.id}>
                <Link to={link.to}>{link.title}</Link>
                <span className="text-sky-500 text-2xl mx-2">»</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
