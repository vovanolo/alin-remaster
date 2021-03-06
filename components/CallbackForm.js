import React, { useEffect, useRef, useState } from "react";
import { Formik, useFormik } from "formik";
import { useCallBackForm } from "./Context";

export default function CallbackForm() {
  const callBackForm = useCallBackForm();

  return (
    <section
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center px-4 md:px-0 z-40"
      style={{ display: callBackForm.visible }}
    >
      <div className={callBackForm.callBackFormAnim}>
        <Formik
          initialValues={{ cb_name: "", cb_phone: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.cb_name) {
              errors.cb_name = "Required";
            } else if (!values.cb_phone) {
              errors.cb_phone = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              resetForm({});
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              callBackForm.triggerToggleForm();
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            resetForm,
            /* and other goodies */
          }) => (
            <React.Fragment>
              <button
                onClick={callBackForm.triggerToggleForm}
                className="absolute top-0 right-0 text-3xl text-gray-700 px-4 py-1 focus:outline-none"
              >
                x
              </button>
              <form onSubmit={handleSubmit} className="form-anim mt-4">
                <h2 className="text-2xl text-gray-700">
                  Оставьте свой номер и мы вам перезвоним!
                </h2>
                <div className="my-4">
                  <input
                    type="text"
                    name="cb_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cb_name}
                    className="w-full border-2 px-3 py-1"
                    placeholder="Имя"
                  />
                  <p className="text-red-600">
                    {errors.cb_name && touched.cb_name && errors.cb_name}
                  </p>
                </div>
                <div className="my-4">
                  <input
                    type="text"
                    name="cb_phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cb_phone}
                    className="w-full border-2 px-3 py-1"
                    placeholder="Телефон"
                  />
                  <p className="text-red-600">
                    {errors.cb_phone && touched.cb_phone && errors.cb_phone}
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="transition duration-500 ease-in-out block bg-red-600 hover:bg-red-500 rounded-xl text-white text-lg font-bold text-center main-button px-5 py-2 mt-4 focus:outline-none"
                >
                  Отправить
                </button>
              </form>
            </React.Fragment>
          )}
        </Formik>
      </div>
    </section>
  );
}
