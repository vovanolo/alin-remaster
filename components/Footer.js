import urls from "../urls";
import Link from "next/link";
import Image from "next/image";
import email from "../../alin-remaster/images/email.svg";
import phone from "../../alin-remaster/images/phone.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container-main mx-auto px-4 xl:px-0 my-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div>
            <img
              width="78"
              height="49"
              src="https://alin.ua/themes/alin/assets/images/alin-logo.svg"
              alt="logo"
            />
            <div className="my-5">
              <a
                href="https://www.instagram.com/alin_rent_a_car/"
                target="_blank"
                rel="nofollow"
              >
                <svg
                  className="inline-block stroke-current text-pink-600 hover:text-red-200 transition duration-700"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.25 2.5H8.75C5.29822 2.5 2.5 5.29822 2.5 8.75V21.25C2.5 24.7018 5.29822 27.5 8.75 27.5H21.25C24.7018 27.5 27.5 24.7018 27.5 21.25V8.75C27.5 5.29822 24.7018 2.5 21.25 2.5Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M19.9996 14.2125C20.1539 15.2528 19.9762 16.3153 19.4918 17.2488C19.0075 18.1823 18.2411 18.9393 17.3017 19.4121C16.3623 19.8849 15.2977 20.0495 14.2594 19.8824C13.221 19.7153 12.2618 19.2251 11.5182 18.4815C10.7745 17.7378 10.2843 16.7786 10.1172 15.7403C9.95014 14.702 10.1147 13.6374 10.5875 12.698C11.0604 11.7586 11.8174 10.9922 12.7509 10.5078C13.6844 10.0234 14.7468 9.84575 15.7871 10C16.8483 10.1574 17.8307 10.6518 18.5893 11.4104C19.3478 12.1689 19.8423 13.1514 19.9996 14.2125Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21.875 8.125H21.8875"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/alin_services_for_you-107208224245653"
                className="mx-3"
                target="_blank"
                rel="nofollow"
              >
                <svg
                  className="inline-block stroke-current text-blue-400 hover:text-blue-600 transition duration-700"
                  width="16"
                  height="28"
                  viewBox="0 0 16 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 1.5H10.75C9.0924 1.5 7.50269 2.15848 6.33058 3.33058C5.15848 4.50269 4.5 6.0924 4.5 7.75V11.5H0.75V16.5H4.5V26.5H9.5V16.5H13.25L14.5 11.5H9.5V7.75C9.5 7.41848 9.6317 7.10054 9.86612 6.86612C10.1005 6.6317 10.4185 6.5 10.75 6.5H14.5V1.5Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
              <a
                href="https://youtube.com/channel/UCNaXUlv5bmiLd3DKzJ_pt9w"
                target="_blank"
                rel="nofollow"
              >
                <svg
                  className="inline-block stroke-current text-red-600 hover:text-red-200 transition duration-700"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.5001 25.7413C19.1857 26.4328 12.8146 26.4328 6.50012 25.7413C5.40362 25.6158 4.32819 24.5984 4.15356 23.5C3.38892 18.5292 3.38892 13.4707 4.15356 8.49998C4.32825 7.40153 5.40356 6.38425 6.50012 6.25861C12.8146 5.56712 19.1857 5.56712 25.5001 6.25861C26.5963 6.38428 27.6722 7.40144 27.8467 8.49998C28.6113 13.4707 28.6113 18.5292 27.8467 23.5C27.6722 24.5984 26.5969 25.6159 25.5001 25.7413Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M20 16L14 12V20L20 16Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <ul className="text-base">    <li role="presentation" className="  my-2">
            <Link href="#">
              <a className="text-red-600 cursor-pointer perent-link">
                Послуги
              </a>
            </Link>

            <ul className="text-base">
              <li role="presentation" className="  my-2">
                <Link href={urls.rentWithDriver}>
                  <a className=" hover:text-red-600">Трансфери</a>
                </Link>
              </li>
              <li role="presentation" className="  my-2">
                <Link href={urls.assistance}>
                  <a className=" hover:text-red-600">Асистенс</a>
                </Link>
              </li>
              <li role="presentation" className="  my-2">
                <Link href={urls.contacts}>
                  <a className="hover:text-red-600">Контакти</a>
                </Link>
              </li>
              <li role="presentation" className="  my-2">
                <Link href={urls.carSale}>
                  <a className=" hover:text-red-600">Автовикуп</a>
                </Link>
              </li>
            </ul>
          </li>
          </ul>
          <ul className="text-lg font-medium lg:flex">
            <li role="presentation">
              <Link href={urls.about}>
                <a className=" text-red-600  cursor-pointer perent-link">
                  Про компанію
                </a>
              </Link>
              <ul className="text-base">
                <li role="presentation" className="  my-2">
                  <Link href={urls.rentConditions}>
                    <a className=" hover:text-red-600">Умови оренди</a>
                  </Link>
                </li>
                <li role="presentation" className="my-2">
                  <Link href={urls.about}>
                    <a className=" hover:text-red-600">Про нас</a>
                  </Link>
                </li>
                <li role="presentation" className="  my-2">
                  <Link href={urls.faq}>
                    <a className=" hover:text-red-600">Часті запитання</a>
                  </Link>
                </li>
                <li role="presentation" className="  my-2">
                  <Link href={urls.confidentialPolicy}>
                    <a className=" hover:text-red-600">
                      Політика конфіденційності
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="text-lg font-medium lg:flex">
            <li role="presentation" className=" ">
              <a href="#" className="text-red-600  cursor-pointer perent-link">
                Контакти
              </a>

              <ul className="text-base">
                <li role="presentation" className="flex items-center my-2">
                  <Image src={email} height={17} width={17} />
                  <a
                    href="mailto:lviv@alin.ua"
                    className="ml-2 hover:text-red-600"
                  >
                    lviv @alin.ua
                  </a>
                </li>
                <li
                  role="presentation"
                  className=" menu-icon menu-icon-phone my-2"
                >
                  <Image src={phone} height={17} width={17} />
                  <a href="tel:+380987771600" className=" hover:text-red-600">
                    +38 098 777 16 00
                  </a>
                </li>
                <li
                  role="presentation"
                  className=" menu-icon menu-icon-phone my-2"
                >
                  <Image src={phone} height={17} width={17} />
                  <a href="tel:+380987771500" className=" hover:text-red-600">
                    +38 098 777 15 00
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-red-600 py-1">
        <p className="text-center">
          development studio:
          <strong className="border border-red-600 rounded-full px-2">
            <a href="https://uken.in.ua">Uken.in.ua</a>
          </strong>
        </p>
      </div>
    </footer>
  );
}
