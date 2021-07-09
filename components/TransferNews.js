import Link from "next/link";
import Image from "next/image";
import photo from "../images/thumb__540_360_0_0_crop.webp";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export default function TransferNews({ transfersNews }) {
  // Animation into scroll block]
  const [ref, intView] = useInView({ threshold: 0.4 }); // { threshold: 0.1 }
  const animation = useAnimation();
  const animationText = useAnimation();

  useEffect(() => {
    if (intView) {
      animation.start({
        opacity: 1,
        x: "0",
      });
      animationText.start({
        opacity: 1,
        x: "0",
      });
    }
    if (!intView) {
      animation.start({ opacity: 0, x: "-100%" });
      animationText.start({
        opacity: 0,
        x: "100%",
      });
    }
  }, [intView]);

  return (
    <section
      ref={ref}
      className="container-main mx-auto px-4 xl:px-0 py-10 overflow-hidden"
    >
      {transfersNews.map((item, i) => (
        <div key={item.id} className="grid lg:grid-cols-2 gap-7 my-20">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={animation}
            transition={{ duration: 1, delay: i }}
            className="lg:order-1"
          >
            <Image src={photo} layout="responsive" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={animationText}
            transition={{ duration: 1, delay: i }}
            className="flex flex-wrap content-between lg:order-2"
          >
            <h2 className="text-4xl">{item.title}</h2>
            <p className="my-4">{item.description}</p>
            <Link href={"/transfers/" + item.slug}>
              <a className="text-lg bg-red-600 text-white rounded-lg px-10 py-2">
                Получить цену
              </a>
            </Link>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
