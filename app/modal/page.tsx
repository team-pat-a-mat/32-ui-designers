"use client";

import { useEffect, useState } from "react";
import BottomSheet from "../components/modal/bottom_sheet";
import Popup from "../components/modal/popup";
import Snackbar from "../components/modal/snackbar";

export default function Modal() {
  const [isPopup, setIsPopup] = useState(false);
  const [isBottomSheet, setIsBottomSheet] = useState(false);
  const [isSnackbar, setIsSnackbar] = useState(false);
  const [percent, setPercent] = useState(100);

  /** 이벤트 버블링 방지 함수 */
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handlePopup = () => {
    setIsPopup(prev => !prev);
  };

  const handleBottomSheet = () => {
    setIsBottomSheet(prev => !prev);
  };

  const handleSnackbar = () => {
    setIsSnackbar(prev => !prev);
  };

  /** 타이머 바 상태 */
  const handleSnackbarTimer = () => {
    setIsSnackbar(prev => !prev);
    setPercent(100);
    const timer = setInterval(() => {
      setPercent(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          setIsSnackbar(false);
          return 0;
        } else {
          return prev - 100 / 30; // 3초 동안 매 100ms 마다 100/30 만큼 감소하게 함
        }
      });
    }, 100);
  };

  // 모달창이 켜져있을 때 스크롤 방지
  useEffect(() => {
    document.body.style.overflow =
      isPopup || isBottomSheet || isSnackbar ? "hidden" : "unset";
  }, [isPopup, isBottomSheet, isSnackbar]);

  return (
    <main>
      <div className="flex justify-between space-x-3 text-white">
        <button
          onClick={handlePopup}
          className="bg-slate-300 p-3 w-full hover:bg-slate-400 rounded-md"
        >
          Popup
        </button>
        <button
          onClick={handleBottomSheet}
          className="bg-slate-400 p-3 w-full hover:bg-slate-500 rounded-md"
        >
          Bottom Sheet
        </button>
        <button
          onClick={handleSnackbarTimer}
          className="bg-slate-500 p-3 w-full hover:bg-slate-600 rounded-md"
        >
          Snackbar
        </button>
      </div>
      {isPopup && (
        <Popup handlePopup={handlePopup} stopPropagation={stopPropagation} />
      )}
      {isBottomSheet && (
        <BottomSheet
          stopPropagation={stopPropagation}
          handleBottomSheet={handleBottomSheet}
        />
      )}
      {isSnackbar && (
        <div className="flex items-center justify-center">
          <Snackbar percent={percent} handleSnackbar={handleSnackbar} />
        </div>
      )}
    </main>
  );
}
