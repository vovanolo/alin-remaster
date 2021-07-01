import Image from "next/image";
import first from "../../../images/first_assistance.svg";
import second from "../../../images/second_assistance.svg";
import third from "../../../images/third_assistance.svg";
import fourth from "../../../images/fourth_assistance.svg";
import fifth from "../../../images/fifth_assistance.svg";
import sixth from "../../../images/sixth_assistance.svg";

export default function ServicesSection() {
  return (
    <section className="container-main mx-auto px-4 xl:px-0 flex flex-wrap justify-between items-center my-20">
      <div className="lg:w-7/12">
        <p className="text-2xl font-medium opacity-50 mb-3">Что входит?</p>
        <h2 className="text-4xl mb-5">Особые услуги</h2>
        <div className="grid md:grid-cols-2 gap-7 mb-10">
          <div className="flex items-center">
            <Image
              className="mr-3.5"
              src={first}
              alt="first"
              width={98}
              height={98}
            />
            <p>Запись авто на ремонт или проведения техобслуживания</p>
          </div>
          <div className="flex items-center">
            <Image
              className="mr-3.5"
              src={second}
              alt="fourth"
              width={98}
              height={98}
            />
            <p>
              Подбор автозапчастей соответствии с Вашими пожеланиями (б / у,
              новые)
            </p>
          </div>
          <div className="flex items-center">
            <Image
              className="mr-3.5"
              src={third}
              alt="second"
              width={98}
              height={98}
            />
            <p>Страхование авто</p>
          </div>
          <div className="flex items-center">
            <Image
              className="mr-3.5"
              src={fourth}
              alt="fifth"
              width={98}
              height={98}
            />
            <p>Оформление полиса гражданской ответственности</p>
          </div>
          <div className="flex items-center">
            <Image
              className="mr-3.5"
              src={fifth}
              alt="third"
              width={98}
              height={98}
            />
            <p>Заказ эвакуатора</p>
          </div>
          <div className="flex items-center">
            <Image
              className="mr-3.5"
              src={sixth}
              alt="sixth"
              width={98}
              height={98}
            />
            <p>Продажа автомобиля</p>
          </div>
        </div>
      </div>
    </section>
  );
}
