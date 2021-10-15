import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import urls from "../../../urls";
import BreadCrumbs from "../../BreadCrumbs";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import ReservForm from "../../ReservForm";
import { useFormik } from "formik";

const nameForm = "data"; // Прив'язка форми і submit button

export default function HeroSection() {
  const [date, setDate] = useState(new Date("dd.MM.yyyy"));
  const [time, setTime] = useState(new Date("HH.mm"));
  const [dateComeBack, setDateComeBack] = useState(new Date("dd.MM.yyyy"));
  const [timeComeBack, setTimeComeBack] = useState(new Date("HH.mm"));
  const [locationFrom, setLocationFrom] = useState("");
  const [checked, setChecked] = useState([]);

  // const [totalPrice, setTotalPrice] = useState(0);
  const [submitButtonActive, setSubmitButtonActive] = useState(false);
  // Animation into scroll block]
  const [refScroll, intView] = useInView(); // { threshold: 0.1 }
  const animation = useAnimation();
  const animationText = useAnimation();

  useEffect(() => {
    if (intView) {
      animation.start({
        width: "100%",
      });
      animationText.start({
        scale: 1,
        opacity: 1,
      });
    }
    if (!intView) {
      animation.start({ width: "0" });
      animationText.start({
        scale: 0,
        opacity: 0,
      });
    }
  }, [intView]);

  const router = useRouter();

  const [crumbs, setCrumbs] = useState([
    {
      name: "Головна",
      nameCity: "Прокат авто Львів",
      nameCar: "R2-car",
      path: urls.home,
      slug: "/rent/lviv",
      slugReserv: "/reserv/r2-car",
    },
    {
      name: "Головна",
      nameCity: "Прокат авто Київ",
      nameCar: "Mustang",
      path: urls.home,
      slug: "/rent/kyiv",
      slugReserv: "/reserv/mustang",
    },
    {
      name: "Головна",
      nameCity: "Прокат авто Харків",
      nameCar: "Rich-cars",
      path: urls.home,
      slug: "/rent/xarcks",
      slugReserv: "/reserv/rich-cars",
    },
  ]);

  const selected = (crumb) => {
    router.push(crumb, crumb, { locale: router.locale });
  };

  return (
    <article ref={refScroll} className="container-main mx-auto px-4 xl:px-0">
      <BreadCrumbs crumbs={crumbs} selected={selected} />
      <h1 className="text-4xl">Бронирование автомобиля</h1>
      <section className="flex flex-wrap">
        <ReservForm
          setDate={setDate}
          setTime={setTime}
          setDateComeBack={setDateComeBack}
          setTimeComeBack={setTimeComeBack}
          setLocationFrom={setLocationFrom}
          setChecked={setChecked}
          nameForm={nameForm}
        />
        <div className="w-full md:w-1/2 lg:w-4/12 md:pl-4">
          <h2 className="text-2xl">Jeep Cherokee</h2>
          <img
            className="w-full"
            srcSet="https://alin.ua/storage/app/uploads/public/bda/d85/8ee/thumb__350_206_0_0_crop.png"
            alt="Jeep Cherokee"
          />
          <div className="border-b mb-5">
            <h3 className="text-lg my-3">В стоимость аренды включено</h3>
          </div>
          <div className="flex">
            <div className="w-9/12">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <b>Подача:</b>
                  <p>{locationFrom}</p>
                </div>
                <div>
                  <span>
                    {date.toLocaleString(router.locale, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span> о </span>
                  <span>
                    {time.toLocaleString(router.locale, {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <b>Возвращение:</b>
                  <p>{locationFrom}</p>
                </div>
                <div>
                  <span>
                    {dateComeBack.toLocaleString(router.locale, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span> о </span>
                  <span>
                    {timeComeBack.toLocaleString(router.locale, {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-3/12 flex justify-center items-center">
              <p>
                <b className="text-4xl">1</b>
                <span className="text-sm">день</span>
              </p>
            </div>
          </div>
          <div className="flex mt-10">
            <p className="w-9/12 text-lg">Цена аренды:</p>
            <p className="w-3/12 text-2xl text-center">
              <span>74</span>€
            </p>
          </div>
          <div className="my-5">
            <label className="flex items-center text-gray-500 text-base cursor-pointer">
              <span>Я согласен с условиями проката</span>
              <input
                onClick={() => setSubmitButtonActive(!submitButtonActive)}
                className="ml-4 cursor-pointer"
                type="checkbox"
              />
            </label>
            <Link href={urls.confidentialPolicy}>
              <a className="text-blue-800">Ознакомиться с условиями проката</a>
            </Link>
          </div>
          <motion.button
            whileTap={{ scale: 1.2, opacity: 0.5 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className={
              submitButtonActive
                ? "bg-red-600 text-white rounded-lg px-10 py-2 mr-3 focus:outline-none"
                : "bg-red-600 text-white rounded-lg px-10 py-2 mr-3 line-through cursor-not-allowed pointer-events-none focus:outline-none"
            }
            form={nameForm}
            type="submit"
          >
            Бронировать
          </motion.button>
        </div>
      </section>
      <motion.div
        initial={{ width: 0 }}
        animate={animation}
        transition={{ duration: 1 }}
        className="container-main mx-auto -inset-x-4 fixed bottom-0 bg-red-600 rounded-t-xl flex justify-between text-white text-lg px-7 py-3 z-10"
      >
        <motion.strong
          initial={{ opacity: 0, scale: 0 }}
          animate={animationText}
          transition={{ delay: 1 }}
        >
          Підсумок:
        </motion.strong>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={animationText}
          transition={{ delay: 1 }}
        >
          <span>74</span>€
        </motion.p>
      </motion.div>
    </article>
  );
}
