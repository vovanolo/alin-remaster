import { MainLayout } from "../components/MainLayout";
import HeroSection from "../components/sections/About/HeroSection";
import Loader from "../components/Loader";

export default function about() {
  return (
    <MainLayout title="О нас">
      <HeroSection />
      <Loader />
    </MainLayout>
  );
}
