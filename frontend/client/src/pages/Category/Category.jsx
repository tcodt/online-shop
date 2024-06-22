// import TopBar from "../../components/TopBar/TopBar";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import CourseBox from "../../components/CourseBox/CourseBox";

import { FiGrid } from "react-icons/fi";
import { VscListFlat } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";

export default function Category() {
  return (
    <>
      {/* <TopBar /> */}
      <NavBar />

      <section className="container mx-auto">
        <div className="p-4 bg-slate-200 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button className="p-2 bg-sky-500 rounded-sm text-white mx-2">
                <FiGrid className="text-lg" />
              </button>
              <button className="p-2 border border-slate-300 rounded-sm bg-white mx-2">
                <VscListFlat className="text-lg text-sky-500" />
              </button>
              <select className="p-1 border border-slate-300 rounded-sm outline-none text-base">
                <option value="default" className="text-gray-600" selected>
                  مرتب سازی پیش فرض
                </option>
                <option value="1">گزینه 1</option>
                <option value="2">گزینه 2</option>
                <option value="3">گزینه 3</option>
              </select>
            </div>
            <div>
              <form>
                <div className="bg-white rounded-sm p-1 border border-slate-300 flex items-center">
                  <input
                    type="text"
                    placeholder="جستجوی دوره..."
                    className="border-none outline-none text-sm font-semibold p-1 text-gray-600 bg-transparent"
                  />
                  <button className="p-1">
                    <IoSearch className="text-lg text-gray-600" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center p-4">
        <CourseBox />
      </div>

      <Footer />
    </>
  );
}
