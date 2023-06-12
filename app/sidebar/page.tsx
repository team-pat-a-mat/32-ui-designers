"use client";

import Bar from "../components/sidebar/bar";

export default function SideBar() {
  return (
    <main className="flex">
      <div className="relative">
        <Bar />
      </div>
      <div className="grid grid-cols-3 gap-10 w-full mt-10">
        {[...Array(50)].map((_, i) => (
          <div className="bg-slate-300 rounded-md p-10">{i + 1}</div>
        ))}
      </div>
    </main>
  );
}
