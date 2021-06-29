import Image from "next/image";
import font from "../../../images/font.png";

export default function TextSection() {
  return (
    <section className="relative my-20">
      <div className="lg:absolute left-0 lg:w-1/2">
        <Image src={font} alt="font-car" height={384} layout="responsive" />
      </div>
      <div className="container-main mx-auto px-4 xl:px-0">
        <div className="flex flex-wrap items-center">
          <div className="lg:w-2/3 lg:h-96"></div>
          <div className="lg:w-1/3">
            <p className="my-5">
              Основной принцип работы компании - не просто обслуживание
              автомобилей, а результат и благодарны постоянные клиенты! Именно
              благодаря ей вы сможете сэкономить свое время и нервы. Забудьте о
              безграничных очереди и века потерянного времени.
            </p>
            <p className="mt-4">
              Программа предоставляет вам возможность решить все технические
              вопросы не выходя из дома или офиса. Лишь один звонок и вот
              персональный сервис консультант отправляется вам на помощь.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
