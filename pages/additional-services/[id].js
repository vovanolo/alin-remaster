import { MainLayout } from "../../components/MainLayout";
import NewSection from "../../components/NewSections";

export default function additionalService({ option }) {
  return (
    <MainLayout title={option.title}>
      <NewSection option={option} />
    </MainLayout>
  );
}

export async function getStaticPaths({ locales }) {
  const res = await fetch(
    `https://alin-remaster.herokuapp.com/additional-options?_locale=${locales}`
  );
  const dataOption = await res.json();

  const paths = dataOption.map((item) => {
    return [
      { params: { id: item.slug, locale: "en" } },
      { params: { id: item.slug, locale: "ua" } },
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
    "https://alin-remaster.herokuapp.com/additional-options/" + id
  );
  const dataOption = await res.json();

  return {
    props: { option: dataOption },
  };
}
