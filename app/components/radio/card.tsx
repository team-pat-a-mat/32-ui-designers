import { MouseEventHandler } from "react";
import RadioButton from "./button";
import RadioDiv from "./div";
import RadioInput from "./input";

interface RadioCardProps {
  text: string;
  option: string;
  isSelected: boolean;
  onOptionChange: (option: string) => void;
}

export default function RadioCard({
  text,
  option,
  isSelected,
  onOptionChange,
}: RadioCardProps) {
  const handleRadioClick = () => {
    onOptionChange(option);
  };

  return (
    <div
      onClick={handleRadioClick}
      className={`p-5 rounded-xl ${
        isSelected ? "border-2 border-blue-500" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* <RadioInput isSelected={isSelected} /> */}
          {/* <RadioButton isSelected={isSelected} /> */}
          <RadioDiv isSelected={isSelected} />
          <span>{text}</span>
        </div>
        <span>이미지</span>
      </div>
    </div>
  );
}
