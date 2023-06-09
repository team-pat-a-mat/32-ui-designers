import { RadioProps } from "@/app/types/type";

export default function RadioButton({ isSelected }: RadioProps) {
  return (
    <button
      className={`h-4 w-4 rounded-full bg-white shadow-md transition tran ${
        isSelected ? "shadow-inner" : ""
      }`}
    />
  );
}
