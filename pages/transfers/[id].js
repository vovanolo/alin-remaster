import { MainLayout } from "../../components/MainLayout";
import NewSections from "../../components/NewSections";
import Loader from "../../components/Loader";
import { useRouter } from "next/router";

export default function Transfer({ transfer }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <MainLayout title={transfer.title}>
      <NewSections transfer={transfer} />
    </MainLayout>
  );
}

export async function getStaticPaths({ locales }) {
  const res = await fetch(
    `https://alin-remaster.herokuapp.com/transfers?_locale=${locales}`
  );
  const dataTransferNews = await res.json();

  const paths = dataTransferNews.map((item) => {
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
    "https://alin-remaster.herokuapp.com/transfers/" + id
  );
  const dataTransferNews = await res.json();

  if (dataTransferNews.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: { transfer: dataTransferNews },
  };
}
