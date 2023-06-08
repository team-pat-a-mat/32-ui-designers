import { useState } from "react";
import WheelPicker from "react-wheelpicker";

const days = Array.from({ length: 31 }, (_, i) => `${i + 1}`);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const years = Array.from({ length: 101 }, (_, i) => `${i + 1920}`);

export default function Wheel() {
      const [day, setDay] = useState("1");
      const [month, setMonth] = useState("January");
      const [year, setYear] = useState("1920");

       const handleDayChange = (selectedIndex: number) =>
         setDay(days[selectedIndex]);
       const handleMonthChange = (selectedIndex: number) =>
         setMonth(months[selectedIndex]);
       const handleYearChange = (selectedIndex: number) =>
         setYear(years[selectedIndex]);
  return (
    <div className="flex space-x-4">
      <div className="flex-1">
        <WheelPicker
          animation="wheel"
          data={days}
          height={40}
          parentHeight={200}
          fontSize={13}
          defaultSelection={0}
          updateSelection={handleDayChange}
          scrollerId="day-picker"
        />
      </div>
      <div className="flex-1">
        <WheelPicker
          animation="wheel"
          data={months}
          height={40}
          parentHeight={200}
          fontSize={13}
          defaultSelection={0}
          updateSelection={handleMonthChange}
          scrollerId="month-picker"
        />
      </div>
      <div className="flex-1">
        <WheelPicker
          animation="wheel"
          data={years}
          height={40}
          parentHeight={200}
          fontSize={13}
          defaultSelection={0}
          updateSelection={handleYearChange}
          scrollerId="year-picker"
        />
      </div>
    </div>
  );
}
