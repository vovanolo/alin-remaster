import { MainLayout } from "../components/MainLayout";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const mapLocation = [
  {
    id: 1,
    title: "Львів",
    descLock: "ул. Любинская 196",
  },
  {
    id: 2,
    title: "Львів2",
    descLock: "kyiv@alin.ua",
  },
  {
    id: 3,
    title: "Льві3",
    descLock: "khrakiv@alin.ua",
  },
  {
    id: 4,
    title: "Льві4",
    descLock: "ул. Академика Павлова 20Б",
  },
];

const map = [
  {
    id: 1,
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21748.03453261064!2d6.241622314497867!3d47.049956665691425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478d9c18e564802d%3A0x409ce34b313dce0!2zMjU5MzAg0JvQviwg0KTRgNCw0L3RhtC40Y8!5e0!3m2!1sru!2sua!4v1625845060812!5m2!1sru!2sua",
  },
  {
    id: 2,
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82352.67101489163!2d23.94219582459874!3d49.832667949271844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c09109a57%3A0x4223c517012378e2!2z0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1sru!2sua!4v1625845173410!5m2!1sru!2sua",
  },
  {
    id: 3,
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325518.68783443136!2d30.252510061496128!3d50.401699044222795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1625845672171!5m2!1sru!2sua",
  },
  {
    id: 4,
    src: "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.9913057595745!2d-81.48785603498816!3d32.12353708117416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fb0b96e2ca952b%3A0xe6e3eaf5dbe9ee99!2sDFG%20Roofing!5e0!3m2!1sru!2sua!4v1625845636036!5m2!1sru!2sua",
  },
];

export default function Contacts() {
  const [isToggle, setIsToggle] = useState(0);

  const triggerToggle = (index) => {
    setIsToggle(index);
  };

  return (
    <MainLayout title={"Contacts"}>
      <section className="container-main mx-auto px-4 xl:px-0">
        <h1 className="text-5xl">Контакты</h1>
        <div className="grid lg:grid-cols-2 gap-5 my-4">
          <div className="grid md:grid-cols-2 gap-5 text-lg">
            {mapLocation.map((item, index) => (
              <div key={item.id}>
                <button
                  onClick={() => triggerToggle(index)}
                  className={
                    index !== isToggle
                      ? "border-2 focus:border-red-600 focus:outline-none rounded-lg px-3 py-1 mb-4"
                      : "border-2 border-red-600 focus:outline-none rounded-lg px-3 py-1 mb-4"
                  }
                >
                  {item.title}
                </button>
                <ul className="px-3 py-1">
                  <li className="text-lg text-gray-700">{item.descLock}</li>
                </ul>
              </div>
            ))}
          </div>
          {map.map((item, index) => (
            <motion.div
              style={
                index === isToggle ? { display: "block" } : { display: "none" }
              }
              key={item.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <iframe
                src={item.src}
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </motion.div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
