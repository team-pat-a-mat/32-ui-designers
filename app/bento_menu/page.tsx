"use client";
import { useEffect, useRef, useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { FaMapMarkerAlt, FaGooglePlay } from "react-icons/fa";
import {
  BsFillPeopleFill,
  BsCalendarDate,
  BsNewspaper,
  BsGoogle,
  BsYoutube,
} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export default function BentoMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMenu = () => setIsOpen(prev => !prev);

  const menuItems = [
    { id: 1, icon: <CgProfile />, title: "계정" },
    { id: 2, icon: <BsGoogle />, title: "검색" },
    { id: 3, icon: <FaMapMarkerAlt />, title: "지도" },
    { id: 4, icon: <BsYoutube />, title: "YouTube" },
    { id: 5, icon: <FaGooglePlay />, title: "Play" },
    { id: 6, icon: <BsNewspaper />, title: "뉴스" },
    { id: 7, icon: <AiOutlineMail />, title: "이메일" },
    { id: 8, icon: <BsFillPeopleFill />, title: "주소록" },
    { id: 9, icon: <BsCalendarDate />, title: "캘린더" },
  ];

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <main>
      <div ref={ref} className="relative flex justify-end">
        <button
          className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-gray-100 "
          onClick={handleMenu}
        >
          <span className="text-2xl text-gray-500">
            <BiCategoryAlt />
          </span>
        </button>
        {isOpen && (
          <div className="w-48 absolute top-full right-0 py-4 px-4 rounded shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 gap-2 py-2">
              {menuItems.map(menu => (
                <a
                  href="#"
                  key={menu.id}
                  className="flex flex-col items-center py-2 rounded hover:bg-blue-100"
                >
                  <span className="mb-2 text-2xl">{menu.icon}</span>
                  <span className="text-xs">{menu.title}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
