"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import Link from "next/link";

export default function Slider_Nav() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

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
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`p-2.5 border text-center whitespace-nowrap cursor-pointer ${
              activeIndex === index
                ? "border-black text-black"
                : "text-gray-300"
            }`}
            style={{ width: "auto" }}
            onClick={() => handleClick(index)}
          >
            <Link href={slide === "accordion" ? "/" : `/${slide}`}>
              <span className="">{slide}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
