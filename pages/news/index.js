import { MainLayout } from "../../components/MainLayout";
import NewsSection from "../../components/NewsSection";
import Loader from "../../components/Loader";
import { useRouter } from "next/router";

export default function index({ news }) {
  const router = useRouter();
  return (
    <MainLayout title="News">
      {router.isFallback ? <Loader /> : <NewsSection news={news} />}
    </MainLayout>
  );
}

export async function getStaticProps({ locale }) {
  // const { locale } = context;
  // let transition = undefined;

  const res = await fetch(
    `https://alin-remaster.herokuapp.com/advertises?_locale=${locale}`
  );
  const dataNews = await res.json();

  // if (locale === "uk") {
  //   const transitionRes = await fetch(
  //     `https://alin-remaster.herokuapp.com/advertises`
  //   );
  //   transition = await transitionRes.json();
  // }

  if (dataNews.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: { news: dataNews, fallback: true },
  };
}
