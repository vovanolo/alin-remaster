import Router from "next/router";

export default function NewSections({ news }) {
  return (
    <article className="container-main mx-auto px-4 xl:px-0 lg:my-10">
      <section className="relative h-full flex flex-wrap md:flex-row-reverse content-between md:content-end overflow-hidden text-white px-0 xl:px-20">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://alin.ua/storage/app/uploads/public/60d/308/301/60d308301dcc9980029210.jpg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        </div>
        <div className="w-full lg:w-2/3 px-5 my-10 z-10">
          <h1 className="text-3xl font-bold">{news.name}</h1>
        </div>
        <div className="w-full lg:w-1/3 px-5 flex my-10 z-10">
          <div className="w-1/3 text-gray-400">
            <p>Дата:</p>
            <p>Категорія:</p>
          </div>
          <div className="w-2/3">
            <p>{news.created_at}</p>
            <p>{news.category.title}</p>
          </div>
        </div>
      </section>
      <section className="my-5 md:py-20">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 md:pr-10 mb-5">
            <a
              onClick={() => Router.back()}
              className="text-black font-medium mp-link-svg group hover:text-red-600"
            >
              <svg
                className="inline-block stroke-current { class }"
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 3.44946H8.66667C9.02029 3.44946 9.35943 3.58994 9.60948 3.83999C9.85952 4.09004 10 4.42917 10 4.7828V13.4495"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3.33246 5.44946L1.4258 3.50946C1.41287 3.4976 1.40254 3.48317 1.39548 3.46711C1.38841 3.45104 1.38477 3.43368 1.38477 3.41613C1.38477 3.39858 1.38841 3.38122 1.39548 3.36515C1.40254 3.34909 1.41287 3.33466 1.4258 3.3228L3.33246 1.44946"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              Повернутись назад
            </a>
          </div>
          <div className="w-full md:w-2/3">
            <div>
              <p>{news.desc}</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
