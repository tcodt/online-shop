import { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import "./Landing.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Landing() {
  const [randomImage, setRandomImage] = useState("");

  const imgArr = [
    "/images/products/12.png",
    "/images/products/33.png",
    "/images/products/02.png",
    "/images/products/43.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imgArr.length);
    setRandomImage(imgArr[randomIndex]);
  }, []);

  return (
    <div className="container mx-auto mt-4 p-4 md:p-0">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-sm p-4 rounded-lg overflow-hidden h-full">
            <div>
              <img
                src={randomImage}
                className="h-[250px] object-contain mx-auto"
                id="custom-image"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="bg-primary-light shadow-sm p-4 rounded-lg h-full">
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
                    <button className="bg-primary-blue text-white p-2 rounded-xl w-2/4 flex items-center justify-center gap-2 hover:bg-sky-600 transition">
                      فروشگاه <BsCart4 className="text-2xl" />
                    </button>
                  </div>
                </div>
                <div className="col-span-4">
                  <Swiper
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img
                        src="/images/products/26.png"
                        className="h-[150px] object-contain mx-auto"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="/images/products/13.png"
                        className="h-[150px] object-contain mx-auto"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="/images/products/31.png"
                        className="h-[150px] object-contain mx-auto"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12">
          <div className="bg-primary-light shadow-sm p-4 rounded-lg h-full">
            <Slider {...settings}>
              <div>
                <img
                  src="/images/products/27.png"
                  className="h-[150px] object-contain mx-auto drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div>
                <img
                  src="/images/products/30.png"
                  className="h-[150px] object-contain mx-auto drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div>
                <img
                  src="/images/products/29.png"
                  className="h-[150px] object-contain mx-auto drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div>
                <img
                  src="/images/products/33.png"
                  className="h-[150px] object-contain mx-auto drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div>
                <img
                  src="/images/products/34.png"
                  className="h-[150px] object-contain mx-auto drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div>
                <img
                  src="/images/products/26.png"
                  className="h-[150px] object-contain mx-auto drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div>
                <img
                  src="/images/products/36.png"
                  className="h-[150px] object-contain mx-auto drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div>
                <img
                  src="/images/products/37.png"
                  className="h-[150px] object-contain mx-auto drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div>
                <img
                  src="/images/products/38.png"
                  className="h-[150px] object-contain mx-auto drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)]"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
