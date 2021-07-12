import { MainLayout } from "../components/MainLayout";
import HeroSection from "../components/sections/About/HeroSection";

export default function about() {
  return (
    <MainLayout title="О нас">
      <HeroSection />
    </MainLayout>
  );
}
