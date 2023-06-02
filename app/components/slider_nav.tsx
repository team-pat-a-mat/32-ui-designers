"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Link from "next/link";
import { Mousewheel } from "swiper";

export default function Slider_Nav() {
  const [activeIndex, setActiveIndex] = useState(0);
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
        {slides.map((slide, index) => (
          <SwiperSlide
            className="text-center"
            key={index}
            style={{ width: "auto" }}
          >
            <Link
              onClick={() => handleClick(index)}
              className={`p-2.5 cursor-pointer ${
                activeIndex === index
                  ? "border-black text-black"
                  : "text-gray-300"
              }`}
              href={slide === "accordion" ? "/" : `/${slide}`}
            >
              <span>{slide}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
