import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import LocalPicker from "./LocalPicker";
import useTranslation from "next-translate/useTranslation";

function MobileBavbar() {
  return (
    <div className="block lg:hidden menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul className="flex-col text-gray-700">
              <li className="mb-0 md:mb-4 lg:mb-0 hover-trigger transition duration-300">
                <p className="text-white hover:text-red-600 cursor-pointer">
                  Прокат <span className="text-xs">▼</span>
                </p>
                <div className="min-w-max lg:absolute hover-target">
                  <ul className="border-2 text-base bg-white px-4 rounded-xl">
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      Прокат авто Львів
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      Прокат авто Харків
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      Прокат авто Івано-Франківськ
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      Прокат авто Київ
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-0 md:mb-4  lg:mb-0 text-white hover:text-red-600 transition duration-300">
                <a href={"/transfers"}>Трансфери</a>
              </li>
              <li className="mb-0 md:mb-4  lg:mb-0 hover-trigger transition duration-300">
                <p className="text-white hover:text-red-600 cursor-pointer">
                  Услуги <span className="text-xs">▼</span>
                </p>
                <div className="min-w-max lg:absolute hover-target">
                  <ul className="border-2 text-base bg-white px-4 rounded-xl">
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      <Link href={"/assistance"}>
                        <a>Асистенс</a>
                      </Link>
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      <Link href={"/additional-services"}>
                        <a> Дополнительные услуги</a>
                      </Link>
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      <Link href={"/car-sale"}>
                        <a>Автовикуп</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-0 md:mb-4  lg:mb-0 hover-trigger transition duration-300">
                <p className="text-white hover:text-red-600 cursor-pointer">
                  О компании <span className="text-xs">▼</span>
                </p>
                <div className="min-w-max lg:absolute hover-target">
                  <ul className="border-2 text-base bg-white px-4 rounded-xl">
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      Программа лояльности
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      Faq
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      О нас
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-0 md:mb-4 lg:mb-0 text-white hover:text-red-600 transition duration-300">
                <Link href={"/news"}>
                  <a>Новости</a>
                </Link>
              </li>
              <li className="mb-0 md:mb-4 lg:mb-0 text-white hover:text-red-600 transition duration-300">
                <Link href={"/contacts"}>Контакти</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NavBar({ triggerToggleForm }) {
  const router = useRouter();
  let currentUrl = router.route;
  const [styleNavbar, setStyleNavbar] = useState("none"); // Стейт для зміни кольору навбару
  const [changeTextColorNavbar, setChangeTextColorNavbar] =
    useState("rgb(55, 65, 81)");
  let { t } = useTranslation();

  useEffect(() => {
    // Change BG Color Navbar
    if (currentUrl !== "/" && currentUrl !== "/assistance") {
      setStyleNavbar("rgb(243, 244, 246)");
    } else {
      setStyleNavbar("none");
      document.addEventListener("scroll", function () {
        if (window.scrollY >= 80) {
          setStyleNavbar("rgb(243, 244, 246)");
        } else {
          setStyleNavbar("none");
        }
      });
    }

    // Change Text Color Navbar in Assistance
    if (currentUrl === "/assistance") {
      setChangeTextColorNavbar("white");
      document.addEventListener("scroll", function () {
        if (window.scrollY >= 80) {
          setChangeTextColorNavbar("rgb(55, 65, 81)");
        } else {
          setChangeTextColorNavbar("white");
        }
      });
    } else {
      setChangeTextColorNavbar("rgb(55, 65, 81)");
    }
  }, []);

  return (
    <nav style={{ color: changeTextColorNavbar }}>
      <div
        className="fixed top-0 navbar-color active inset-x-0 py-2 z-20 transtion duration-700"
        style={{ background: styleNavbar }}
      >
        <div className="container-main mx-auto px-4 xl:px-0 flex justify-between">
          <div className="flex">
            <h1>
              <Link href={"/"}>LOGO</Link>
            </h1>
          </div>
          <div className="flex-1 hidden w-10/12 lg:flex lg:w-auto items-center justify-end text-lg font-normal">
            <ul className="relative w-10/12 lg:w-auto text-lg font-medium lg:flex space-x-6 mr-5">
              <li className="mb-4 lg:mb-0 transition duration-300 hover-trigger">
                <p className="hover:text-red-600 cursor-pointer">
                  {t("common:rent")} <span className="text-xs">▼</span>
                </p>
                <div className="min-w-max lg:absolute hover-target">
                  <ul className="border text-base text-gray-700 bg-white px-4">
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      Прокат авто Львів
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      Прокат авто Харків
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      Прокат авто Івано-Франківськ
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      Прокат авто Київ
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-4 lg:mb-0 hover:text-red-600 transition duration-300">
                <a href={"/transfers"}>Трансфери</a>
              </li>
              <li className="mb-4 lg:mb-0 transition duration-300 hover-trigger">
                <p className="hover:text-red-600 cursor-pointer">
                  Услуги <span className="text-xs">▼</span>
                </p>
                <div className="min-w-max lg:absolute hover-target">
                  <ul className="border text-base text-gray-700 bg-white px-4">
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      <Link href={"/assistance"}>
                        <a>Асистенс</a>
                      </Link>
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      <Link href={"/additional-services"}>
                        <a> Дополнительные услуги</a>
                      </Link>
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      <Link href={"/car-sale"}>
                        <a>Автовикуп</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-4 lg:mb-0 transition duration-300 hover-trigger">
                <p className="hover:text-red-600 cursor-pointer">
                  О компании <span className="text-xs">▼</span>
                </p>
                <div className="min-w-max lg:absolute hover-target">
                  <ul className="border text-base text-gray-700 bg-white px-4">
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      Программа лояльности
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      Faq
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      О нас
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-4 lg:mb-0 hover:text-red-600 transition duration-300">
                <Link href={"/news"}>
                  <a>Новости</a>
                </Link>
              </li>
              <li className="mb-4 lg:mb-0 hover:text-red-600 transition duration-300">
                <Link href={"/contacts"}>Контакти</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <button
              onClick={triggerToggleForm}
              className="bg-red-600 text-white text-sm md:text-base rounded-lg px-4 md:px-10 py-2.5 mx-5 
              hover:bg-red-500 focus:outline-none"
            >
              Связь
            </button>
            <LocalPicker />
            <button className="flex lg:hidden hover:text-red-400 ml-5 focus:outline-none">
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
        <MobileBavbar />
      </div>
    </nav>
  );
}
