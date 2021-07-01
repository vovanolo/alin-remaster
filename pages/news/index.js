import { MainLayout } from "../../components/MainLayout";
import NewsHeroSection from "../../components/section/NewsPage/NewsHeroSection";

export default function index() {
  return (
    <MainLayout title={"news"}>
      <NewsHeroSection />
    </MainLayout>
  );
}
