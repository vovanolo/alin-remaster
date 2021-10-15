import Image from "next/image";
import first from "../../../images/first_assistance.svg";
import second from "../../../images/second_assistance.svg";
import third from "../../../images/third_assistance.svg";
import fourth from "../../../images/fourth_assistance.svg";
import fifth from "../../../images/fifth_assistance.svg";
import sixth from "../../../images/sixth_assistance.svg";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export default function ServicesSection() {
  // Animation into scroll block]
  const [ref, intView] = useInView({ threshold: 0.4 }); // { threshold: 0.1 }
  const animation = useAnimation();

  const personalServices = [
    {
      id: 1,
      img: first,
      title: "Запись авто на ремонт или проведения техобслуживания",
      transition: 0,
    },
    {
      id: 2,
      img: second,
      title: "Страхование авто",
      transition: 1,
    },
    {
      id: 3,
      img: third,
      title: "Заказ эвакуатора",
      transition: 1.5,
    },
    {
      id: 4,
      img: fourth,
      title:
        "Подбор автозапчастей соответствии с Вашими пожеланиями (б / у, новые)",
      transition: 2.5,
    },
    {
      id: 5,
      img: fifth,
      title: "Оформление полиса гражданской ответственности",
      transition: 3,
    },
    {
      id: 6,
      img: sixth,
      title: "Продажа автомобиля",
      transition: 3.4,
    },
  ];

  useEffect(() => {
    if (intView) {
      animation.start({
        visibility: "visible",
        opacity: 1,
        x: "0",
      });
    }
    if (!intView) {
      animation.start({ visibility: "hidden", opacity: 0, x: "-400%" });
    }
  }, [intView]);

  return (
    <section
      ref={ref}
      className="container-main mx-auto px-4 xl:px-0 flex flex-wrap justify-between items-center my-20 overflow-hidden"
    >
      <div className="lg:w-7/12">
        <p className="text-2xl font-medium opacity-50 mb-3">Что входит?</p>
        <h2 className="text-4xl mb-5">Особые услуги</h2>
        <div className="grid md:grid-cols-2 gap-7 mb-10">
          {personalServices.map((item) => (
            <motion.div
              key={item.id}
              initial={{ visibility: "hidden", opacity: 0, x: "-400%" }}
              animate={animation}
              transition={{ delay: item.transition }}
              className="flex items-center"
            >
              <Image
                className="mr-3.5"
                src={item.img}
                alt="sixth"
                width={98}
                height={98}
              />
              <p>{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
