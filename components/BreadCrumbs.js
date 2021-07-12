import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function BreadCrumbs(props) {
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
  let currUrl = router.route;
  let curr = router.asPath;

  function isLast(index) {
    return index === props.crumbs.length - 1;
  }

  return (
    <div>
      <p></p>
      <ul className="flex">
        {props.crumbs.map((crumb, index) => {
          const disabled = isLast(index)
            ? "cursor-default text-gray-400"
            : "cursor-pointer text-black";

          return (
            <li key={index}>
              {crumb.slug === curr ? (
                <div>
                  <button
                    className={`${disabled}`}
                    onClick={() => props.selected(crumb.path)}
                  >
                    {crumb.name}
                    <span className="mx-2">{!isLast(index) ? "/" : null}</span>
                  </button>
                  <button
                    className={
                      !isLast(index)
                        ? "cursor-default text-gray-400"
                        : "cursor-pointer text-black"
                    }
                    onClick={() => props.selected(crumb.slug)}
                  >
                    {crumb.nameCity}
                    <span className="mx-2">{isLast(index) ? "/" : null}</span>
                  </button>
                </div>
              ) : crumb.slugReserv === curr ? (
                <div>
                  <button
                    className={`${disabled}`}
                    onClick={() => props.selected(crumb.path)}
                  >
                    {crumb.name}
                    <span className="mx-2">{!isLast(index) ? "/" : null}</span>
                  </button>
                  <button
                    className={
                      isLast(index)
                        ? "cursor-default text-gray-400"
                        : "cursor-pointer text-black"
                    }
                    onClick={() => props.selected(crumb.slug)}
                  >
                    {crumb.nameCity}
                    <span className="mx-2">{!isLast(index) ? "/" : null}</span>
                  </button>
                  <button
                    className={
                      !isLast(index)
                        ? "cursor-default text-gray-400"
                        : "cursor-pointer text-black"
                    }
                    onClick={() => props.selected(crumb.slugReserv)}
                  >
                    {crumb.nameCar}
                    <span className="mx-2">{isLast(index) ? "/" : null}</span>
                  </button>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>

      {currUrl === "/rent/[id]" ? (
        <motion.div
          ref={refScroll}
          initial={{ width: 0 }}
          animate={animation}
          transition={{ duration: 2 }}
          className="grid grid-cols-2 text-lg my-5"
        >
          <div className="br-arrow-right relative bg-red-600 text-white text-center py-4">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={animationText}
              transition={{ delay: 2 }}
            >
              Вибір
            </motion.div>
          </div>
          <div className="bg-gray-100 text-center py-4">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={animationText}
              transition={{ delay: 2 }}
            >
              Бронювання
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          ref={refScroll}
          initial={{ width: 0 }}
          animate={animation}
          transition={{ duration: 2 }}
          className="grid grid-cols-2 text-lg my-5"
        >
          <div className="br-arrow-right-white relative bg-gray-100 text-center py-4">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={animationText}
              transition={{ delay: 2 }}
            >
              Вибір
            </motion.div>
          </div>
          <div className="bg-red-600 text-center text-white py-4">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={animationText}
              transition={{ delay: 2 }}
            >
              Бронювання
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
