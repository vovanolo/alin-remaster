import { SRLWrapper } from "simple-react-lightbox";
import { useLightbox } from "simple-react-lightbox";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import font from "../../../images/font.png";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useCallBackForm } from "../../Context";

export default function HeroArticle() {
  const callBackForm = useCallBackForm(); // Контекст для коллбек форми
  // Animation into scroll block]
  const [refScroll, intView] = useInView({ threshold: 0.4 }); // { threshold: 0.1 }
  const animation = useAnimation();

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

  const { openLightbox, closeLightbox } = useLightbox();
  // Create an object with the options that you want to use. The options are divided in 4 main objects. You don't need to define them all.
  const options = {
    settings: {
      overlayColor: "rgba(0, 0, 0, 0.8)",
      boxShadow: "0px 50px 49px -30px #fff",
      autoplaySpeed: 3400,
      transitionSpeed: 1200,
    },
    buttons: {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      iconColor: "#ccc",
    },
    caption: {
      captionColor: "white",
      captionFontFamily: "Raleway, sans-serif",
      captionFontWeight: "300",
      boxShadow: "inset 0px -50px 49px -30px #fff",
    },
    progressBar: {
      backgroundColor: "none",
      fillColor: "#ff5268",
    },
    thumbnails: {
      showThumbnails: true,
      thumbnailsAlignment: "start",
      thumbnailsContainerBackgroundColor: "#ddd",
      thumbnailsContainerPadding: "4px",
      thumbnailsGap: "4px 4px",
      thumbnailsIconColor: "#ffffff",
      thumbnailsOpacity: 1,
      thumbnailsPosition: "right",
      thumbnailsSize: ["100px", "80px"],
    },
  };

  // const arrowStyles = {
  //   position: "absolute",
  //   top: "50%",
  //   padding: ".4em",
  //   outline: "none",
  //   zIndex: 2,
  // };

  return (
    <article
      ref={refScroll}
      className="container-main mx-auto px-4 xl:px-0 lg:my-10"
    >
      <h1 className="text-5xl mb-12">Аренда авто с правом выкупа</h1>
      <motion.div initial={{ x: "-100%" }} animate={animation}>
        <div className="grid grid-cols-1 lg:grid-cols-3 border-4 rounded-lg my-10">
          <div className="p-5">
            <h1 className="text-3xl text-center mb-3">Chevrolet Malibu</h1>
            <SRLWrapper options={options}>
              <Carousel
                // renderArrowPrev={(onClickHandler, hasPrev, label) =>
                //   hasPrev && (
                //     <button
                //       type="button"
                //       onClick={onClickHandler}
                //       title={label}
                //       style={{
                //         ...arrowStyles,
                //         left: "0rem",
                //         backgroundColor: "#FFF",
                //       }}
                //     >
                //       LEFT
                //     </button>
                //   )
                // }
                autoPlay
                showThumbs={false}
              >
                <div
                  className="h-44 sm:h-96 lg:h-60 cursor-pointer"
                  onClick={() => openLightbox(2)}
                >
                  <img
                    className="object-cover h-full w-full"
                    src="https://picsum.photos/600/400?grayscale"
                    alt="dogs_benzs_1"
                  />
                </div>
                <div
                  className="h-44 sm:h-96 lg:h-60 cursor-pointer"
                  onClick={() => openLightbox(1)}
                >
                  <img
                    className="object-cover h-full w-full"
                    src="https://picsum.photos/600/350?grayscale"
                    alt="dogs_benzs_2"
                  />
                </div>
              </Carousel>
            </SRLWrapper>
          </div>
          <div>
            <ul className="grid gap-3 p-5">
              <li className="grid grid-cols-2 gap-5">
                <span>Год выпуска</span>
                <span className="text-red-600 font-bold">2017</span>
              </li>
              <li className="grid grid-cols-2 gap-5">
                <span>Привод</span>
                <span className="text-red-600 font-bold">Передній</span>
              </li>
              <li className="grid grid-cols-2 gap-5">
                <span>Пробег</span>
                <span className="text-red-600 font-bold">80 т. км</span>
              </li>
              <li className="grid grid-cols-2 gap-5">
                <span>Двигатель</span>
                <span className="text-red-600 font-bold">1.5 л.</span>
              </li>
              <li className="grid grid-cols-2 gap-5">
                <span>Трансмиссия</span>
                <span className="text-red-600 font-bold">Автомат</span>
              </li>
              <li className="grid grid-cols-2 gap-5">
                <span>Кондиционер</span>
                <span className="text-red-600 font-bold">✔</span>
              </li>
              <li className="grid grid-cols-2 gap-5">
                <span>Аудио-система</span>
                <span className="text-red-600 font-bold">✔</span>
              </li>
              <li className="grid grid-cols-2 gap-5">
                <span>Cигнализация</span>
                <span className="text-red-600 font-bold">✖</span>
              </li>
              <li className="grid grid-cols-2 gap-5">
                <span>Цвет</span>
                <span className="text-red-600 font-bold">Чорний</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="border-l bg-gray-100 border-b rounded-bl-lg pt-3">
              <li className="grid grid-cols-2 gap-5 px-5 py-2">
                <span>Цена авто:</span>
                <span className="text-red-600 font-bold">12000$</span>
              </li>
              <li className="grid grid-cols-2 gap-5 border-b px-5 py-2">
                <span>Задаток:</span>
                <span className="text-red-600 font-bold">1000$</span>
              </li>
              <li className="col-span-2 font-bold px-5 pt-3">Рассрочка:</li>
              <li className="grid grid-cols-2 gap-5 px-5 py-2">
                <span>Полная стоимость аренды:</span>
                <span className="text-red-600 font-bold">1170$/міс.</span>
              </li>
              <li className="grid grid-cols-2 gap-5 px-5 py-2">
                <span>Оплата стоимости авто:</span>
                <span className="text-red-600 font-bold">1000$/міс.</span>
              </li>
              <li className="grid grid-cols-2 gap-5 px-5 py-2">
                <span>Стоимость аренды с правом выкупа:</span>
                <span className="text-red-600 font-bold">585$/міс.</span>
              </li>
              <li className="grid grid-cols-2 gap-5 border-t px-5 py-2">
                <span>Полная стоимость:</span>
                <span className="text-red-600 font-bold">12000$+оренда</span>
              </li>
            </ul>
            <button
              onClick={callBackForm.triggerToggleForm}
              className="w-full rounded-lg bg-red-600 text-white px-7 py-2 mt-5 
          hover:bg-red-800 focus:outline-none transition duration-300"
            >
              Купить
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 border-4 rounded-lg my-10">
          <div className="p-5">
            <h1 className="text-3xl text-center mb-3">Chevrolet Malibu</h1>
            <SRLWrapper options={options}>
              <Carousel
                // renderArrowPrev={(onClickHandler, hasPrev, label) =>
                //   hasPrev && (
                //     <button
                //       type="button"
                //       onClick={onClickHandler}
                //       title={label}
                //       style={{
                //         ...arrowStyles,
                //         left: "0rem",
                //         backgroundColor: "#FFF",
                //       }}
                //     >
                //       LEFT
                //     </button>
                //   )
                // }
                autoPlay
                showThumbs={false}
              >
                <div
                  className="h-44 sm:h-96 lg:h-60 cursor-pointer"
                  onClick={() => openLightbox(2)}
                >
                  <img
                    className="object-cover h-full w-full"
                    src="https://picsum.photos/600/400?grayscale"
                    alt="dogs_benzs_1"
                  />
                </div>
                <div
                  className="h-44 sm:h-96 lg:h-60 cursor-pointer"
                  onClick={() => openLightbox(1)}
                >
                  <img
                    className="object-cover h-full w-full"
                    src="https://picsum.photos/600/350?grayscale"
                    alt="dogs_benzs_2"
                  />
                </div>
              </Carousel>
            </SRLWrapper>
          </div>
          <div>
            <ul className="grid gap-3 p-5">
              <li className="grid grid-cols-2 gap-5">
                <span>Год выпуска</span>
                <span className="text-red-600 font-bold">2017</span>
              </li>
              <li className="grid grid-cols-2 gap-5">
                <span>Привод</span>
                <span className="text-red-600 font-bold">Передній</span>
              </li>
              <li className="grid grid-cols-2 gap-5">
                <span>Пробег</span>
                <span className="text-red-600 font-bold">80 т. км</span>
              </li>
              <li className="grid grid-cols-2 gap-5">
                <span>Двигатель</span>
                <span className="text-red-600 font-bold">1.5 л.</span>
              </li>
              <li className="grid grid-cols-2 gap-5">
                <span>Трансмиссия</span>
                <span className="text-red-600 font-bold">Автомат</span>
              </li>
              <li className="grid grid-cols-2 gap-5">
                <span>Кондиционер</span>
                <span className="text-red-600 font-bold">✔</span>
              </li>
              <li className="grid grid-cols-2 gap-5">
                <span>Аудио-система</span>
                <span className="text-red-600 font-bold">✔</span>
              </li>
              <li className="grid grid-cols-2 gap-5">
                <span>Cигнализация</span>
                <span className="text-red-600 font-bold">✖</span>
              </li>
              <li className="grid grid-cols-2 gap-5">
                <span>Цвет</span>
                <span className="text-red-600 font-bold">Чорний</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="border-l bg-gray-100 border-b rounded-bl-lg pt-3">
              <li className="grid grid-cols-2 gap-5 px-5 py-2">
                <span>Цена авто:</span>
                <span className="text-red-600 font-bold">12000$</span>
              </li>
              <li className="grid grid-cols-2 gap-5 border-b px-5 py-2">
                <span>Задаток:</span>
                <span className="text-red-600 font-bold">1000$</span>
              </li>
              <li className="col-span-2 font-bold px-5 pt-3">Рассрочка:</li>
              <li className="grid grid-cols-2 gap-5 px-5 py-2">
                <span>Полная стоимость аренды:</span>
                <span className="text-red-600 font-bold">1170$/міс.</span>
              </li>
              <li className="grid grid-cols-2 gap-5 px-5 py-2">
                <span>Оплата стоимости авто:</span>
                <span className="text-red-600 font-bold">1000$/міс.</span>
              </li>
              <li className="grid grid-cols-2 gap-5 px-5 py-2">
                <span>Стоимость аренды с правом выкупа:</span>
                <span className="text-red-600 font-bold">585$/міс.</span>
              </li>
              <li className="grid grid-cols-2 gap-5 border-t px-5 py-2">
                <span>Полная стоимость:</span>
                <span className="text-red-600 font-bold">12000$+оренда</span>
              </li>
            </ul>
            <button
              onClick={callBackForm.triggerToggleForm}
              className="w-full rounded-lg bg-red-600 text-white px-7 py-2 mt-5 
          hover:bg-red-800 focus:outline-none transition duration-300"
            >
              Купить
            </button>
          </div>
        </div>
      </motion.div>
    </article>
  );
}
