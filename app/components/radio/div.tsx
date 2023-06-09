import { RadioProps } from "@/app/types/type";

export default function RadioDiv({ isSelected }: RadioProps) {
  return (
    <div
      className={`relative h-4 w-4 rounded-full shadow-md ${
        isSelected ? "bg-blue-500" : "bg-white"
      }`}
    >
      <div
        className={`absolute top-1/2 left-1/2 w-1/2 h-1/2 rounded-full transition  ${
          isSelected ? "bg-white" : "bg-transparent"
        }`}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
