export default function HeroSection() {
    return (
        <section className="container-main mx-auto px-4 xl:px-0 lg:my-10">
            <div className="grid lg:grid-cols-2 gap-5">
                <div className="grid md:grid-cols-2 gap-5 text-lg">
                    <div>
                        <label className="inline-block cursor-pointer mb-4">

                            <button className="border-2 focus:border-red-600 rounded-lg px-3 py-1 mb-4">Львів</button>
                        </label>

                        <div className="flex items-center">
                            <img className="mr-3.5" src="https://alin.ua/themes/alin/assets/images/contacts/map.svg" width="17" height="17" alt="map" />
                            <p>вул. Любінська 196</p>
                        </div>
                        <div className="flex items-center my-2.5">
                            <img className="mr-3.5" src="https://alin.ua/themes/alin/assets/images/contacts/mail.svg" width="17" height="17" alt="email" />
                            <p>lviv@alin.ua</p>
                        </div>
                        <div className="flex items-center">
                            <img className="mr-3.5" src="https://alin.ua/themes/alin/assets/images/contacts/phone.svg" width="17" height="17" alt="phone" />
                            <a href="tel:+38 098 777 16 00">+38 098 777 16 00</a>
                        </div>
                    </div>
                    <div>
                        <label className="inline-block cursor-pointer mb-4">

                            <button className="border-2 focus:border-red-600 rounded-lg px-3 py-1 mb-4">Харків</button>
                        </label>

                        <div className="flex items-center">
                            <img className="mr-3.5" src="https://alin.ua/themes/alin/assets/images/contacts/map.svg" width="17" height="17" alt="map" />
                            <p>вул. Академіка Павлова 20Б</p>
                        </div>
                        <div className="flex items-center my-2.5">
                            <img className="mr-3.5" src="https://alin.ua/themes/alin/assets/images/contacts/mail.svg" width="17" height="17" alt="email" />
                            <p>khrakiv@alin.ua</p>
                        </div>
                        <div className="flex items-center">
                            <img className="mr-3.5" src="https://alin.ua/themes/alin/assets/images/contacts/phone.svg" width="17" height="17" alt="phone" />
                            <a href="tel:+38 098 777 16 00">+38 098 777 16 00</a>
                        </div>
                    </div>
                    <div>
                        <label className="inline-block cursor-pointer mb-4">

                            <button className="border-2 focus:border-red-600 rounded-lg px-3 py-1 mb-4">Івано-Франківськ</button>
                        </label>

                        <div className="flex items-center">
                            <img className="mr-3.5" src="https://alin.ua/themes/alin/assets/images/contacts/map.svg" width="17" height="17" alt="map" />
                            <p>вул. Є. Коновальця 264А</p>
                        </div>
                        <div className="flex items-center my-2.5">
                            <img className="mr-3.5" src="https://alin.ua/themes/alin/assets/images/contacts/mail.svg" width="17" height="17" alt="email" />
                            <p>frankivsk@alin.ua</p>
                        </div>
                        <div className="flex items-center">
                            <img className="mr-3.5" src="https://alin.ua/themes/alin/assets/images/contacts/phone.svg" width="17" height="17" alt="phone" />
                            <a href="tel:+38 098 777 16 00">+38 098 777 16 00</a>
                        </div>
                    </div>
                    <div>
                        <label className="inline-block cursor-pointer mb-4">

                            <button className="border-2 focus:border-red-600 rounded-lg px-3 py-1 mb-4">Київ</button>
                        </label>

                        <div className="flex items-center">
                            <img className="mr-3.5" src="https://alin.ua/themes/alin/assets/images/contacts/map.svg" width="17" height="17" alt="map" />
                            <p>Аеропорт Бориспіль</p>
                        </div>
                        <div className="flex items-center my-2.5">
                            <img className="mr-3.5" src="https://alin.ua/themes/alin/assets/images/contacts/mail.svg" width="17" height="17" alt="email" />
                            <p>kyiv@alin.ua</p>
                        </div>
                        <div className="flex items-center">
                            <img className="mr-3.5" src="https://alin.ua/themes/alin/assets/images/contacts/phone.svg" width="17" height="17" alt="phone" />
                            <a href="tel:+38 098 777 16 00">+38 098 777 16 00</a>
                        </div>
                    </div>
                </div>
                {/* <div className="">
                    <iframe id="map_iframe" className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2574.5388392374175!2d23.96249!3d49.813537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaf9110949f3614b6!2zQWxpbiAtINCe0YDQtdC90LTQsCDQsNCy0YLQviDRgtCwINC_0LDRgdCw0LbQuNGA0YHRjNC60ZYg0L_QtdGA0LXQstC10LfQtdC90L3RjyDRgyDQm9GM0LLQvtCy0ZY!5e0!3m2!1sru!2sua!4v1614853729738!5m2!1sru!2sua" style={{ border: 0 }} allowfullscreen="" loading="lazy" title="map"></iframe>
                </div> */}
            </div>
        </section>
    )
}
