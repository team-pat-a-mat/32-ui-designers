interface SnackbarProps {
  percent: number;
  handleSnackbar: () => void;
}

export default function Snackbar({ percent, handleSnackbar }: SnackbarProps) {
  return (
    <div className="fixed bottom-10 bg-white shadow-md rounded-md">
      <div className="flex justify-between items-center font-bold space-x-60 rounded-md p-3">
        <p>텍스트</p>
        <button onClick={handleSnackbar} className="text-red-500">
          버튼
        </button>
      </div>
      <div className="h-1 bg-gray-200">
        <div
          style={{ width: `${percent}%`, transition: "width 0.1s" }}
          className="h-full bg-green-500"
        />
      </div>
    </div>
  );
}
