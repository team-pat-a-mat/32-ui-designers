
import { ChangeEvent, useState } from "react";

export default function Basic() {
  const [basicDate, setBasicDate] = useState("");

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBasicDate(event.target.value);
  };
  return (
    <div>
      <input
        className="border-2 border-gray-200 rounded-md p-2 mb-2"
        type="date"
        value={basicDate}
        min="2023-01-01"
        max="2023-12-31"
        onChange={handleDateChange}
      />
      <p>날짜 : {basicDate}</p>
    </div>
  );
}
