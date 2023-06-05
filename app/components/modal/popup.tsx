interface PopupProps {
  handlePopup: () => void;
  stopPropagation: (e: React.MouseEvent) => void;
}

export default function Popup({ handlePopup, stopPropagation }: PopupProps) {
  return (
    <div
      onClick={handlePopup}
      className="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center z-50"
    >
      <div
        onClick={stopPropagation}
        className="bg-white flex flex-col text-center p-10 space-y-5 rounded-xl"
      >
        <h3 className="font-bold text-2xl">타이틀</h3>
        <p className="font-semibold">서브 문구</p>
        <button className="bg-slate-300 w-full px-24 py-3 rounded-lg">
          버튼
        </button>
      </div>
    </div>
  );
}
