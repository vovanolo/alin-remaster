import { useRouter } from "next/router";

export default function BreadCrumbs(props) {
  const router = useRouter();
  let curr = router.asPath;

  function isLast(index) {
    return index === props.crumbs.length - 1;
  }

  return (
    <div>
      <p></p>
      <ul className="flex">
        {props.crumbs.map((crumb, index) => {
          const disabled = isLast(index)
            ? "cursor-default text-gray-400"
            : "cursor-pointer text-black";

          return (
            <li key={index}>
              {crumb.slug === curr ? (
                <div>
                  <button
                    className={`${disabled}`}
                    onClick={() => props.selected(crumb.path)}
                  >
                    {crumb.name}
                    <span className="mx-2">{!isLast(index) ? "/" : null}</span>
                  </button>
                  <button
                    className={
                      !isLast(index)
                        ? "cursor-default text-gray-400"
                        : "cursor-pointer text-black"
                    }
                    onClick={() => props.selected(crumb.slug)}
                  >
                    {crumb.nameCity}
                    <span className="mx-2">{isLast(index) ? "/" : null}</span>
                  </button>
                </div>
              ) : crumb.slugReserv === curr ? (
                <div>
                  <button
                    className={`${disabled}`}
                    onClick={() => props.selected(crumb.path)}
                  >
                    {crumb.name}
                    <span className="mx-2">{!isLast(index) ? "/" : null}</span>
                  </button>
                  <button
                    className={
                      isLast(index)
                        ? "cursor-default text-gray-400"
                        : "cursor-pointer text-black"
                    }
                    onClick={() => props.selected(crumb.slug)}
                  >
                    {crumb.nameCity}
                    <span className="mx-2">{!isLast(index) ? "/" : null}</span>
                  </button>
                  <button
                    className={
                      !isLast(index)
                        ? "cursor-default text-gray-400"
                        : "cursor-pointer text-black"
                    }
                    onClick={() => props.selected(crumb.slugReserv)}
                  >
                    {crumb.nameCar}
                    <span className="mx-2">{isLast(index) ? "/" : null}</span>
                  </button>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
