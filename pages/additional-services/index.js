import { MainLayout } from "../../components/MainLayout";
import NewsSection from "../../components/NewsSection";

export default function index({ options }) {
  return (
    <MainLayout title="Дополнительные услуги">
      <NewsSection options={options} />
    </MainLayout>
  );
}

export async function getStaticProps({ locale }) {
  const res = await fetch(
    `https://alin-remaster.herokuapp.com/additional-options?_locale=${locale}`
  );
  const dataAdditionalServices = await res.json();

  if (!dataAdditionalServices) {
    return {
      notFound: true,
    };
  }

  return {
    props: { options: dataAdditionalServices },
  };
}
