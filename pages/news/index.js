import { MainLayout } from "../../components/MainLayout";
import NewsSection from "../../components/NewsSection";

export default function index({ news }) {
  return (
    <MainLayout title={"news"}>
      <NewsSection news={news} />
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://alin-ua-api.herokuapp.com/places");
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
