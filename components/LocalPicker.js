import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function LocalPicker() {
  const router = useRouter();
  const container = useRef(); // Реф для перевірки hendleOutSide click dropdown
  const [dropdownLang, setDropdownLang] = useState(false); // Open and Close Dropdown Navnar Lang

  const triggerToggle = () => {
    setDropdownLang(!dropdownLang);
  };

  // Закриваємо dropdown якщо не на жали на нього
  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setDropdownLang(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  });

  const changeLanguagesUA = () => {
    router.push(router.asPath, router.asPath, { locale: "ua" });
    setDropdownLang(false);
  };

  const changeLanguagesRU = () => {
    router.push(router.asPath, router.asPath, { locale: "ru" });
    setDropdownLang(false);
  };

  const changeLanguagesPL = () => {
    router.push(router.asPath, router.asPath, { locale: "pl" });
    setDropdownLang(false);
  };

  const changeLanguagesEN = () => {
    router.push(router.asPath, router.asPath, { locale: "en" });
    setDropdownLang(false);
  };

  return (
    <div className="relative transition deley-300" ref={container}>
      <button
        onClick={triggerToggle}
        className="uppercase w-12 hover:text-red-600 focus:outline-none"
      >
        {router.locale} <span className="text-xs">▼</span>
      </button>
      {dropdownLang ? (
        <div className="absolute right-0 text-gray-700 mt-4 z-10">
          <ul className="border text-base bg-white px-4 dropdown-lang">
            <li
              onClick={changeLanguagesUA}
              className="hover:text-red-600 cursor-pointer my-2"
            >
              Українська
            </li>
            <li
              onClick={changeLanguagesRU}
              className="hover:text-red-600 cursor-pointer my-2"
            >
              Русский
            </li>
            <li
              onClick={changeLanguagesEN}
              className="hover:text-red-600 cursor-pointer my-2"
            >
              English
            </li>
            <li
              onClick={changeLanguagesPL}
              className="hover:text-red-600 cursor-pointer my-2"
            >
              Poland
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
