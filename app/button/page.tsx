"use client";

import Image from "next/image";
import { useState } from "react";

export default function Button() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(prev => !prev);
  };
  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <button
          className="w-1/3 h-10 bg-black text-white border rounded-lg mb-9"
          onClick={handleOpen}
        >
          꽃카 나와라 얍 !
        </button>
        {open ? (
          <div>
            <Image
              src="/꽃카졸령.png"
              alt="꽃카"
              width="500"
              height="500"
            ></Image>
          </div>
        ) : null}
      </div>
    </main>
  );
}
