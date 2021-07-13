import { MainLayout } from "../components/MainLayout";
import SimpleReactLightbox from "simple-react-lightbox";
import HeroArticle from "../components/articles/Car-sale/HeroArticle";

export default function carSale() {
  return (
    <MainLayout title="Аренда авто с правом выкупа">
      <SimpleReactLightbox>
        <HeroArticle />
      </SimpleReactLightbox>
    </MainLayout>
  );
}
