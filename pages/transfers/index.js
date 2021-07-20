import { MainLayout } from "../../components/MainLayout";
import NewsSection from "../../components/NewsSection";

export default function index({ transfersNews }) {
  return (
    <MainLayout title="Blog">
      <NewsSection transfersNews={transfersNews} />
    </MainLayout>
  );
}

export const getStaticProps = async ({ locale }) => {
  const res = await fetch(
    `https://alin-remaster.herokuapp.com/transfers?_locale=${locale}`
  );
  const dataTransferNews = await res.json();

  return {
    props: { transfersNews: dataTransferNews },
  };
};
