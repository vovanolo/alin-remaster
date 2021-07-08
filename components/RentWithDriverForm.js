import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";
import { Formik, Field } from "formik";
import DatePicker from "react-datepicker";
import * as yup from "yup";
import Image from "next/image";
import svgClanendar from "../images/calendar.svg";
import svgBackInTime from "../images/back-in-time.svg";

let schema = yup.object().shape({
  rent_name: yup.string().required(),
  rent_phone: yup.number().required().positive().integer(),
  rent_email: yup.string().required().email(),
  date: yup.date().required(),
  time: yup.date().default(function () {
    return new Date();
  }),
  locationFrom: yup.string().required(),
});

export default function RentWithDriverForm() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  const ExampleCustomTimeInput = ({ date, value, onChange }) => (
    <input
      type="time"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="text-lg font-normal py-2 px-2"
    />
  );

  return (
    <Formik
      initialValues={{
        rent_name: "",
        rent_phone: "",
        rent_email: "",
        rent_comment: "",
        date: selectedDate,
        time: selectedTime,
        locationFrom: "Львов",
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          resetForm({});
          alert(JSON.stringify(values, null, 2));
          alert(selectedDate, selectedTime);
          setSubmitting(false);
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
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="border rounded-lg p-5 md:p-10">
          <div className="grid md:grid-cols-5 border rounded-lg px-5 md:px-7 mb-10 py-4">
            <div className="col-span-2">
              <label>Выберите дату</label>
              <div className="flex relative">
                {/* <input
                  className="w-full bg-transparent mt-2 focus:outline-none removeDefaultIcon"
                  name="date"
                  type="date"
                  min="07/07/2021"
                  value={values.date}
                /> */}
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat={"dd/MM/yyyy"}
                  minDate={new Date()}
                  filterDate={(date) => date.getDay() === 4}
                  className="cursor-pointer w-full mt-2 bg-transparent focus:outline-none removeDefaultIcon"
                />
                <span className="cursor-pointer absolute right-0 mt-2 pointer-events-none">
                  <Image src={svgClanendar} height={20} width={25} />
                </span>
              </div>
            </div>
            <div></div>
            <div className="col-span-2">
              <label>Выберите время</label>
              <div className="flex relative">
                <DatePicker
                  selected={selectedTime}
                  onChange={(time) => setSelectedTime(time)}
                  dateFormat={"HH:mm"}
                  timeInputLabel={<label className="text-lg">Time:</label>}
                  showTimeSelectOnly
                  showTimeInput
                  minTime={new Date()}
                  filterTime={new Date()}
                  customTimeInput={<ExampleCustomTimeInput />}
                  value={values.time}
                  className="cursor-pointer w-full mt-2 bg-transparent focus:outline-none removeDefaultIcon"
                />
                <span className="cursor-pointer absolute right-0 mt-2 pointer-events-none">
                  <Image src={svgBackInTime} height={20} width={25} />
                </span>
              </div>
            </div>
          </div>

          <div className="relative border rounded-lg px-5 md:px-7 py-4">
            <label>Подача</label>
            <Field
              className="cursor-pointer w-full bg-transparent py-2 hover:text-red-600 focus:outline-none"
              name="locationFrom"
              as="select"
              value={values.locationFrom}
            >
              <option className="text-white bg-gray-800" value="Львов">
                Львов
              </option>
              <option className="text-white bg-gray-800" value="Харьков">
                Харьков
              </option>
              <option
                className="text-white bg-gray-800"
                value="Ивано-Франковск"
              >
                Ивано-Франковск
              </option>
              <option className="text-white bg-gray-800" value="Киев">
                Киев
              </option>
            </Field>
          </div>
          <p className="text-red-600 px-5 md:px-7 mb-10">
            {errors.locationFrom && touched.locationFrom && errors.locationFrom}
          </p>

          <div
            className={
              !errors.rent_name && !touched.rent_name
                ? "relative border rounded-lg px-5 md:px-7 py-1"
                : "relative border border-red-600 rounded-lg px-5 md:px-7 py-1"
            }
          >
            <input
              type="text"
              name="rent_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.rent_name}
              className="w-full bg-transparent py-2 focus:outline-none"
              placeholder="Имя"
            />
          </div>
          <p className="text-red-600 px-5 md:px-7 mb-10">
            {errors.rent_name && touched.rent_name && errors.rent_name}
          </p>

          <div className="grid md:grid-cols-2 gap-10 md:gap-5">
            <div
              className={
                !errors.rent_phone && !touched.rent_phone
                  ? "relative border rounded-lg px-5 md:px-7 py-1"
                  : "relative border border-red-600 rounded-lg px-5 md:px-7 py-1"
              }
            >
              <input
                type="text"
                name="rent_phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rent_phone}
                className="w-full bg-transparent py-2 focus:outline-none"
                placeholder="Телефон"
              />
            </div>
            <div
              className={
                !errors.rent_email && !touched.rent_email
                  ? "relative border rounded-lg px-5 md:px-7 py-1"
                  : "relative border border-red-600 rounded-lg px-5 md:px-7 py-1"
              }
            >
              <input
                type="text"
                name="rent_email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rent_email}
                className="w-full bg-transparent py-2 focus:outline-none"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:gap-5 mb-10">
            <p className="text-red-600 px-5 md:px-7">
              {errors.rent_phone && touched.rent_phone && errors.rent_phone}
            </p>
            <p className="text-red-600 px-5 md:px-7">
              {errors.rent_email && touched.rent_email && errors.rent_email}
            </p>
          </div>

          <div className="relative border rounded-lg px-5 md:px-7 my-10 py-1">
            <textarea
              type="text"
              name="rent_comment"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.rent_comment}
              className="w-full bg-transparent py-2 focus:outline-none"
              placeholder="Комментарий"
            ></textarea>
          </div>

          <button
            disabled={isSubmitting}
            className="absolute top-full right-10 transform -translate-y-1/2 bg-red-600 text-xl rounded-lg px-5 md:px-7 py-1"
          >
            Бронировать
          </button>
        </form>
      )}
    </Formik>
  );
}
