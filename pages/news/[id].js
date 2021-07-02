import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";
import NewSections from "../../components/NewSections";

export const getStaticPaths = async () => {
  const res = await fetch("https://alin-ua-api.herokuapp.com/places");
  const dataNews = await res.json();

  const paths = dataNews.map((item) => {
    return {
      params: { id: item.slug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://alin-ua-api.herokuapp.com/places/" + id);
  const dataNews = await res.json();

  return {
    props: { news: dataNews },
  };
};

export default function New({ news }) {
  const router = useRouter();

  return (
    <MainLayout title={news.name}>
      <NewSections news={news} />
    </MainLayout>
  );
}
