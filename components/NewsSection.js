import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import newsCar from "../images/thumb__350_180_0_0_crop.jpg";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import urls from "../urls";

export default function NewsSection({ news, transfersNews, options }) {
  const router = useRouter();
  let currentUrl = router.route;
  // Animation into scroll block]
  const [ref, intView] = useInView(); // { threshold: 0.1 }
  const animation = useAnimation();

  useEffect(() => {
    if (intView) {
      animation.start({
        scale: 1,
        opacity: 1,
      });
    }
    if (!intView) {
      animation.start({ scale: 0.4, opacity: 0.3 });
    }
  }, [intView]);

  return (
    <section
      ref={ref}
      className="container-main mx-auto px-4 xl:px-0 mb-10 mt-4"
    >
      {currentUrl === urls.home ? (
        <motion.h1 animate={animation} className="text-4xl mb-9">
          Новости
        </motion.h1>
      ) : currentUrl === urls.news ? (
        <motion.h1 animate={animation} className="text-4xl mb-9">
          Новости
        </motion.h1>
      ) : currentUrl === urls.additionalServices ? (
        <motion.h1 animate={animation} className="text-4xl mb-9">
          Дополнительные услуги
        </motion.h1>
      ) : (
        <motion.h1 animate={animation} className="text-4xl mb-9">
          Прокат авто с водителем
        </motion.h1>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {currentUrl === urls.home || currentUrl === urls.news
          ? news.map((item, i) => (
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                  scale: [0, 0.4, 0.3, 1],
                  opacity: [0.034, 0.4, 0.3, 1],
                }}
                transition={{ delay: i }}
                key={item.id}
                className="news-animation"
              >
                <Link href={"/news/" + item.slug}>
                  <a>
                    <Image
                      className="w-full"
                      src={newsCar}
                      layout="responsive"
                    />
                    <h1 className="bg-gray-100 text-lg text-center py-2">
                      {item.title}
                    </h1>
                  </a>
                </Link>
              </motion.div>
            ))
          : currentUrl === urls.additionalServices
          ? options.map((item, i) => (
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                  scale: [0, 0.4, 0.3, 1],
                  opacity: [0.034, 0.4, 0.3, 1],
                }}
                transition={{ delay: i }}
                key={item.id}
                className="news-animation"
              >
                <Link href={"/additional-services/" + item.slug}>
                  <a>
                    <Image
                      className="w-full"
                      src={newsCar}
                      layout="responsive"
                    />
                    <h1 className="bg-gray-100 text-lg text-center py-2">
                      {item.title}
                    </h1>
                  </a>
                </Link>
              </motion.div>
            ))
          : currentUrl === urls.transfers || currentUrl === urls.rentWithDriver
          ? transfersNews.map((item, i) => (
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                  scale: [0, 0.4, 0.3, 1],
                  opacity: [0.034, 0.4, 0.3, 1],
                }}
                transition={{ delay: i }}
                key={item.id}
                className="news-animation"
              >
                <Link href={"/transfers/" + item.slug}>
                  <a>
                    <Image
                      className="w-full"
                      src={newsCar}
                      layout="responsive"
                    />
                    <h1 className="bg-gray-100 text-lg text-center py-2">
                      {item.title}
                    </h1>
                  </a>
                </Link>
              </motion.div>
            ))
          : null}
      </div>
    </section>
  );
}
