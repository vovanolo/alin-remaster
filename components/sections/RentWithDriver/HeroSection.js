import Image from "next/image";
import benz from "../../../images/benz.png";
import idCard from "../../../images/id_card.svg";
import calendar from "../../../images/calendar (1).svg";
import star from "../../../images/star.svg";
import RentWithDriverForm from "../../RentWithDriverForm";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const rentWithDriver = [
  {
    id: 1,
    img: idCard,
    title: "Выберите вид трансфера из представленных ниже вариантов",
  },
  {
    id: 2,
    img: calendar,
    title: "Выберите дату, время и адрес подачи / возврата авто",
  },
  {
    id: 3,
    img: star,
    title: "Заполните форму и отправьте запрос",
  },
];

export default function HeroSection() {
  // Animation into scroll block]
  const [ref, intView] = useInView({ threshold: 0.3 }); // { threshold: 0.1 }
  const animation = useAnimation();
  const animationText = useAnimation();
  const animationRentWithDriver = useAnimation();

  useEffect(() => {
    if (intView) {
      animation.start({
        opacity: 1,
        x: "0",
      });
      animationText.start({
        opacity: 1,
        scale: "1",
      });
      animationRentWithDriver.start({
        opacity: 1,
        x: "0",
      });
    }
    if (!intView) {
      animation.start({ opacity: 0, x: "100%" });
      animationText.start({
        opacity: 0,
        scale: "0",
      });
      animationRentWithDriver.start({
        opacity: 0,
        x: "-400%",
      });
    }
  }, [intView]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-wrap items-center overflow-hidden text-white px-0 xl:px-20 pt-24 -mt-24"
    >
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={animation}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <Image className="object-cover" src={benz} layout="fill" />
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      </motion.div>
      <div className="container-main mx-auto px-4 xl:px-0 flex flex-wrap z-10 mb-10">
        <div className="w-full lg:w-5/12 lg:pr-5">
          <motion.h1
            initial={{ opacity: "0", scale: 0 }}
            animate={animationText}
            transition={{ duration: 2 }}
            className="text-5xl mb-12"
          >
            Аренда авто с водителем
          </motion.h1>
          <div className="grid gap-7 mb-10">
            {rentWithDriver.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: "-400%" }}
                animate={animationRentWithDriver}
                transition={{ duration: index + 1 }}
                className="flex items-center"
              >
                <Image src={item.img} layout="fixed" />
                <p className="ml-3.5">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={animation}
          transition={{ delay: 0.3 }}
          className="w-full lg:w-7/12 relative"
        >
          <RentWithDriverForm />
        </motion.div>
      </div>
    </section>
  );
}
