"use client";
import { useState } from "react";
import RadioCard from "../components/radio/card";

export default function RadioButtons() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (option: string) => {
    setSelectedOptions(prevOptions =>
      prevOptions.includes(option)
        ? prevOptions.filter(o => o !== option)
        : [...prevOptions, option],
    );
  };
  return (
    <main className="space-y-3 ">
      {[...Array(5)].map((_, i) => (
        <RadioCard
          text={`Option ${i + 1}`}
          option={`option${i + 1}`}
          isSelected={selectedOptions.includes(`option${i + 1}`)}
          onOptionChange={handleOptionChange}
        />
      ))}
    </main>
  );
}
