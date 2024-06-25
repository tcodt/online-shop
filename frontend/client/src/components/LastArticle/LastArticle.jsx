import SectionHeader from "../SectionHeader/SectionHeader";
import ArticleBox from "../ArticleBox/ArticleBox";

export default function LastArticle() {
  return (
    <div className="container mx-auto p-4">
      <SectionHeader
        title="جدیدترین مقاله ها"
        desc="پیش به سوی ارتقای دانش"
        btnTitle="تمامی مقاله ها"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center p-4 dark:bg-gray-800 rounded-lg">
        <ArticleBox />
      </div>
    </div>
  );
}
