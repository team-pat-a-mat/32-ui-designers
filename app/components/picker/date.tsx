"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";

export default function Date() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | [Date, Date] | null) =>
          setSelectedDate(date as Date)
        }
        dateFormat="dd/MM/yyyy"
        isClearable
      />
    </>
  );
}
