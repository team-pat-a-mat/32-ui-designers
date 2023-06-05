interface BottomSheetProps {
  handleBottomSheet: () => void;
  stopPropagation: (e: React.MouseEvent) => void;
}

export default function BottomSheet({
  handleBottomSheet,
  stopPropagation,
}: BottomSheetProps) {
  return (
    <div
      onClick={handleBottomSheet}
      className="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center z-50"
    >
      <div
        onClick={stopPropagation}
        className="absolute w-full rounded-t-lg bg-white bottom-0"
      >
        <div className="mx-auto bg-slate-300 w-1/4 h-1 mt-5 rounded-md"></div>
        <header className="flex justify-between items-center px-2 py-5">
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <h3 className="font-bold text-lg">타이틀</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={handleBottomSheet}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </header>
        <div className="text-center">
          <p className="text-2xl font-bold py-24">텍스트</p>
        </div>
        <div className="flex justify-center mb-5">
          <button className="bg-slate-300 w-3/4  py-3 rounded-lg">버튼</button>
        </div>
      </div>
    </div>
  );
}
