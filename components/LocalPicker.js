import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const AnimationDropDown = {
  default: "absolute right-0 text-gray-700 dropdown-lang mt-4 z-10",
  close: "absolute right-0 text-gray-700 dropdown-lang-close mt-4 z-10",
};

export default function LocalPicker() {
  const router = useRouter();
  const container = useRef(); // Реф для перевірки hendleOutSide click dropdown
  const [dropdownLang, setDropdownLang] = useState(AnimationDropDown.close); // Open and Close Dropdown Navnar Lang
  const [tf, setTf] = useState(false);

  const triggerToggle = () => {
    setTf(!tf);
    if (tf) {
      setDropdownLang(AnimationDropDown.close);
    } else {
      setDropdownLang(AnimationDropDown.default);
    }
  };

  // Закриваємо dropdown якщо не на жали на нього
  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setDropdownLang(AnimationDropDown.close);
      setTf(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  });

  const changeLanguagesUA = () => {
    router.push(router.asPath, router.asPath, { locale: "ua" });
    setDropdownLang(AnimationDropDown.close);
    setTf(false);
  };

  const changeLanguagesRU = () => {
    router.push(router.asPath, router.asPath, { locale: "ru" });
    setDropdownLang(AnimationDropDown.close);
    setTf(false);
  };

  const changeLanguagesPL = () => {
    router.push(router.asPath, router.asPath, { locale: "pl" });
    setDropdownLang(AnimationDropDown.close);
    setTf(false);
  };

  const changeLanguagesEN = () => {
    router.push(router.asPath, router.asPath, { locale: "en" });
    setDropdownLang(AnimationDropDown.close);
    setTf(false);
  };

  return (
    <div className="relative" ref={container}>
      <button
        onClick={triggerToggle}
        className="uppercase w-12 hover:text-red-600 focus:outline-none"
      >
        {router.locale} <span className="text-xs">▼</span>
      </button>
      <div className={dropdownLang}>
        <ul className="border text-base bg-white px-4">
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
    </div>
  );
}
