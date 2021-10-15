import { Formik, Field } from "formik";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactForm() {
  return (
    <Formik
      initialValues={{
        contact_name: "",
        contact_email: "",
        contact_comment: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.contact_name) {
          errors.contact_name = "Required";
        } else if (!values.contact_email) {
          errors.contact_email = "Required";
        } else if (!values.contact_comment) {
          errors.contact_comment = "Required";
        }
        return errors;
      }}
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
        resetForm,
        /* and other goodies */
      }) => (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col border border-gray-500 rounded-lg p-8"
        >
          <h1 className="text-2xl">Связаться с нами</h1>
          <input
            className="border border-gray-500 rounded-lg px-8 py-4 text-lg mt-4"
            type="text"
            name="contact_name"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Имя"
            value={values.contact_name}
          />
          <p className="px-8 text-red-600">
            {errors.contact_name && touched.contact_name && errors.contact_name}
          </p>
          <input
            className="border border-gray-500 rounded-lg px-8 py-4 text-lg mt-4"
            type="email"
            name="contact_email"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            value={values.contact_email}
          />
          <p className="px-8 text-red-600">
            {errors.contact_email &&
              touched.contact_email &&
              errors.contact_email}
          </p>

          <Field
            className="border border-gray-500 rounded-lg px-8 py-4 text-lg mt-4"
            as="textarea"
            name="contact_comment"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Комментарий"
            value={values.contact_comment}
          />
          <p className="px-8 text-red-600">
            {errors.contact_comment &&
              touched.contact_comment &&
              errors.contact_comment}
          </p>

          <motion.button
            whileTap={{ scale: 1.2 }}
            className="w-40 bg-red-600 text-center mt-4 px-8 py-2 text-lg text-white rounded-lg hover:bg-red-200 focus:outline-none"
            disabled={isSubmitting}
            type="submit"
          >
            Отправить
          </motion.button>
        </form>
      )}
    </Formik>
  );
}
