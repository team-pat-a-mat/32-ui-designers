"use client";

import Link from "next/link";

export default function MeatballsMenu() {
  return (
    <main className="flex items-center justify-between space-x-5">
      <Link
        href="/meatballs_menu/kakao"
        className="w-full flex justify-center bg-yellow-400 p-5 rounded-md hover:bg-yellow-500"
      >
        카카오
      </Link>
      <Link
        href="/meatballs_menu/naver"
        className="w-full flex justify-center bg-green-400 p-5 rounded-md hover:bg-green-500"
      >
        네이버
      </Link>
    </main>
  );
}
