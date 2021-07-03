import Image from "next/image";
import windrose from "../../../images/thumb__720_704_0_0_crop.png";
import mainImage from "../../../images/thumb__634_394_0_0_crop.png";
import svgClanendar from "../../../images/calendar.svg";
import svgBackInTime from "../../../images/back-in-time.svg";

export default function HeroSection() {
  return (
    <section className="relative flex items-center -mt-24 min-h-screen overflow-hidden">
      <div className="absolute inset-y-0 lg:-right-16 w-full lg:w-1/2 flex items-center pointer-events-none">
        <div className="absolute top-1/2 lg:left-full transform -translate-y-1/2 lg:-translate-x-2/3 w-full opacity-20 object-contain z-0">
          <Image
            className="w-full"
            src={windrose}
            alt="Car"
            layout="responsive"
          />
        </div>
        <div className="hidden lg:block relative w-full pl-20 z-10">
          <Image
            className="w-full"
            src={mainImage}
            alt="windrose"
            layout="responsive"
          />
        </div>
      </div>
      <div className="container-main mx-auto px-4 xl:px-0 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-5xl">
          Оренда авто в Україні
        </h1>
        <div className="lg:w-7/12 text-xl">
          <div className="flex text-sm sm:text-3xl md:text-4xl text-red-600 my-5">
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
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 border rounded-lg my-5 px-7 py-4">
            <div>
              <label className="text-gray-400 mb-2">Оберіть дату</label>
              <div className="flex flex-row relative">
                <input
                  className="w-full text-black removeDefaultIcon"
                  type="date"
                />
                <span
                  className="absolute right-0 px-2 py-0.5 pointer-events-none"
                  id="calend"
                >
                  <Image src={svgClanendar} height={20} width={25} />
                </span>
              </div>
            </div>
            <div>
              <label className="text-gray-400 mb-2">Оберіть час </label>
              <div className="flex flex-row relative">
                <input
                  className="w-full text-black removeDefaultIcon"
                  type="time"
                />
                <span className="absolute right-0 px-2 py-0.5 pointer-events-none">
                  <Image src={svgBackInTime} height={20} width={25} />
                </span>
              </div>
            </div>
          </div>
          <div className="border rounded-lg my-5 px-7 py-4">
            <h1 className="text-gray-400 mb-2">Подача</h1>
            <select className="w-full border px-4 py-2 cursor-pointer ring ring-gray-50 focus:ring-gray-300 focus:ring-offset-4 hover:shadow-xl focus:shadow-xl focus:outline-none transition duration-500">
              <option>Львів</option>
              <option>Харків</option>
              <option>Івано-Франківськ</option>
              <option>Київ</option>
            </select>
          </div>
          <button className="bg-red-600 text-white text-lg rounded-lg w-full py-4 hover:bg-red-500 transition duration-500 focus:outline-none">
            Обрати авто
          </button>
        </div>
      </div>
    </section>
  );
}
