"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Mousewheel } from "swiper";
import { usePathname } from "next/navigation";

export default function Slider_Nav() {
  const pathname = usePathname();

  const slides = [
    "accordion",
    "bento_menu",
    "breadcrumb",
    "button",
    "card",
    "carousel",
    "checkbox",
    "comment",
    "doner_menu",
    "dropdown",
    "feed",
    "form",
    "hamberger_menu",
    "icon",
    "input_field",
    "kebab_menu",
    "loader",
    "meatballs_menu",
    "modal",
    "badge",
    "pagenation",
    "picker",
    "progress_bar",
    "radio_buttons",
    "search_field",
    "sidebar",
    "slider_controls",
    "stepper",
    "tag",
    "tab_bar",
    "tooltip",
    "toggle",
  ];

  return (
    <>
      <Swiper
        spaceBetween={10}
        mousewheel={true}
        speed={200}
        modules={[Mousewheel]}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          720: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
      >
        {slides.map((slide, index) => {
          const isCurrentPath =
            (pathname === "/" && slide === "accordion") ||
            pathname === `/${slide}`;

          return (
            <SwiperSlide
              className="text-center"
              key={index}
              style={{ width: "auto" }}
            >
              <Link
                className={`cursor-pointer ${
                  isCurrentPath ? "text-black" : "text-gray-300"
                }`}
                href={slide === "accordion" ? "/" : `/${slide}`}
              >
                <span>{slide}</span>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
