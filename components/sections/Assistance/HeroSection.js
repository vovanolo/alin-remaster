import Image from "next/image";
import bgAssistance from "../../../images/bg_asistans.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function HeroSection() {
  // Animation into scroll block]
  const [refScroll, intView] = useInView({ threshold: 0.4 }); // { threshold: 0.1 }
  const [refScrollText, intViewText] = useInView({ threshold: 0.3 }); // { threshold: 0.1 }
  const animation = useAnimation();
  const animationText = useAnimation();

  useEffect(() => {
    if (intView) {
      animation.start({
        scale: 1,
        opacity: 1,
      });
    }
    if (!intView) {
      animation.start({
        scale: 0.4,
        opacity: 0,
      });
    }

    if (intViewText) {
      animationText.start({
        scale: 1,
        opacity: 1,
        x: "0",
      });
    }
    if (!intViewText) {
      animationText.start({
        scale: 0.4,
        opacity: 0,
        x: "100%",
      });
    }
  }, [intView, intViewText]);

  return (
    <section
      ref={refScroll}
      className="relative min-h-screen flex flex-wrap items-center overflow-hidden text-white px-0 xl:px-20 -mt-24"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={animation}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-0"
      >
        <Image
          className="w-full h-full object-cover object-top"
          src={bgAssistance}
          layout="fill"
          alt="benz"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </motion.div>
      <div
        ref={refScrollText}
        className="container-main mx-auto px-4 xl:px-0 flex flex-wrap z-10"
      >
        <div className="lg:w-4/12"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: "100%" }}
          animate={animationText}
          transition={{ delay: 0.8 }}
          className="lg:w-8/12"
        >
          <h1 className="text-5xl mb-12">Услуга «Alin Assistance»</h1>
          <p>
            Многое, множество звонков, важные встречи, серьезные переговоры? В
            огромном списке будничных дел, совсем нет времени для своего четырех
            колесного железного друга? Ведь тоже требует внимания. Мы стремимся,
            чтобы ваша жизнь была комфортной, чтобы вы имели возможность
            заниматься любимыми делами, поэтому мы разработали уникальную
            программу по обслуживанию клиентов - персональный сервис консультант
            Alin Assistance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
