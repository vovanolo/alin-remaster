import Link from "next/link";
import Image from "next/image";
import car from "../../../images/car_1.png";
import regular from "../../../images/Regular.png";
import Platinum from "../../../images/6075992fe84db305148558.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function HeroSection() {
  // Animation into scroll block]
  const [ref, intView] = useInView({ threshold: 0.3 }); // { threshold: 0.1 }
  const animationCar = useAnimation();

  useEffect(() => {
    if (intView) {
      animationCar.start({
        scale: 1,
        opacity: 1,
        x: 0,
      });
    }
    if (!intView) {
      animationCar.start({ opacity: 0, scale: 0, x: "100%" });
    }
  }, [intView]);

  return (
    <article className="container-main mx-auto px-4 xl:px-0 lg:my-10 overflow-hidden">
      <h1 className="text-5xl mb-12">Программа лояльности</h1>
      <p className="text-2xl mb-4">
        Изюминка нашей прокатной компании, позволит серьезно сэкономить Ваш
        бюджет и приятно утешить независимо от Вашего настроения.
      </p>
      <div
        ref={ref}
        className="flex flex-wrap justify-between items-center mb-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0, x: "100%" }}
          animate={animationCar}
          transition={{ duration: 1.5 }}
          className="lg:w-1/2 mb-10 lg:mb-0"
        >
          <Image src={car} layout="intrinsic" />
        </motion.div>
        <div className="lg:w-1/2">
          <div className="grid gap-7 mb-10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center"
            >
              <Image className="rounded-full" src={regular} layout="fixed" />
              <ul className="list-disc ml-8">
                <li>Проехать 35 дней вместе с Alin</li>
                <li>Специальный тариф VIP 1+</li>
              </ul>
            </motion.div>
            <div className="flex items-center">
              <Image className="rounded-full" src={regular} layout="fixed" />
              <ul className="list-disc ml-8">
                <li>Проехать 35 дней вместе с Alin</li>
                <li>Специальный тариф VIP 1+</li>
              </ul>
            </div>
            <div className="flex items-center">
              <Image className="rounded-full" src={regular} layout="fixed" />
              <ul className="list-disc ml-8">
                <li>Проехать 35 дней вместе с Alin</li>
                <li>Специальный тариф VIP 1+</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center text-2xl">Партнери</h2>
      <div className="grid md:grid-cols-4">
        <div className="rounded-full m-6">
          <div className="md:block flex justify-center">
            <Image src={Platinum} layout="intrinsic" />
          </div>
          <p className="text-center text-lg">Citadel Inn</p>
        </div>
        <div className="rounded-full m-6">
          <div className="md:block flex justify-center">
            <Image src={Platinum} layout="intrinsic" />
          </div>
          <p className="text-center text-lg">Citadel Inn</p>
        </div>
        <div className="rounded-full m-6">
          <div className="md:block flex justify-center">
            <Image src={Platinum} layout="intrinsic" />
          </div>
          <p className="text-center text-lg">Citadel Inn</p>
        </div>
        <div className="rounded-full m-6">
          <div className="md:block flex justify-center">
            <Image src={Platinum} layout="intrinsic" />
          </div>
          <p className="text-center text-lg">Citadel Inn</p>
        </div>
      </div>
      <motion.div whileTap={{ scale: 1.2 }} className="flex justify-center">
        <Link href={"/"}>
          <a className="inline-block text-white rounded-lg bg-red-600 hover:bg-red-500 px-20 py-4 mb-10">
            Бронировать
          </a>
        </Link>
      </motion.div>
    </article>
  );
}
