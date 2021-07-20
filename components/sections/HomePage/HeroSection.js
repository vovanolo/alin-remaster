import Image from "next/image";
import windrose from "../../../images/thumb__720_704_0_0_crop.png";
import mainImage from "../../../images/thumb__634_394_0_0_crop.png";
import svgClanendar from "../../../images/calendar.svg";
import svgBackInTime from "../../../images/back-in-time.svg";
import React, { useEffect, useContext, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
// import { FormContext } from "../../Context";
import DatePicker from "react-datepicker";
import { useFormContextDate } from "../../Context";
import { useRouter } from "next/router";
import { set } from "nprogress";

const AnimationSelect = {
  inactive:
    "w-full border px-4 py-2 cursor-pointer ring ring-gray-50 focus:ring-gray-300 focus:ring-offset-4 hover:shadow-xl focus:shadow-xl focus:outline-none transition duration-500 dropdown-section",
  active:
    "w-full border px-4 py-2 cursor-pointer ring ring-gray-50 focus:ring-gray-300 focus:ring-offset-4 hover:shadow-xl focus:shadow-xl focus:outline-none transition duration-500 option-active",
};

export default function HeroSection() {
  const router = useRouter();
  const [isOpensection, setIsOpensection] = useState(AnimationSelect.inactive);
  const [tf, setTf] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [startDate, setStartDate] = useFormContextDate();

  // Animation into scroll block]
  const [refScroll, intView] = useInView(); // { threshold: 0.1 }
  const animationCar = useAnimation();
  const animationWindRose = useAnimation();
  const animationTextH1 = useAnimation();
  const animationCalculateor = useAnimation();
  const animationDateTime = useAnimation();

  useEffect(() => {
    if (intView) {
      animationCar.start({
        x: "0",
      });

      animationDateTime.start({
        x: "0",
      });

      animationWindRose.start({
        opacity: [0, 0.14, 0.18, 0.2],
      });

      animationTextH1.start({
        opacity: [0, 0.34, 0.43, 0.8, 1],
      });

      animationCalculateor.start({
        scale: [0, 1],
      });
    }
    if (!intView) {
      animationCar.start({ x: "100%" });

      animationDateTime.start({ x: "-100%" });

      animationWindRose.start({
        opacity: 0,
      });

      animationTextH1.start({
        opacity: 0,
      });

      animationCalculateor.start({
        scale: 0,
      });
    }
  }, [intView]);

  const changeSelectClassName = () => {
    setTf(!tf);
    if (tf) {
      setIsOpensection(AnimationSelect.active);
    } else {
      setIsOpensection(AnimationSelect.inactive);
    }
  };

  return (
    <section
      ref={refScroll}
      className="relative flex items-center -mt-24 min-h-screen overflow-hidden"
    >
      <div className="absolute inset-y-0 lg:-right-16 w-full lg:w-1/2 flex items-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={animationWindRose}
          transition={{ duration: 3.4 }}
          className="absolute top-1/2 lg:left-full transform -translate-y-1/2 lg:-translate-x-2/3 w-full object-contain z-0"
        >
          <Image
            className="w-full"
            src={windrose}
            alt="Car"
            layout="responsive"
          />
        </motion.div>
        <motion.div
          initial={{ x: "100%" }}
          animate={animationCar}
          transition={{ duration: 2 }}
          className="relative w-full pl-20 z-10"
        >
          <div className="hidden lg:block">
            <Image
              className="w-full"
              src={mainImage}
              alt="windrose"
              layout="responsive"
            />
          </div>
        </motion.div>
      </div>
      <div className="container-main mx-auto px-4 xl:px-0 relative z-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={animationTextH1}
          className="text-4xl sm:text-5xl md:text-5xl"
        >
          Оренда авто в Україні
        </motion.h1>
        <div className="lg:w-7/12 text-xl">
          <motion.div
            initial={{ scale: 0 }}
            animate={animationCalculateor}
            transition={{ duration: 2 }}
            className="flex text-sm sm:text-3xl md:text-4xl text-red-600 my-5"
          >
            <div className="text">
              <b>
                <div className="textInnerAnimation">
                  Львів
                  <br />
                  Харків
                  <br />
                  Івано-Франківськ
                  <br />
                  Київ
                </div>
              </b>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "-100%" }}
            animate={animationDateTime}
            transition={{ duration: 2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 border rounded-lg my-5 px-7 py-4">
              <motion.div whileHover={{ scale: 1.1 }}>
                <label className="text-gray-400 mb-2">Оберіть дату</label>
                <div className="flex flex-row relative">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => console.log(date)}
                    dateFormat={"dd.MM.yyyy"}
                    minDate={new Date()}
                    // filterDate={(date) => date.getDay() === 4}
                    className="text-black cursor-pointer w-full bg-transparent focus:outline-none removeDefaultIcon"
                  />
                  <span className="absolute right-0 px-2 py-0.5 pointer-events-none">
                    <Image src={svgClanendar} height={20} width={25} />
                  </span>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="ml-0 sm:ml-0 md:ml-4 lg:ml-4"
              >
                <label className="text-gray-400 mb-2">Оберіть час </label>
                <div className="flex flex-row relative">
                  <DatePicker
                    selected={selectedTime}
                    onChange={(time) => setSelectedTime(time)}
                    dateFormat={"HH:mm"}
                    timeInputLabel={<label className="text-lg">Time:</label>}
                    showTimeSelectOnly
                    showTimeInput
                    minTime={new Date()}
                    filterTime={new Date()}
                    className="text-black cursor-pointer w-full bg-transparent focus:outline-none removeDefaultIcon"
                  />
                  <span className="absolute right-0 px-2 py-0.5 pointer-events-none">
                    <Image src={svgBackInTime} height={20} width={25} />
                  </span>
                </div>
              </motion.div>
            </div>
            <div className="border rounded-lg my-5 px-7 py-4">
              <div>
                <h1 className="text-gray-400 mb-2">Подача</h1>
                <select
                  onClick={changeSelectClassName}
                  className={isOpensection}
                >
                  <option>Львів</option>
                  <option>Харків</option>
                  <option>Івано-Франківськ</option>
                  <option>Київ</option>
                </select>
              </div>
            </div>
          </motion.div>
          <motion.button
            onClick={() =>
              router.push("/reserv/mustang", "/reserv/mustang", {
                locale: router.locale,
              })
            }
            whileTap={{ scale: 1.2 }}
            className="bg-red-600 text-white text-lg rounded-lg w-full py-4 hover:bg-red-500 focus:outline-none"
          >
            Обрати авто
          </motion.button>
        </div>
      </div>
    </section>
  );
}
