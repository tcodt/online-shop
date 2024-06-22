import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function SectionHeader({ title, desc, btnTitle, btnHref }) {
  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <div className="flex flex-col gap-1 relative">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-16 right-0 -z-10"
          >
            <path
              fill="#BAE6FF"
              d="M38,-59C49.2,-59.3,58.4,-49.1,64.8,-37.6C71.2,-26,74.8,-13,75,0.1C75.2,13.2,71.9,26.4,61.3,30.6C50.6,34.7,32.5,29.8,21,28.5C9.6,27.2,4.8,29.7,-3,34.9C-10.9,40.2,-21.7,48.3,-34.2,50.2C-46.7,52,-60.9,47.7,-68.3,38.3C-75.8,28.9,-76.5,14.4,-69.6,4C-62.6,-6.4,-47.9,-12.7,-37.5,-17.2C-27.2,-21.6,-21.3,-24.1,-15.8,-27.2C-10.2,-30.3,-5.1,-34,4.1,-41.1C13.4,-48.2,26.7,-58.8,38,-59Z"
              transform="translate(100 100)"
            />
          </svg>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
            {title}
          </h4>
          <p className="text-base font-normal text-gray-700 dark:text-zinc-300">
            {desc}
          </p>
        </div>
      </div>
      {btnTitle ? (
        <div>
          <Link to={btnHref}>
            <button className="bg-sky-500 hover:bg-sky-600 transition text-white py-2 px-3 rounded-md flex items-center">
              {btnTitle}&nbsp;
              <FaArrowLeftLong />
            </button>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
