"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Card from "../components/pagenation/card";

const PER_PAGE = 10; // 페이지 당 아이템 수

export default function Pagenation() {
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지
  const [scrollPage, setScrollPage] = useState<number>(1); // 현재 페이지 - 무한스크롤
  const [loadMorePage, setLoadMorePage] = useState<number>(1); // 현재 페지 - 로드버튼
  const [scrollData, setScrollData] = useState<Array<JSX.Element>>([]); // 현재 페이지 데이터 - 무한스크롤
  const [paginationData, setPaginationData] = useState<Array<JSX.Element>>([]); // 현재 페이지 데이터 - 페이지네이션
  const [loadMoreData, setLoadMoreData] = useState<Array<JSX.Element>>([]); // 현재 페지 데터 - 로드버튼
  const paginationDiv = useRef<HTMLDivElement | null>(null); // 스크롤하려는 div에 대한 참조
  const scrollDiv = useRef<HTMLDivElement | null>(null); // 스크롤하려는 div에 대한 참조

  // 데이터 전체를 나타내는 임시 배열
  const allData = [...Array(100)].map((_, i) => <Card key={i} index={i} />);

  // 페이지 변경시 데이터를 다시 가져옴 - 페이지네이션
  useEffect(() => {
    const start = (currentPage - 1) * PER_PAGE;
    const end = start + PER_PAGE;
    setPaginationData(allData.slice(start, end));

    // paginationDiv 의 대한 스크롤 맨 위
    if (paginationDiv.current) {
      paginationDiv.current.scrollTop = 0;
    }
  }, [currentPage]);

  /** 총 페이지 수 - 페이지네이션 */
  const pageCount = Math.ceil(allData.length / PER_PAGE);

  /** 페이지 이동 함수 - 페이지네이션 */
  const gotoPage = (page: number) => {
    setCurrentPage(page);
  };

  // 페이지 변경시 데이터를 다시 가져옴 - 무한스크롤
  useEffect(() => {
    const start = (scrollPage - 1) * PER_PAGE;
    const end = start + PER_PAGE;
    setScrollData(prevData => [...prevData, ...allData.slice(start, end)]);
    // setScrollData(allData.slice(start, end));
  }, [scrollPage]);

  /** 스크롤 이벤트 핸들러 - 무한스크롤 */
  const handleScroll = useCallback(() => {
    if (scrollDiv.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollDiv.current;

      // 스크롤이 거의 바닥에 왔는지 확인
      if (scrollTop + clientHeight >= scrollHeight) {
        setScrollPage(prevPage => prevPage + 1);
      }
    }
  }, []);

  // 무한 스크롤
  useEffect(() => {
    if (scrollDiv.current) {
      scrollDiv.current.addEventListener("scroll", handleScroll);
      return () => {
        scrollDiv.current?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  // 페이지 변경 시 데이터 복구 - 로드버튼
  useEffect(() => {
    const start = (loadMorePage - 1) * PER_PAGE;
    const end = start + PER_PAGE;
    setLoadMoreData(prevData => [...prevData, ...allData.slice(start, end)]);
  }, [loadMorePage]);

  /** 추가 로드 기능 - 로드버튼 */
  const loadMore = () => {
    setLoadMorePage(prevPage => prevPage + 1);
  };

  return (
    <main className="flex justify-between">
      <div
        ref={paginationDiv}
        className="max-w-xs w-full bg-pink-500 bg-opacity-30 custom-h overflow-scroll py-2"
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          {paginationData}
        </div>
        <div className="flex items-center justify-center space-x-1">
          {[...Array(pageCount)].map((_, i) => {
            const page = i + 1;

            return (
              <button className="p-2" key={page} onClick={() => gotoPage(page)}>
                {page}
              </button>
            );
          })}
        </div>
      </div>
      <div
        onScroll={handleScroll}
        ref={scrollDiv}
        className="max-w-xs w-full bg-yellow-500 bg-opacity-30 custom-h overflow-scroll py-2"
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          {scrollData}
        </div>
      </div>
      <div className="max-w-xs w-full bg-blue-500 bg-opacity-30 custom-h overflow-scroll py-2">
        <div className="flex flex-col items-center justify-center space-y-2">
          {loadMoreData}
        </div>
        <button
          className="flex mx-auto border border-black py-2 px-4 mt-3 rounded-md"
          onClick={loadMore}
        >
          로드 버튼
        </button>
      </div>
    </main>
  );
}
