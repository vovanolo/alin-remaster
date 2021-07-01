import { MainLayout } from "../components/MainLayout";
import HeroSection from "../components/section/Assistance/HeroSection";
import ServicesSection from "../components/section/Assistance/ServicesSection";
import TextSection from "../components/section/Assistance/TextSection";

export default function assistance() {
  return (
    <MainLayout title="Ассистенс">
      <HeroSection />
      <ServicesSection />
      <TextSection />
    </MainLayout>
  );
}
