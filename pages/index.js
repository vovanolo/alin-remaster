import { MainLayout } from "../components/MainLayout";
import HeroSection from "../components/section/HomePage/HeroSection";

export default function Home() {
  return (
    <MainLayout title={"Home"}>
      <HeroSection />
    </MainLayout>
  );
}
