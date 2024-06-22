import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
// import TopBar from "../../components/TopBar/TopBar";
import ArticlesData from "../../ArticlesData.json";

import ArticleAside from "../../components/ArticleAside/ArticleAside";
import {
  PiCaretLeftDuotone,
  PiUserDuotone,
  PiEyeDuotone,
  PiStarFill,
  PiStarHalfFill,
} from "react-icons/pi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import CommentsTextArea from "../../components/CommentsTextArea/CommentsTextArea";

export default function ArticleInfo() {
  const params = useParams();

  const [articleData, setArticleData] = useState(ArticlesData);

  useEffect(() => {
    // console.log(params);
    // console.log(articleData);

    window.scrollTo(0, 0);

    if (articleData && articleData.length > 0) {
      const mainArticle = articleData.find(
        (article) => article.id == params.articleName
      );
      console.log(mainArticle);
      setArticleData(mainArticle);
    }
  }, [params, articleData]);

  return (
    <>
      {/* <TopBar /> */}
      <NavBar />
      <BreadCrumb
        links={[
          { id: 1, title: "خانه", to: "/" },
          {
            id: 2,
            title: "مقاله ها",
            to: "/category-info/frontend",
          },
          {
            id: 3,
            title: "ویو vs ریاکت",
            to: "/course-info/js-expert",
          },
        ]}
      />

      <div>
        <article className="container mx-auto my-4 relative">
          <div className="grid grid-cols-3">
            <div className="flex flex-col gap-7 col-span-2 me-4 bg-slate-200 rounded-md shadow-md p-4">
              <h4 className="text-lg text-gray-800 font-semibold flex items-center">
                <PiCaretLeftDuotone className="text-sky-500 text-2xl" />
                {articleData.title}
              </h4>
              <div className="bg-white shadow-sm rounded-md p-2 flex gap-6 items-center">
                <span className="flex items-center gap-2 text-sm text-gray-700">
                  <PiUserDuotone className="text-xl text-sky-500" />
                  نویسنده:
                  <span className="text-gray-500">{articleData.author}</span>
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-700">
                  <PiEyeDuotone className="text-xl text-sky-500" />
                  بازدید:
                  <span className="text-gray-500">{articleData.view}</span>
                </span>
              </div>
              <img
                src={articleData.cover}
                alt="Article Cover"
                className="w-full h-96 rounded-md"
              />
              <div className="flex items-center gap-2">
                <span>
                  {articleData.rate >= 5 ? (
                    <PiStarFill className="text-yellow-500 text-xl" />
                  ) : (
                    <PiStarHalfFill className="text-yellow-500 text-xl" />
                  )}
                </span>
                <span>{articleData.rate}&nbsp;امتیاز</span>
              </div>
              <p className="text-base text-gray-600">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد.
              </p>
              <div className="bg-white shadow-sm rounded-md p-4">
                <h5 className="text-lg text-gray-800 mb-4">
                  آنچه در این مقاله خواهید خواند
                </h5>
                <ul>
                  <li>
                    <a href="#" className="text-base text-sky-500">
                      هنر برنامه نویسی
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-sky-500">
                      قدرت یادگیری ماشین
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-sky-500">
                      کاوش در جهان
                    </a>
                  </li>
                </ul>
              </div>
              <article>
                <div>
                  <SectionHeader title={articleData.title} />
                  <img
                    src="/images/js-course-article.png"
                    alt="Coures Image"
                    className="rounded-md shadow-sm w-full"
                  />
                  <div className="mt-4">
                    <p className="text-base text-gray-600">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد.
                    </p>
                    <p className="text-base text-gray-600 mt-4">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                  </div>
                </div>
              </article>
              <CommentsTextArea />
            </div>

            <ArticleAside />
          </div>
        </article>
      </div>

      <Footer />
    </>
  );
}
