import Image from "next/image";
import benz from "../../../images/benz.png";
import idCard from "../../../images/id_card.svg";
import calendar from "../../../images/calendar (1).svg";
import star from "../../../images/star.svg";
import RentWithDriverForm from "../../RentWithDriverForm";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-wrap items-center overflow-hidden text-white px-0 xl:px-20 pt-24 -mt-24">
      <div className="absolute inset-0 z-0">
        <Image src={benz} layout="fill" />
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      </div>
      <div className="container-main mx-auto px-4 xl:px-0 flex flex-wrap z-10 mb-10">
        <div className="w-full lg:w-5/12 lg:pr-5">
          <h1 className="text-5xl mb-12">Аренда авто с водителем</h1>
          <div className="grid gap-7 mb-10">
            <div className="flex items-center">
              <Image src={idCard} layout="fixed" />
              <p className="ml-3.5">
                Выберите вид трансфера из представленных ниже вариантов
              </p>
            </div>
            <div className="flex items-center">
              <Image src={calendar} layout="fixed" />
              <p className="ml-3.5">
                Выберите вид трансфера из представленных ниже вариантов
              </p>
            </div>
            <div className="flex items-center">
              <Image src={star} layout="fixed" />
              <p className="ml-3.5">
                Выберите вид трансфера из представленных ниже вариантов
              </p>
            </div>
          </div>
        </div>
        <RentWithDriverForm />
      </div>
    </section>
  );
}
