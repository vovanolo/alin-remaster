import { MainLayout } from "../../components/MainLayout";
import NewsSection from "../../components/NewsSection";

export default function index({ newsServices }) {
  return (
    <MainLayout title="Дополнительные услуги">
      <NewsSection news={newsServices} />
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
    props: { newsServices: dataNews },
  };
};
