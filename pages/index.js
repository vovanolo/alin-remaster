import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
// import pictureThumb from "../public/thumb__720_704_0_0_crop.webp";
import mainImage from "../public/thumb__634_394_0_0_crop.png";
import windrose from "../public/thumb__720_704_0_0_crop.png";

export default function Home() {
  return (
    <MainLayout title={"Home"}>
      <section className="relative flex items-center -mt-24 min-h-screen overflow-hidden">
        <div className="absolute inset-y-0 lg:-right-16 w-full lg:w-1/2 flex items-center pointer-events-none">
          <div className="absolute top-1/2 lg:left-full transform -translate-y-1/2 lg:-translate-x-2/3 w-full opacity-20 object-contain z-0">
            <Image className="w-full" src={windrose} alt="Car" />
          </div>
          <div className="hidden lg:block relative w-full pl-20 z-10">
            <Image className="w-full" src={mainImage} alt="windrose" />
          </div>
        </div>
        <div className="container-main mx-auto px-4 xl:px-0 relative z-10">
          <h1 className="text-4xl md:text-5xl">Оренда авто в Україні</h1>
          <div className="lg:w-7/12 text-xl">
            <div className="text-3xl md:text-4xl text-red-600 my-5">
              <marquee>Львів</marquee>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 border rounded-lg my-5 px-7 py-4">
              <div>
                <label className="text-gray-400">
                  Оберіть дату
                  <input className="w-full text-black" type="date" />
                </label>
              </div>
              <div>
                <label className="text-gray-400">
                  Оберіть час
                  <input className="w-full text-black" type="time" />
                </label>
              </div>
            </div>
            <div className="border rounded-lg my-5 px-7 py-4">
              <h1 className="text-gray-400">Подача</h1>
              <select className="w-full border px-4 py-2 cursor-pointer focus:outline-none">
                <option>Львів</option>
                <option>Львів</option>
                <option>Львів</option>
                <option>Львів</option>
              </select>
            </div>
            <button className="bg-red-600 text-white text-lg rounded-lg w-full py-4 hover:bg-red-500 transition duration-500 focus:outline-none">
              Обрати авто
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
