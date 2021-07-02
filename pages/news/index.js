import { MainLayout } from "../../components/MainLayout";
import NewsSection from "../../components/NewsSection";

export const getStaticProps = async () => {
  const res = await fetch("https://alin-ua-api.herokuapp.com/places");
  const dataNews = await res.json();

  return {
    props: { news: dataNews },
  };
};

export default function index({ news }) {
  return (
    <MainLayout title={"news"}>
      <NewsSection news={news} />
    </MainLayout>
  );
}
