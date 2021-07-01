import { MainLayout } from "../components/MainLayout";
import HeroSection from "../components/section/HomePage/HeroSection";
import NewsSection from "../components/NewsSection";
import TextSection from "../components/section/HomePage/TextSection";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://alin-ua-api.herokuapp.com/places?_start=1&_limit=3"
  );
  const dataNews = await res.json();

  return {
    props: { news: dataNews },
  };
};

export default function Home({ news }) {
  return (
    <MainLayout title={"Home"}>
      <HeroSection />
      <NewsSection news={news} />
      <TextSection />
    </MainLayout>
  );
}
