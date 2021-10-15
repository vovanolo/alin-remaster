import Image from "next/image";
import font from "../../../images/font.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function TextSection() {
  // Animation into scroll block]
  const [ref, intView] = useInView({ threshold: 0.8 }); // { threshold: 0.1 }
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
    <section ref={ref} className="relative my-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={animation}
        transition={{ duration: 1 }}
        className="lg:absolute left-0 lg:w-1/2"
      >
        <Image
          src={font}
          alt="font-car"
          height={384}
          layout="responsive"
          loading="lazy"
        />
      </motion.div>
      <div className="container-main mx-auto px-4 xl:px-0">
        <div className="flex flex-wrap items-center">
          <div className="lg:w-2/3 lg:h-96"></div>
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={animationText}
            transition={{ duration: 1 }}
            className="lg:w-1/3"
          >
            <p className="my-5">
              Основной принцип работы компании - не просто обслуживание
              автомобилей, а результат и благодарны постоянные клиенты! Именно
              благодаря ей вы сможете сэкономить свое время и нервы. Забудьте о
              безграничных очереди и века потерянного времени.
            </p>
            <p className="mt-4">
              Программа предоставляет вам возможность решить все технические
              вопросы не выходя из дома или офиса. Лишь один звонок и вот
              персональный сервис консультант отправляется вам на помощь.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
