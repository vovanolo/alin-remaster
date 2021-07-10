import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import urls from "../../../urls";
import BreadCrumbs from "../../BreadCrumbs";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function HeroSection() {
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
  let currUrl = router.route;

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
      {currUrl === "/rent/[id]" ? (
        <motion.div
          ref={refScroll}
          initial={{ width: 0 }}
          animate={animation}
          transition={{ duration: 2 }}
          className="grid grid-cols-2 text-lg my-5"
        >
          <div className="br-arrow-right relative bg-red-600 text-white text-center py-4">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={animationText}
              transition={{ delay: 2 }}
            >
              Вибір
            </motion.div>
          </div>
          <div className="bg-gray-100 text-center py-4">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={animationText}
              transition={{ delay: 2 }}
            >
              Бронювання
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          ref={refScroll}
          initial={{ width: 0 }}
          animate={animation}
          transition={{ duration: 2 }}
          className="grid grid-cols-2 text-lg my-5"
        >
          <div className="br-arrow-right-white relative bg-gray-100 text-center py-4">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={animationText}
              transition={{ delay: 2 }}
            >
              Вибір
            </motion.div>
          </div>
          <div className="bg-red-600 text-center text-white py-4">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={animationText}
              transition={{ delay: 2 }}
            >
              Бронювання
            </motion.div>
          </div>
        </motion.div>
      )}
    </article>
  );
}
