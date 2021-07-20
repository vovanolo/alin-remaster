import { MainLayout } from "../../components/MainLayout";
import NewSections from "../../components/NewSections";
import Loader from "../../components/Loader";
import { useRouter } from "next/router";

export default function New({ dataNew }) {
  const router = useRouter();

  return (
    <MainLayout title={dataNew.title}>
      {router.isFallback ? <Loader /> : <NewSections dataNew={dataNew} />}
    </MainLayout>
  );
}

export async function getStaticPaths({ locales }) {
  const res = await fetch(
    `https://alin-remaster.herokuapp.com/advertises?_locale=${locales}`
  );
  const dataNews = await res.json();

  const paths = dataNews.map((item) => {
    return [
      { params: { id: item.slug, locale: "en" } },
      { params: { id: item.slug, locale: "uk" } },
      { params: { id: item.slug, locale: "ru" } },
      { params: { id: item.slug, locale: "pl" } },
    ];
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(
    "https://alin-remaster.herokuapp.com/advertises/" + id
  );
  const dataNews = await res.json();

  return {
    props: { dataNew: dataNews },
  };
}
