import { RadioProps } from "@/app/types/type";

export default function RadioInput({ isSelected }: RadioProps) {
  return <input type="radio" checked={isSelected} />;
}
