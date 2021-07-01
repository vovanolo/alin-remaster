import Image from "next/image";
import bgAssistance from "../../../images/bg_asistans.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-wrap items-center overflow-hidden text-white px-0 xl:px-20 -mt-24">
      <div className="absolute inset-0 z-0">
        <Image
          className="w-full h-full object-cover object-top"
          src={bgAssistance}
          layout="fill"
          alt="benz"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="container-main mx-auto px-4 xl:px-0 flex flex-wrap z-10">
        <div className="lg:w-4/12"></div>
        <div className="lg:w-8/12">
          <h1 className="text-5xl mb-12">Услуга «Alin Assistance»</h1>
          <p>
            Многое, множество звонков, важные встречи, серьезные переговоры? В
            огромном списке будничных дел, совсем нет времени для своего четырех
            колесного железного друга? Ведь тоже требует внимания. Мы стремимся,
            чтобы ваша жизнь была комфортной, чтобы вы имели возможность
            заниматься любимыми делами, поэтому мы разработали уникальную
            программу по обслуживанию клиентов - персональный сервис консультант
            Alin Assistance.
          </p>
        </div>
      </div>
    </section>
  );
}
