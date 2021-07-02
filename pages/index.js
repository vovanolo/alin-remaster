import { MainLayout } from "../components/MainLayout";
import HeroSection from "../components/sections/HomePage/HeroSection";
import NewsSection from "../components/NewsSection";
import TextSection from "../components/sections/HomePage/TextSection";

export default function Home({ news }) {
  return (
    <MainLayout title={"Home"}>
      <HeroSection />
      <NewsSection news={news} />
      <TextSection />
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://alin-ua-api.herokuapp.com/places?_start=1&_limit=3"
  );
  const dataNews = await res.json();

  if (!dataNews) {
    return {
      notFound: true,
    };
  }

  return {
    props: { news: dataNews },
  };
};
