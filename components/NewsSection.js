import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import newsCar from "../images/thumb__350_180_0_0_crop.jpg";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export default function NewsSection({ news }) {
  const router = useRouter();
  let currentUrl = router.route;
  const [currentPage, setCurrentPage] = useState(false);
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
      animation.start({ scale: 0.4, opacity: 0 });
    }
  }, [intView]);

  useEffect(() => {
    if (currentUrl === "/") {
      setCurrentPage(true);
    } else if (currentUrl === "/news") {
      setCurrentPage(true);
    } else {
      setCurrentPage(false);
    }
  }, []);

  return (
    <section
      ref={ref}
      className="container-main mx-auto px-4 xl:px-0 mb-10 mt-4"
    >
      {currentPage ? (
        <motion.h1 animate={animation} className="text-4xl mb-9">
          Новости
        </motion.h1>
      ) : (
        <motion.h1 animate={animation} className="text-4xl mb-9">
          Дополнительные услуги
        </motion.h1>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {news.map((item, i) => (
          <motion.div
            initial={{ scale: 0 }}
            animate={animation}
            transition={{ delay: i }}
            key={item.id}
            className="news-animation"
          >
            <Link href={"/news/" + item.slug}>
              <a>
                <Image className="w-full" src={newsCar} layout="responsive" />
                <h1 className="bg-gray-100 text-lg text-center py-2">
                  {item.name}
                </h1>
              </a>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
