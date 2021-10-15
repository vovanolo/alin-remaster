import { MainLayout } from "../components/MainLayout";
import HeroSection from "../components/sections/RentWithDriver/HeroSection";
import TransferNews from "../components/TransferNews";

export default function rentWithDriver({ transfersNews }) {
  return (
    <MainLayout title="Аренда авто с водителем. Прокат авто с водителем компании ALIN">
      <HeroSection />
      <TransferNews transfersNews={transfersNews} />
    </MainLayout>
  );
}

export const getStaticProps = async ({ locale }) => {
  const res = await fetch(
    `https://alin-remaster.herokuapp.com/transfers?_locale=${locale}`
  );
  const dataTransferNews = await res.json();

  if (!dataTransferNews) {
    return {
      notFound: true,
    };
  }

  return {
    props: { transfersNews: dataTransferNews },
  };
};
