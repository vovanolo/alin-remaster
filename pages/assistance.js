import { MainLayout } from "../components/MainLayout";
import HeroSection from "../components/sections/Assistance/HeroSection";
import ServicesSection from "../components/sections/Assistance/ServicesSection";
import TextSection from "../components/sections/Assistance/TextSection";

export default function assistance() {
  return (
    <MainLayout title="Ассистенс">
      <HeroSection />
      <ServicesSection />
      <TextSection />
    </MainLayout>
  );
}
