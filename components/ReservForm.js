import Image from "next/dist/client/image";
import { useRef, useEffect, useState, useContext, createContext } from "react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import svgArrow from "../images/circle_switch.svg";
import DatePicker from "react-datepicker";
import svgClanendar from "../images/calendar.svg";
import svgBackInTime from "../images/back-in-time.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useFormContextDate } from "./Context";
// import { FormContext } from "./Context";

let schema = yup.object().shape({
  reserv_name: yup.string().required(),
  reserv_phone: yup.number().required().positive().integer(),
  reserv_email: yup.string().required().email(),
});

export default function ReservForm(props) {
  const [startDate, setStartDate] = useFormContextDate();
  //   let initinalPrice = 74;
  // const [totalPrice, setTotalPrice] = useState(74);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [selectedDateBack, setSelectedDateBack] = useState(new Date());
  const [selectedTimeBack, setSelectedTimeBack] = useState(new Date());

  // Animation into scroll block]
  const [refScroll, intView] = useInView(); // { threshold: 0.1 }
  const animationLeft = useAnimation();
  const animationRight = useAnimation();
  const animationLeftTwo = useAnimation();
  const animationRightTwo = useAnimation();
  const animationSpin = useAnimation();

  useEffect(() => {
    if (intView) {
      animationLeft.start({
        opacity: 1,
        scale: 1,
      });

      animationRight.start({
        opacity: 1,
        scale: 1,
      });

      animationLeftTwo.start({
        opacity: 1,
        scale: 1,
      });

      animationRightTwo.start({
        opacity: 1,
        scale: 1,
      });

      animationSpin.start({
        rotate: 0,
      });
    }
    if (!intView) {
      animationLeft.start({ opacity: 0, scale: 0 });

      animationRight.start({ opacity: 0, scale: 0 });

      animationLeftTwo.start({
        opacity: 0,
        scale: 0,
      });

      animationRightTwo.start({
        opacity: 0,
        scale: 0,
      });

      animationSpin.start({
        rotate: [0, 30, 40, 80, 360],
      });
    }
  }, [intView]);

  return (
    <Formik
      initialValues={{
        locationFrom: "Львів",
        reserv_name: "",
        reserv_phone: "",
        reserv_email: "",
        reserv_comment: "",
        checked: [],
        radioDeposit: "С задатком",
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          resetForm({});
          alert(JSON.stringify(values, null, 2));
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
        <Form
          id={props.nameForm}
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 lg:w-8/12 md:pr-4"
        >
          {/* Choose Date and Time */}
          <h2 className="text-2xl mt-10">Настройка бронирования</h2>
          <div
            ref={refScroll}
            className="relative grid lg:grid-cols-2 gap-5 my-5"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 lg:rotate-0 z-10">
              <motion.div
                initial={{ rotate: 0 }}
                animate={animationSpin}
                transition={{ duration: 1 }}
              >
                <Image src={svgArrow} width={60} height={60} />
              </motion.div>
            </div>
            <div
              style={{ transform: "none" }}
              className="border border-gray-400 rounded-xl px-7 py-4"
            >
              <div>
                <label className="text-gray-500 text-lg">
                  Выберите дату подачи
                </label>
                <div className="relative flex">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat={"dd.MM.yyyy"}
                    minDate={new Date()}
                    // filterDate={(date) => date.getDay() === 4}
                    value={props.setDate(selectedDate)}
                    className="text-black cursor-pointer w-full mt-2 bg-transparent focus:outline-none removeDefaultIcon"
                  />
                  <span className="cursor-pointer absolute right-0 mt-2 pointer-events-none">
                    <Image src={svgClanendar} height={20} width={25} />
                  </span>
                </div>
              </div>
              <div>
                <div className="relative flex">
                  <DatePicker
                    selected={selectedTime}
                    onChange={(time) => setSelectedTime(time)}
                    dateFormat={"HH:mm"}
                    timeInputLabel={<label className="text-lg">Time:</label>}
                    showTimeSelectOnly
                    showTimeInput
                    minTime={new Date()}
                    filterTime={new Date()}
                    value={props.setTime(selectedTime)}
                    className="text-black cursor-pointer w-full mt-2 bg-transparent focus:outline-none removeDefaultIcon"
                  />
                  <span className="cursor-pointer absolute right-0 mt-2 pointer-events-none">
                    <Image src={svgBackInTime} height={20} width={25} />
                  </span>
                </div>
                <label className="text-gray-500 text-lg">выберите время</label>
              </div>
            </div>
            <div className="border border-gray-400 rounded-xl px-7 py-4">
              <div>
                <label className="text-gray-500 text-lg">
                  Выберите дату возвращения
                </label>
                <div className="relative flex">
                  <DatePicker
                    selected={selectedDateBack}
                    onChange={(date) => setSelectedDateBack(date)}
                    dateFormat={"dd.MM.yyyy"}
                    minDate={new Date()}
                    filterDate={(date) => date.getDay() === 4}
                    value={props.setDateComeBack(selectedDateBack)}
                    className="text-black cursor-pointer w-full mt-2 bg-transparent focus:outline-none removeDefaultIcon"
                  />
                  <span className="cursor-pointer absolute right-0 mt-2 pointer-events-none">
                    <Image src={svgClanendar} height={20} width={25} />
                  </span>
                </div>
              </div>
              <div>
                <div className="relative flex">
                  <DatePicker
                    selected={selectedTimeBack}
                    onChange={(time) => setSelectedTimeBack(time)}
                    dateFormat={"HH:mm"}
                    timeInputLabel={<label className="text-lg">Time:</label>}
                    showTimeSelectOnly
                    showTimeInput
                    minTime={new Date()}
                    filterTime={new Date()}
                    value={props.setTimeComeBack(selectedTimeBack)}
                    className="text-black cursor-pointer w-full mt-2 bg-transparent focus:outline-none removeDefaultIcon"
                  />
                  <span className="cursor-pointer absolute right-0 mt-2 pointer-events-none">
                    <Image src={svgBackInTime} height={20} width={25} />
                  </span>
                </div>
                <label className="text-gray-500 text-lg">выберите время</label>
              </div>
            </div>
          </div>

          {/* Select location */}
          <div className="relative grid lg:grid-cols-2 gap-5 my-5 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 lg:rotate-0 z-10">
              <motion.div
                initial={{ rotate: 0 }}
                animate={animationSpin}
                transition={{ duration: 1 }}
              >
                <Image src={svgArrow} width={60} height={60} />
              </motion.div>
            </div>
            <div className="border border-gray-400 rounded-xl px-7 py-4">
              <label className="text-gray-500 text-lg">Подача</label>
              <Field
                className="cursor-pointer w-full bg-white border px-4 py-2 hover:text-red-600 focus:outline-none"
                name="locationFrom"
                as="select"
                value={props.setLocationFrom(values.locationFrom)}
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
              <label className="text-gray-500 text-base">Город, страна</label>
            </div>
            <div className="border border-gray-400 rounded-xl px-7 py-4">
              <label className="text-gray-500 text-lg">Возвращение</label>
              <Field
                className="cursor-pointer w-full bg-gray-400 bg-opacity-25 border px-4 py-2 hover:text-red-600 focus:outline-none pointer-events-none"
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
              <label className="text-gray-500 text-base">Город, страна</label>
            </div>
          </div>

          {/* Checkboxs */}
          <h2 className="text-2xl mt-10 mb-5">Дополнительные услуги</h2>
          <div
            role="group"
            aria-labelledby="checkbox-group"
            className="grid grid-cols-2 gap-5"
          >
            <div>
              <label className="text-gray-500 text-base cursor-pointer">
                <Field
                  className="mr-2"
                  type="checkbox"
                  name="checked"
                  value="Дополнительный водитель / 10‎€"
                />
                Дополнительный водитель / 10‎€
              </label>
            </div>
            <div>
              <label className="text-gray-500 text-base cursor-pointer">
                <Field
                  className="mr-2"
                  type="checkbox"
                  name="checked"
                  value="Детское кресло / 5€ в сутки"
                />
                Детское кресло / 5€ в сутки
              </label>
            </div>
            <div>
              <label className="text-gray-500 text-base cursor-pointer">
                <Field
                  className="mr-2"
                  type="checkbox"
                  name="checked"
                  value="Wi-Fi в машину / 3€ в сутки"
                />
                Wi-Fi в машину / 3€ в сутки
              </label>
            </div>
            <div>
              <label className="text-gray-500 text-base cursor-pointer">
                <Field
                  className="mr-2"
                  type="checkbox"
                  name="checked"
                  value="GPS Навигатор / 5€ в сутки"
                />
                GPS Навигатор / 5€ в сутки
              </label>
            </div>
            <div>
              <label className="text-gray-500 text-base cursor-pointer">
                <Field
                  className="mr-2"
                  type="checkbox"
                  name="checked"
                  value="Электросамокат / 10€ в сутки"
                />
                Электросамокат / 10€ в сутки
              </label>
            </div>
          </div>

          {/* Is deposit */}
          <h2 className="text-2xl mt-10 mb-4">Задаток</h2>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-gray-500 text-base cursor-pointer pointer-events-none">
                <Field
                  className="mr-2"
                  type="radio"
                  name="radioDeposit"
                  value="Без задатка"
                />
                Без задатка
              </label>
            </div>
            <div>
              <label className="text-gray-500 text-base cursor-pointer">
                <Field
                  className="mr-2"
                  type="radio"
                  name="radioDeposit"
                  value="С задатком"
                />
                С задатком
              </label>
            </div>
          </div>

          {/* Form */}
          <div className="my-10">
            <div className="grid md:grid-cols-2 mb-7">
              <div className="md:col-span-2">
                <label className="text-gray-800 text-base">Имя:</label>
                <Field
                  type="text"
                  name="reserv_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border shadow-lg px-3.5 py-2.5 hover:bg-blue-800 hover:bg-opacity-10 focus:bg-blue-800 focus:bg-opacity-10 active:bg-blue-800 active:bg-opacity-10"
                  placeholder={
                    errors.reserv_name &&
                    touched.reserv_name &&
                    errors.reserv_name
                  }
                />
                <p className="text-red-600 px-4 mb-4">
                  {errors.reserv_name &&
                    touched.reserv_name &&
                    errors.reserv_name}
                </p>
              </div>

              <div>
                <div className="md:col-span-2">
                  <label className="text-gray-800 text-base">Телефон:</label>
                  <Field
                    type="text"
                    name="reserv_phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border shadow-lg px-3.5 py-2.5 hover:bg-blue-800 hover:bg-opacity-10 focus:bg-blue-800 focus:bg-opacity-10 active:bg-blue-800 active:bg-opacity-10"
                    placeholder={
                      errors.reserv_phone &&
                      touched.reserv_phone &&
                      errors.reserv_phone
                    }
                  />
                  <p className="text-red-600 px-4 mb-4">
                    {errors.reserv_phone &&
                      touched.reserv_phone &&
                      errors.reserv_phone}
                  </p>
                </div>
              </div>

              <div>
                <div className="md:col-span-2 md:ml-8">
                  <label className="text-gray-800 text-base">Email:</label>
                  <Field
                    type="text"
                    name="reserv_email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border shadow-lg px-3.5 py-2.5 hover:bg-blue-800 hover:bg-opacity-10 focus:bg-blue-800 focus:bg-opacity-10 active:bg-blue-800 active:bg-opacity-10"
                    placeholder={
                      errors.reserv_email &&
                      touched.reserv_email &&
                      errors.reserv_email
                    }
                  />
                  <p className="text-red-600 px-4 mb-4">
                    {errors.reserv_email &&
                      touched.reserv_email &&
                      errors.reserv_email}
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-10">
              <label className="text-gray-800 text-base">Комментарий:</label>
              <Field
                type="text"
                name="reserv_comment"
                className="w-full h-40 border shadow-lg px-3.5 py-2.5 hover:bg-blue-800 hover:bg-opacity-10 focus:bg-blue-800 focus:bg-opacity-10 active:bg-blue-800 active:bg-opacity-10"
                as="textarea"
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
