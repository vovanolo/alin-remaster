import Link from "next/link";
import Image from "next/image";
import photo from "../images/thumb__540_360_0_0_crop.webp";

export default function TransferNews({ transfersNews }) {
  return (
    <section className="container-main mx-auto px-4 xl:px-0 py-10">
      {transfersNews.map((item) => (
        <div className="grid lg:grid-cols-2 gap-7 my-20">
          <div className="lg:order-1">
            <Image src={photo} layout="responsive" />
          </div>
          <div className="flex flex-wrap content-between lg:order-2">
            <h2 className="text-4xl">{item.title}</h2>
            <p className="my-4">{item.description}</p>
            <Link href={"/transfers/" + item.slug}>
              <a class="text-lg bg-red-600 text-white rounded-lg px-10 py-2">
                Получить цену
              </a>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
