import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const masObjFaq = [
  {
    id: 1,
    title: "Нужно ли бронирование автомобиля оплачивать заранее?",
    text: "Предоплата при бронировании автомобиля не нужна. Оплата производится на месте при подписании договора в офисе компании или же по адресу который будет предоставлен для подачи автомобиля. Но все же просим Вас ответственно планировать аренду автомобиля, и вовремя предупреждать нас о любых изменениях в планах или об отмене аренды.",
  },
  {
    id: 2,
    title: "Как и где сделать заказ автомобиля?",
    text: "Заказ автомобиля можно сделать на сайте alin.ua через форму заказа, звонком по телефону +38 098 777 16 00 (Viber и WhatsApp, Telegram), просто написать нам письмо на e-mail: lviv@alin.ua. Самый быстрый способ - это оформление через сайт 24/7.",
  },
  {
    id: 3,
    title: "Могу ли я передать авто третьему лицу?",
    text: "Передача третьему лицу без нашего ведома запрещена. Мы впишем в договор проката нескольких дополнительных водителей, если на момент передачи авто нам будут предоставлены их водительские удостоверения и паспорта. Данная услуга оплачивается дополнительно.",
  },
  {
    id: 4,
    title: "Каким способом оплаты я могу воспользоваться?",
    text: "За аренду авто вы можете рассчитаться как наличными средствами так и банковской карточкой (Visa, MasterCard).",
  },
  {
    id: 5,
    title: "Как получить скидку?",
    text: "Берите авто в прокат на максимально длительные сроки. Станьте постоянным клиентом нашего автопроката. Уже со второй аренды Вас ждут приятные бонусы.",
  },
  {
    id: 6,
    title:
      "Я хочу взять автомобиль в одном городе, а вернуть в другом, такое возможно?",
    text: "Такое возможно, это услуга 'one way', и она будет платной, уточняйте у нас стоимость услуги указав город получения и город возврата автомобиля.",
  },
  {
    id: 7,
    title:
      "Какие дополнительные доплаты с меня могут попросить при возврате автомобиля?",
    text: "Такие доплаты могут просить:",
  },

  {
    id: 8,
    title: "Что делать, если случилось ДТП?",
    text: "Если произошло ДТП:",
  },

  {
    id: 9,
    title: "Что делать если у меня поломается автомобиль?",
    text: "Обязательно сразу известить менеджера нашей компании по телефону +38 098 777 16 00. Мы обязуемся предоставить техническую помощь клиенту или быстрый ремонт (если возможно). Если ремонт займет много времени, мы предоставим клиенту автомобиль-замену.",
  },
  {
    id: 10,
    title:
      "На мою карту не вернулся залог и банк сказал, что вы его списали, я брал у вас автомобиль и уже вернул вам его пару дней назад. Где мои деньги?",
    text: "Мы не списываем деньги на залог, а блокируем. И по факту возврата автомобиля мы разблокируем деньги в течение 24 часов и предоставим Вам чек из терминала и / или акт приема автомобиля. Как правило, залог возвращается на карту Вам или мгновенно, или в течение 2-3 рабочих дней но не более 30 дней - зависит от вашего банка.",
  },
  {
    id: 11,
    title: "Вы сразу возвращаете залог?",
    text: "Мы возвращаем задаток по факту возврата автомобиля, если Вы вернули его чистым, и мы имеем возможность осмотреть на предмет новых повреждений. В противном случаем мы сможем вернуть средства после того, как будет проведена мойка автомобиля убедившись, что на нем нет новых повреждений, но не позднее чем 24 часа с момента возвращения автомобиля.",
  },
  {
    id: 12,
    title: "Вы забираете документы на срок аренды?",
    text: "Нет, мы делаем только скан-копию или фото документов при составлении договора.",
  },
  {
    id: 13,
    title: "Я гражданин США, могу ли я воспользоваться прокатом?",
    text: "Да, вы можете воспользоваться, но у вас, кроме национального водительского должно быть еще и международное, то есть International Driving License или International Driving Permit.",
  },
  {
    id: 14,
    title: "Какое водительское удостоверение подойдет для проката автомобиля?",
    text: "Мы принимаем любое удостоверение, любого государства, но водительское удостоверение должно быть дублировано латиницей и обязательно наличие категории «В». Для водительских удостоверений стран США, Канады, Австралии, ОАЭ, некоторых арабских стран и других стран Южной Америки обязательно нужно иметь разрешение на вождение за границей (международное водительское удостоверение).",
  },
  {
    id: 15,
    title:
      "Автомобиль застрахован? Я должен доплачивать за страховку дополнительно?",
    text: "В стандартный тариф аренды автомобиля включена страховка ОСАГО (автогражданка). Этот вид страховки включает ограничение риска клиента в пределах страхового депозита (задатка за автомобиль, или франшиза). Сумма задатка зависит от класса авто (от 300 до 1000 евро). Также есть возможность за дополнительную плату оформить страховку с нулевой франшизой.",
  },
  {
    id: 16,
    title:
      "Почему я должен оставлять залог за автомобиль, и обязательно ли это делать?",
    text: "Залог за автомобиль - это, франшиза, то есть та сумма, которая не будет выплачена страховой компанией в случае происшествия, поэтому данная сумма будет покрываться за счет задатка клиентом. Но в случае оформления страховки с нулевой франшизой, Вы оставляете топливный депозит, в случае если автомобиль вернется с неполным баком, мы вычтем разницу из него.",
  },
  {
    id: 17,
    title: "Можно ли арендовать автомобиль без залога?",
    text: "Конечно, но при аренде автомобиля от трех суток! Вы оставляете только топливный депозит. Вы получаете автомобиль в аренду с полным баком. Сдать автомобиль вы должны с таким же количеством горючего, или мы вычтем доплату за недостачу с депозита.",
  },
  {
    id: 18,
    title: "Какая резина на автомобилях?",
    text: "Летом - летняя, зимой - зимняя. Наши автомобили всегда обуты по сезону.",
  },
];

