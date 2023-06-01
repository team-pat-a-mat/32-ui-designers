"use client";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider_Nav() {
  const slides = [
    "Accordion",
    "Bento Menu",
    "Breadcrumb",
    "Button",
    "Card",
    "Carousel",
    "Checkbox",
    "Comment",
    "Doner Menu",
    "Dropdown",
    "Feed",
    "Form",
    "Hamberger Menu",
    "Icon",
    "Input Field",
    "Kebab Menu",
    "Loader",
    "Meatballs Menu",
    "Modal",
    "Badge",
    "Pagenation",
    "Picker",
    "Progress Bar",
    "Radio Buttons",
    "Search Field",
    "Sidebar",
    "Slider Controls",
    "Stepper",
    "Tag",
    "Tab Bar",
    "Tooltip",
    "Toggle",
  ];

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={8}
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}
