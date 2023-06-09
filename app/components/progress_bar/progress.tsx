import { useEffect, useState } from "react";

export default function Progress() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const scrollPos = window.scrollY; // 페이지 상단에서 현재 스크롤 위치
    const winHeight = window.innerHeight; // 창 뷰포트의 높이
    const docHeight = document.body.offsetHeight; // 문서의 전체 높이

    const totalDocScrollLength = docHeight - winHeight; // 페이지 (상단 -> 하단) 총 스크롤 양

    // 아래로 스크롤한 페이지의 비율
    const scrollPercentage = Math.floor(
      (scrollPos / totalDocScrollLength) * 100,
    );

    setScroll(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-4 bg-gray-200 rounded fixed">
      <div
        style={{ width: `${scroll}%` }}
        className={`h-full ${
          scroll === 100 ? "rounded" : "rounded-l"
        } transition-all duration-200 ease-out bg-blue-500`}
      />
    </div>
  );
}
