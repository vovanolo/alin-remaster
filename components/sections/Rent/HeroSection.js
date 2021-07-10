import { useRouter } from "next/router";
import { useState } from "react";
import urls from "../../../urls";
import BreadCrumbs from "../../BreadCrumbs";

export default function HeroSection() {
  const router = useRouter();
  let currUrl = router.route;

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
    <article className="container-main mx-auto px-4 xl:px-0">
      <BreadCrumbs crumbs={crumbs} selected={selected} />
      {currUrl === "/rent/[id]" ? (
        <div className="grid grid-cols-2 text-lg my-5">
          <div className="br-arrow-right relative bg-red-600 text-white text-center py-4">
            Вибір
          </div>
          <div className="bg-gray-100 text-center py-4">Бронювання</div>
        </div>
      ) : (
        <div className="grid grid-cols-2 text-lg my-5">
          <div className="br-arrow-right-white relative bg-gray-100 text-center py-4">
            Вибір
          </div>
          <div className="bg-red-600 text-center text-white py-4">
            Бронювання
          </div>
        </div>
      )}
    </article>
  );
}
