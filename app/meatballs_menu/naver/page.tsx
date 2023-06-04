"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import { useState } from "react";

export default function Naver() {
  const [click, setClick] = useState(false);
  const [items, setItems] = useState([
    "통합",
    "VIEW",
    "이미지",
    "지식iN",
    "인플루언서",
    "동영상",
    "쇼핑",
    "뉴스",
    "어학사전",
    "지도",
    "도서",
    "뮤직",
    "지식백과",
    "오디오클립",
  ]);
  const handleClick = () => {
    setClick(prev => !prev);
    if (!click) {
      setItems(prevItems => {
        const newItems = [...prevItems];
        const index = newItems.indexOf("통합");
        if (index !== -1) {
          newItems[index] = "통합검색";
        }
        return newItems;
      });
    } else {
      setItems(prevItems => {
        const newItems = [...prevItems];
        const index = newItems.indexOf("통합검색");
        if (index !== -1) {
          newItems[index] = "통합";
        }
        return newItems;
      });
    }
  };

  return (
    <div className="max-w-md bg-white mx-auto">
      <div className="border-b-emerald-500 border-b flex p-3 text-green-500">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </button>
        <input className="w-full" type="text" />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
            />
          </svg>
        </button>
      </div>
      {click ? (
        <>
          <div className="grid grid-cols-4 grid-rows-4 px-3 py-2">
            {items.map((item, index) => (
              <span
                className={`py-2 font-bold ${
                  item === "통합검색" && "text-green-500"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="cursor-pointer bg-gray-200 border-b-2 border-gray-300 p-3 text-sm text-gray-500 text-end">
            <span>검색옵션</span>
            <span className="text-gray-400"> | </span>
            <span onClick={handleClick}>닫기</span>
          </div>
        </>
      ) : (
        <div className="p-3 relative">
          <Swiper
            slidesPerView={5}
            mousewheel={true}
            modules={[Mousewheel]}
            speed={300}
          >
            {items.map((item, index) => (
              <SwiperSlide
                className={`font-bold ${item === "통합" && "text-green-500"}`}
              >
                {item}
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={handleClick}
            className="absolute top-0 right-0 h-full bg-white text-gray-300 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
