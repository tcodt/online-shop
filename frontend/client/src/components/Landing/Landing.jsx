import { BsCart4 } from "react-icons/bs";

import "./Landing.css";
import "swiper/css";

export default function Landing() {
  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-sm p-4 rounded-lg overflow-hidden">
            <div>
              <img
                src="/images/products/12.png"
                className="h-[250px] object-contain mx-auto"
                id="custom-image"
              />
            </div>
          </div>
        </div>
        <div className="col-span-8">
          <div className="bg-primary-light shadow-sm p-4 rounded-lg">
            <div className="flex flex-col gap-4">
              <div className="text-2xl">
                <h3 className="text-3xl text-primary-dark font-bold">
                  محصولات ویژه با تخفیف های باور نکردنی 🤯
                </h3>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-8">
                  <div className="flex flex-col gap-4">
                    <span className="text-gray-600 font-semibold">
                      فروشگاه همواره تخفیف TCOD
                    </span>
                    <p className="text-gray-500 font-semibold">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                    <button className="bg-primary-blue text-white p-2 rounded-xl w-2/4 flex items-center justify-center gap-2">
                      فروشگاه <BsCart4 className="text-2xl" />
                    </button>
                  </div>
                </div>
                <div className="col-span-4">
                  <img
                    src="/images/products/41.png"
                    className="h-[200px] object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12">
          <div className="bg-primary-light shadow-sm p-4 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
