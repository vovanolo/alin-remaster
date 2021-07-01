import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import newsCar from "../images/thumb__350_180_0_0_crop.jpg";
import { useRouter } from "next/router";

export default function NewsSection() {
  const router = useRouter();
  let currentUrl = router.route;
  const [currentPage, setCurrentPage] = useState(false);

  useEffect(() => {
    if (currentUrl === "/") {
      setCurrentPage(true);
    } else if (currentUrl === "/news") {
      setCurrentPage(true);
    } else {
      setCurrentPage(false);
    }
  }, []);

  return (
    <section className="container-main mx-auto px-4 xl:px-0 mb-10">
      {currentPage ? (
        <h1 className="text-4xl mb-9">Новости</h1>
      ) : (
        <h1 className="text-4xl mb-9">Дополнительные услуги</h1>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        <div className="news-animation">
          <Link href={"/contacts"}>
            <a>
              <Image className="w-full" src={newsCar} layout="responsive" />
              <h1 className="bg-gray-100 text-lg text-center py-2">sjdhfdsf</h1>
            </a>
          </Link>
        </div>
        <div className="news-animation">
          <Link href={"/contacts"}>
            <a>
              <Image className="w-full" src={newsCar} layout="responsive" />
              <h1 className="bg-gray-100 text-lg text-center py-2">sjdhfdsf</h1>
            </a>
          </Link>
        </div>
        <div className="news-animation">
          <Link href={"/contacts"}>
            <a>
              <Image className="w-full" src={newsCar} layout="responsive" />
              <h1 className="bg-gray-100 text-lg text-center py-2">sjdhfdsf</h1>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
