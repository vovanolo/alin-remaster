import Link from "next/link";
import { useState } from "react";

function MobileBavbar({ leftcss }) {
  return (
    <div
      className="transition duration-500 fixed inset-0 z-20"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <div
        className="fixed min-w-full z-30 pointer-events-none transition duration-500"
        style={{ left: leftcss }}
      >
        <div className="w-9/12 lg:w-5/12 h-full bg-white pointer-events-auto">
          <div className="w-full bg-gray-100 flex justify-between p-2 relative z-10">
            <h1>
              <Link href={"/"}>LOGO</Link>
            </h1>
            <button
              className="border-2 border-gray-700 rounded-lg px-2 my-1 
            hover:text-red-600 hover:border-red-600 focus:outline-none"
            >
              <span className="text-4xl leading-none">x</span>
            </button>
          </div>
          <div className="w-full min-h-screen overflow-hidden p-2 pt-4">
            <ul className="text-lg font-medium space-y-4">
              <li className="mb-4 lg:mb-0">
                <a href={"/procat"}>
                  Прокат <span className="text-xs">▼</span>
                </a>
              </li>
              <li className="mb-4 lg:mb-0">
                <a href={"/transfers"}>Трансфери</a>
              </li>
              <li className="mb-4 lg:mb-0">
                <a href={"/ufu"}>
                  Услуги <span className="text-xs">▼</span>
                </a>
              </li>
              <li className="mb-4 lg:mb-0">
                <a href={"/about"}>
                  О компании <span className="text-xs">▼</span>
                </a>
              </li>
              <li className="mb-4 lg:mb-0">
                <a href={"/news"}>Новости</a>
              </li>
              <li className="mb-4 lg:mb-0">
                <Link href={"/contacts"}>Контакти</Link>
              </li>
            </ul>
            <hr className="mt-5 mb-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NavBar() {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  const [leftcss, setleftcss] = useState("-100%");

  const triggerToggle = () => {
    setSideBarToggle(!sideBarToggle);
    setleftcss("0");
  };

  return (
    <nav className="text-gray-700">
      <div className="fixed top-0 inset-x-0 bg-gray-100 py-2 z-20">
        <div className="container-main mx-auto px-4 xl:px-0 flex justify-between">
          <div className="flex">
            <h1>
              <Link href={"/"}>LOGO</Link>
            </h1>
          </div>
          <div className="flex-1 hidden w-10/12 lg:flex lg:w-auto items-center justify-end">
            <ul className="text-lg font-medium flex space-x-6">
              <li className="mb-4 lg:mb-0">
                <a href={"/procat"}>
                  Прокат <span className="text-xs">▼</span>
                </a>
              </li>
              <li className="mb-4 lg:mb-0">
                <a href={"/transfers"}>Трансфери</a>
              </li>
              <li className="mb-4 lg:mb-0">
                <a href={"/ufu"}>
                  Услуги <span className="text-xs">▼</span>
                </a>
              </li>
              <li className="mb-4 lg:mb-0">
                <a href={"/about"}>
                  О компании <span className="text-xs">▼</span>
                </a>
              </li>
              <li className="mb-4 lg:mb-0">
                <a href={"/news"}>Новости</a>
              </li>
              <li className="mb-4 lg:mb-0">
                <Link href={"/contacts"}>Контакти</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <button
              className="bg-red-600 text-white text-sm md:text-base rounded-lg px-4 md:px-10 py-2.5 mx-5 
          hover:bg-red-500 focus:outline-none"
            >
              Связь
            </button>
            <div>
              RU <span className="text-xs">▼</span>
            </div>
            <button
              onClick={triggerToggle}
              className="flex lg:hidden hover:text-red-400 ml-5 focus:outline-none"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 10C7 9.44772 7.44772 9 8 9H22C22.5523 9 23 9.44772 23 10C23 10.5523 22.5523 11 22 11H8C7.44772 11 7 10.5523 7 10ZM7 15C7 14.4477 7.44772 14 8 14H22C22.5523 14 23 14.4477 23 15C23 15.5523 22.5523 16 22 16H8C7.44772 16 7 15.5523 7 15ZM8 19C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21H22C22.5523 21 23 20.5523 23 20C23 19.4477 22.5523 19 22 19H8Z"
                  fill="black"
                ></path>
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="7"
                  y="9"
                  width="16"
                  height="12"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 10C7 9.44772 7.44772 9 8 9H22C22.5523 9 23 9.44772 23 10C23 10.5523 22.5523 11 22 11H8C7.44772 11 7 10.5523 7 10ZM7 15C7 14.4477 7.44772 14 8 14H22C22.5523 14 23 14.4477 23 15C23 15.5523 22.5523 16 22 16H8C7.44772 16 7 15.5523 7 15ZM8 19C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21H22C22.5523 21 23 20.5523 23 20C23 19.4477 22.5523 19 22 19H8Z"
                    fill="white"
                  ></path>
                </mask>
                <g mask="url(#mask0)">
                  <rect width="30" height="30" fill="#2C2738"></rect>
                </g>
              </svg>
            </button>
          </div>
        </div>
        {!sideBarToggle ? null : <MobileBavbar leftcss={leftcss} />}
      </div>
    </nav>
  );
}