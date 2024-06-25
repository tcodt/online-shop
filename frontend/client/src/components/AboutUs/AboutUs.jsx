import SectionHeader from "../SectionHeader/SectionHeader";
import AboutUsBox from "../AboutUsBox/AboutUsBox";

export default function AboutUs() {
  return (
    <div className="container mx-auto p-4">
      <SectionHeader
        title="ما چه کمکی بهتون میکنیم"
        desc="از اونجایی که TCOD یک مرجع آموزشی هست"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <AboutUsBox
          title="دوره های اختصاصی"
          desc="با پشتیبانی و کیفیت بالا ارئه میده !"
          icon={<img src="/images/about1.png" />}
        />
        <AboutUsBox
          title="اجازه تدریس"
          desc="به هر مدرسی رو نمیده، چون کیفیت براش مهمه !"
          icon={<img src="/images/about2.png" />}
        />
        <AboutUsBox
          title="دوره پولی و رایگان"
          desc="براش مهم نیست، به مدرسینش حقوق میده تا مهایت کیفیت رو در پشتیبانی و آپدیت دوره ارائه بده"
          icon={<img src="/images/about3.png" />}
        />
        <AboutUsBox
          title="اهمیت به کاربر"
          desc="اولویت اول و آخر TCOD به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست"
          icon={<img src="/images/about4.png" />}
        />
      </div>
    </div>
  );
}
