import { MainLayout } from "../components/MainLayout";
import HeroSection from "../components/section/HomePage/HeroSection";
import NewsSection from "../components/NewsSection";
import TextSection from "../components/section/HomePage/TextSection";

export default function Home() {
  return (
    <MainLayout title={"Home"}>
      <HeroSection />
      <NewsSection />
      <TextSection />
    </MainLayout>
  );
}
