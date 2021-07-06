import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import LocalPicker from "./LocalPicker";
import useTranslation from "next-translate/useTranslation";
import urls from "../urls";
import logo from "../images/alin-logo.svg";

function MobileNavBar({ changeHambOnClose }) {
  const router = useRouter();
  let currentUrl = router.route;

  return (
    <div className="block lg:hidden menu-wrap">
      <input
        onClick={changeHambOnClose}
        type="checkbox"
        className="toggler z-10"
      />
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
                <Link href={urls.rentWithDriver}>
                  <a
                    className={
                      currentUrl === "/rentWithDriver" ? "text-red-600" : ""
                    }
                  >
                    Трансфери
                  </a>
                </Link>
              </li>
              <li className="mb-0 md:mb-4  lg:mb-0 hover-trigger transition duration-300">
                <p className="text-white hover:text-red-600 cursor-pointer">
                  Услуги <span className="text-xs">▼</span>
                </p>
                <div className="min-w-max lg:absolute hover-target">
                  <ul className="border-2 text-base bg-white px-4 rounded-xl">
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      <Link href={urls.assistance}>
                        <a
                          className={
                            currentUrl === "/assistance" ? "text-red-600" : ""
                          }
                        >
                          Асистенс
                        </a>
                      </Link>
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      <Link href={urls.additionalServices}>
                        <a
                          className={
                            currentUrl === "/additional-services"
                              ? "text-red-600"
                              : ""
                          }
                        >
                          Дополнительные услуги
                        </a>
                      </Link>
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      <Link href={urls.carSale}>
                        <a
                          className={
                            currentUrl === "/car-sale" ? "text-red-600" : ""
                          }
                        >
                          Автовикуп
                        </a>
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
                      <Link href={urls.loyaltyProgram}>
                        <a>Программа лояльности</a>
                      </Link>
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      <Link href={urls.faq}>
                        <a>faq</a>
                      </Link>
                    </li>
                    <Link href={urls.about}>
                      <a>О нас</a>
                    </Link>
                  </ul>
                </div>
              </li>
              <li className="mb-0 md:mb-4 lg:mb-0 text-white hover:text-red-600 transition duration-300">
                <Link href={urls.news}>
                  <a className={currentUrl === "/news" ? "text-red-600" : ""}>
                    Новости
                  </a>
                </Link>
              </li>
              <li className="mb-0 md:mb-4 lg:mb-0 text-white hover:text-red-600 transition duration-300">
                <Link href={urls.contacts}>
                  <a
                    className={currentUrl === "/contacts" ? "text-red-600" : ""}
                  >
                    Контакти
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const ThemeColors = {
  white: "white",
  black: "black",
  none: "none",
  grey: "rgb(243, 244, 246)",
  dark: "rgb(55, 65, 81)",
};

const Theme = {
  default: {
    inactive: {
      background: ThemeColors.none,
      text: ThemeColors.dark,
      hamburgerColor: ThemeColors.black,
    },
    active: {
      background: ThemeColors.grey,
      text: ThemeColors.dark,
      hamburgerColor: ThemeColors.black,
    },
  },
  other: {
    inactive: {
      background: ThemeColors.none,
      text: ThemeColors.white,
      hamburgerColor: ThemeColors.white,
    },
    active: {
      background: ThemeColors.grey,
      text: ThemeColors.dark,
      hamburgerColor: ThemeColors.black,
    },
  },
  greyOnly: {
    inactive: {
      background: ThemeColors.grey,
      text: ThemeColors.dark,
      hamburgerColor: ThemeColors.black,
    },
    active: {
      background: ThemeColors.grey,
      text: ThemeColors.dark,
      hamburgerColor: ThemeColors.black,
    },
  },
};

const NavState = {
  Active: "active",
  Inactive: "inactive",
};

export default function NavBar({ triggerToggleForm }) {
  const router = useRouter();
  let currentUrl = router.route;

  const [theme, setTheme] = useState(Theme.default);
  const [navState, setNavState] = useState(NavState.Inactive);
  const [hamburgerOnClose, setHamburgerOnClose] = useState(false);
  let { t } = useTranslation();

  const handleWindowScroll = (e) => {
    if (window.scrollY >= 80) {
      setNavState(NavState.Active);
    } else {
      setNavState(NavState.Inactive);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  useEffect(() => {
    if (currentUrl === "/") {
      setTheme(Theme.default);
    } else if (currentUrl === "/assistance") {
      setTheme(Theme.other);
    } else {
      setTheme(Theme.greyOnly);
    }
  }, [currentUrl]);

  const changeHambOnClose = () => {
    setHamburgerOnClose(!hamburgerOnClose);
  };

  return (
    <nav style={{ color: theme[navState].text }}>
      <div
        className="fixed top-0 navbar-color active inset-x-0 py-2 z-20 transition duration-700"
        style={{ background: theme[navState].background }}
      >
        <div className="container-main mx-auto px-4 xl:px-0 flex justify-between">
          <div className="flex z-10">
            <h1>
              <Link href={urls.home}>
                <a>
                  <Image src={logo} width={78} height={49} />
                </a>
              </Link>
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
                <Link href={urls.rentWithDriver}>
                  <a
                    className={
                      currentUrl === "/rentWithDriver" ? "text-red-600" : ""
                    }
                  >
                    Трансфери
                  </a>
                </Link>
              </li>
              <li className="mb-4 lg:mb-0 transition duration-300 hover-trigger">
                <p className="hover:text-red-600 cursor-pointer">
                  Услуги <span className="text-xs">▼</span>
                </p>
                <div className="min-w-max lg:absolute hover-target">
                  <ul className="border text-base text-gray-700 bg-white px-4">
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      <Link href={urls.assistance}>
                        <a
                          className={
                            currentUrl === "/assistance" ? "text-red-600" : ""
                          }
                        >
                          Асистенс
                        </a>
                      </Link>
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      <Link href={urls.additionalServices}>
                        <a
                          className={
                            currentUrl === "/additional-services"
                              ? "text-red-600"
                              : ""
                          }
                        >
                          Дополнительные услуги
                        </a>
                      </Link>
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      <Link href={urls.carSale}>
                        <a
                          className={
                            currentUrl === "/car-sale" ? "text-red-600" : ""
                          }
                        >
                          Автовикуп
                        </a>
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
                      <Link href={urls.loyaltyProgram}>
                        <a>Программа лояльности</a>
                      </Link>
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      <Link href={urls.faq}>
                        <a>Faq</a>
                      </Link>
                    </li>
                    <li className="hover:text-red-600 cursor-pointer my-2">
                      <Link href={urls.about}>
                        <a>О нас</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-4 lg:mb-0 hover:text-red-600 transition duration-300">
                <Link href={urls.news}>
                  <a className={currentUrl === "/news" ? "text-red-600" : ""}>
                    Новости
                  </a>
                </Link>
              </li>
              <li className="mb-4 lg:mb-0 hover:text-red-600 transition duration-300">
                <Link href={urls.contacts}>
                  <a
                    className={currentUrl === "/contacts" ? "text-red-600" : ""}
                  >
                    Контакти
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <button
              onClick={triggerToggleForm}
              className="bg-red-600 text-white text-sm md:text-base rounded-lg px-4 md:px-10 py-2.5 mx-5 main-button
              transform hover:scale-110 button transition duration-300"
            >
              Связь
            </button>
            <LocalPicker />
            <button
              className={
                !hamburgerOnClose
                  ? "menu pointer-events-none ml-5 block lg:hidden z-10"
                  : "menu opened pointer-events-none ml-5 block lg:hidden z-10"
              }
              aria-label="Main Menu"
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 100 100"
                style={{ stroke: theme[navState].hamburgerColor }}
              >
                <path
                  className="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path className="line line2" d="M 20,50 H 80" />
                <path
                  className="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>
          </div>
        </div>
        <MobileNavBar changeHambOnClose={changeHambOnClose} />
      </div>
    </nav>
  );
}
