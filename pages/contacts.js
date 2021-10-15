import { MainLayout } from "../components/MainLayout";
import Link from "next/link";
import HeroSection from "../components/section/Contact/HeroSection";

export default function Contacts() {
  return (
    <MainLayout title={"Contacts"}>
      <HeroSection />
    </MainLayout>
  );
}
