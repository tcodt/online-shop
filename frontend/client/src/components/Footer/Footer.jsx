import FooterItem from "../FooterItem/FooterItem";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bg-slate-200 dark:bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 container mx-auto p-4">
        <div>
          <FooterItem title="درباره ما" />
          <p className="text-gray-700 text-base dark:text-zinc-300">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
          </p>
        </div>
        <div>
          <FooterItem title="آخرین مطالب" />
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="text-gray-800 text-base hover:text-sky-500 dark:text-sky-200 trnasition"
            >
              نقش جاوااسکریپت در توسعه فرانت‌اند چیست؟
            </a>
            <a
              href="#"
              className="text-gray-800 text-base hover:text-sky-500 dark:text-sky-200 trnasition"
            >
              طراحی وب واکنش‌پذیر چیست و چرا اهمیت دارد؟
            </a>
            <a
              href="#"
              className="text-gray-800 text-base hover:text-sky-500 dark:text-sky-200 trnasition"
            >
              تفاوت بین جاوااسکریپت همگام و ناهمگام
            </a>
            <a
              href="#"
              className="text-gray-800 text-base hover:text-sky-500 dark:text-sky-200 trnasition"
            >
              چگونه مشکلات سازگاری مرورگرهای مختلف را در توسعه فرانت‌اند مدیریت
              کنیم؟
            </a>
            <a
              href="#"
              className="text-gray-800 text-base hover:text-sky-500 dark:text-sky-200 trnasition"
            >
              چگونه می‌توانیم عملکرد وب‌سایت را برای دسترسی آسان‌تر بهینه کنیم؟
            </a>
          </div>
        </div>
        <div>
          <FooterItem title="دسترسی سریع" />
          <div>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="text-gray-800 text-base hover:text-sky-500 dark:text-sky-200 trnasition"
                >
                  آموزش HTML
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 text-base hover:text-sky-500 dark:text-sky-200 trnasition"
                >
                  آموزش جاوااسکریپت
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 text-base hover:text-sky-500 dark:text-sky-200 trnasition"
                >
                  آموزش ریکت
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-8 border-t-2 border-slate-300 p-4">
        <span className="text-base font-semibold text-gray-700 dark:text-zinc-400">
          کلیه حقوق برای{" "}
          <a href="#" className="text-sky-500">
            گروه برنامه نویسی TCOD
          </a>{" "}
          محفوظ است
        </span>
      </div>
    </footer>
  );
}
