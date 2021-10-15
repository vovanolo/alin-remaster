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

export const getStaticProps = async ({locale}) => {
  const res = await fetch(
    `https://alin-remaster.herokuapp.com/advertises?_locale=${locale}`
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