const initial = {
  opacity: 0,
  scale: 0,
  height: 0,
};

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (index) => {
    if (isOpen === index) {
      return setIsOpen(null);
    }
    setIsOpen(index);
  };

  // Animation into scroll block]
  const [refScroll, intView] = useInView(); // { threshold: 0.1 }
  const animation = useAnimation();

  useEffect(() => {
    if (intView) {
      animation.start({
        visibility: "visible",
        opacity: 1,
        x: "0",
      });
    }
    if (!intView) {
      animation.start({ visibility: "hidden", opacity: 0, x: "400%" });
    }
  }, [intView]);

  return (
    <section ref={refScroll} className="my-4 md:my-10 overflow-hidden">
      <div className="container-main mx-auto px-4 xl:px-0">
        <h1 className="text-5xl">Faq</h1>
        {masObjFaq.map((item, index) => (
          <motion.div
            initial={{ visibility: "hidden", opacity: 0, x: "0" }}
            animate={animation}
            key={item.id}
            className="my-8"
          >
            <div className="cursor-pointer relative border-2">
              <div
                onClick={() => handleClick(index)}
                className="flex justify-between"
              >
                <h3 className="text-lg lg:text-2xl pl-4 pr-12 md:px-24 py-5">
                  {item.title}
                </h3>
                <motion.p
                  initial={{ rotate: 0 }}
                  animate={isOpen === index ? { rotate: -360 } : { rotate: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-6xl text-red-600 font-bold pr-4"
                >
                  {isOpen !== index ? <span>+</span> : <span>-</span>}
                </motion.p>
              </div>
              <div className="bg-gray-100">
                <motion.div
                  initial={initial}
                  animate={
                    isOpen === index
                      ? {
                          opacity: 1,
                          scale: 1,
                          height: "auto",
                        }
                      : {
                          opacity: 0,
                          scale: 0,
                          height: 0,
                        }
                  }
                  transition={{ duration: 1.2, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="flex flex-wrap text-justify">
                    <div className="w-full">
                      {index === 6 ? (
                        <div className="pl-4 pr-12 md:px-24 py-5 md:py-8">
                          <p>{item.text}</p>
                          <ul className="pl-4 list-disc">
                            <li>
                              Оплатить химчистку - остатки от напитков,
                              шоколада…. в салоне автомобиля
                            </li>
                            <li>
                              Оплату за перепробег – условия пробега обсуждаются
                              при составлении договора проката.
                            </li>
                            <li>
                              Оплату за повреждения автомобиля, если они сделаны
                              в период вашей эксплуатации и не заявлены в
                              полицию и менеджеру нашей компании.
                            </li>
                            <li>
                              Оплата за топливо, вернее его недостачу (мы выдаем
                              автомобили с полным баком).
                            </li>
                            <li>
                              Оплата мойки, если Вы возвращаете автомобиль
                              грязным (мы выдаем автомобили чистые внутри и
                              снаружи).
                            </li>
                          </ul>
                        </div>
                      ) : index === 7 ? (
                        <div className="pl-4 pr-12 md:px-24 py-5 md:py-8">
                          <p>{item.text}</p>
                          <ul>
                            <li>
                              1. Не съезжайте с места аварии ни при каких
                              обстоятельствах.
                            </li>
                            <li>
                              2. Позвоните менеджеру нашей компании по телефону
                              +38 098 777 16 00 (Viber, WhatsApp, Telegram).
                            </li>
                            <li>3. Обязательно вызовите Полицию.</li>
                            <li>
                              4. Дождитесь оформления документов патрулем,
                              получите акт о происшествии от полиции.
                            </li>
                          </ul>
                        </div>
                      ) : (
                        <p className="pl-4 pr-12 md:px-24 py-5 md:py-8">
                          {item.text}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
