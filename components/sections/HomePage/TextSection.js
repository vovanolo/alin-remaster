import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function TextSection() {
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

  return (
    <section ref={ref} className="container-main mx-auto px-4 xl:px-0 my-20">
      <motion.div initial={{ scale: 0 }} animate={animation}>
        <h2 className="text-4xl mb-9">Автопрокат во Львове от компании ALIN</h2>
        <h3 className="text-align:justify">
          При аренде автомобилей в ALIN каждый клиент оценит преимущества:
        </h3>
        <p>
          ✔ в аренду сдаются только новые автомобили, год выпуска которых не
          позднее 2016 года;
        </p>
      </motion.div>
    </section>
  );
}
