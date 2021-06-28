import { useRef, useState } from "react";

export default function CallbackForm({ triggerToggleForm }) {
  return (
    <section className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center px-4 md:px-0 z-40">
      <div className="relative bg-white w-full md:w-1/2 p-5 sm:p-10 container-form transition duration-700">
        <button
          onClick={triggerToggleForm}
          className="absolute top-0 right-0 text-3xl px-4 py-1 focus:outline-none"
        >
          x
        </button>
        <form id="formCallBack" className="form-anim mt-4">
          <h2 className="text-2xl">Оставьте свой номер и мы вам перезвоним!</h2>
          <div className="my-4">
            <input
              type="text"
              className="field_error w-full border-2 px-3 py-1"
              name="cb_name"
              placeholder="Имя"
            />
            <p className="text-sm text-red-600 mt-1" id="error-cb_name"></p>
          </div>
          <div className="my-4">
            <input
              type="text"
              className="field_error w-full border-2 px-3 py-1"
              name="cb_phone"
              placeholder="Телефон"
            />
            <p className="text-sm text-red-600 mt-1" id="error-cb_phone"></p>
          </div>
          <button
            id="btnSendCallBack"
            className="transition duration-500 ease-in-out block bg-red-600 hover:bg-red-500 rounded-xl text-white text-lg font-bold text-center px-5 py-2 mt-4 focus:outline-none"
          >
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
}
