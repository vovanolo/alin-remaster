export default function Loader() {
  return (
    <div class="loader fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center px-4 md:px-0 z-40">
      <svg
        class="car"
        width="122"
        height="70"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          transform="translate(3 4)"
          stroke="#002742"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            class="car__body"
            d="M47.293 2.375C52.927.792 54.017.805 54.017.805c2.613-.445 6.838-.337 9.42.237l8.381 1.863c2.59.576 6.164 2.606 7.98 4.531l6.348 6.732 6.245 1.877c3.098.508 5.609 3.431 5.609 6.507v4.206c0 .29-2.536 4.189-5.687 4.189H36.808c-2.655 0-4.34-2.1-3.688-4.67 0 0 3.71-19.944 14.173-23.902zM36.5 15.5h54.01"
            stroke-width="4"
          />
          <ellipse
            class="car__wheel--left"
            stroke-width="4"
            fill="#FFF"
            cx="83.493"
            cy="30.25"
            rx="6.922"
            ry="6.808"
          />
          <ellipse
            class="car__wheel--right"
            stroke-width="4"
            fill="#FFF"
            cx="46.511"
            cy="30.25"
            rx="6.922"
            ry="6.808"
          />
          <path
            class="car__line car--top"
            d="M22.5 16.5H2.475"
            stroke-width="4"
          />
          <path
            class="car__line car--middle"
            d="M20.5 23.5H.4755"
            stroke-width="4"
          />
          <path
            class="car__line car--bottom"
            d="M25.5 9.5h-19"
            stroke-width="4"
          />
        </g>
      </svg>
    </div>
  );
}
