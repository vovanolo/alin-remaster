import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import urls from "../../../urls";
import BreadCrumbs from "../../BreadCrumbs";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function HeroArticle() {
  // Animation into scroll block]
  const [refScroll, intView] = useInView(); // { threshold: 0.1 }
  const animation = useAnimation();
  const animationText = useAnimation();

  useEffect(() => {
    if (intView) {
      animation.start({
        width: "100%",
      });
      animationText.start({
        scale: 1,
        opacity: 1,
      });
    }
    if (!intView) {
      animation.start({ width: "0" });
      animationText.start({
        scale: 0,
        opacity: 0,
      });
    }
  }, [intView]);

  const router = useRouter();

  const [crumbs, setCrumbs] = useState([
    {
      name: "Головна",
      nameCity: "Прокат авто Львів",
      nameCar: "R2-car",
      path: urls.home,
      slug: "/rent/lviv",
      slugReserv: "/reserv/r2-car",
    },
    {
      name: "Головна",
      nameCity: "Прокат авто Київ",
      nameCar: "Mustang",
      path: urls.home,
      slug: "/rent/kyiv",
      slugReserv: "/reserv/mustang",
    },
    {
      name: "Головна",
      nameCity: "Прокат авто Харків",
      nameCar: "Rich-cars",
      path: urls.home,
      slug: "/rent/xarcks",
      slugReserv: "/reserv/rich-cars",
    },
  ]);

  const selected = (crumb) => {
    router.push(crumb, crumb, { locale: router.locale });
  };

  return (
    <article className="container-main mx-auto px-4 xl:px-0">
      <BreadCrumbs crumbs={crumbs} selected={selected} />
    </article>
  );
}
