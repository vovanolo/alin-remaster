import { MainLayout } from "../components/MainLayout";
import HeroArticle from "../components/articles/About/HeroArticle";

export default function about() {
  return (
    <MainLayout title="О нас">
      <HeroArticle />
    </MainLayout>
  );
}
