"use client";

import Basic from "../components/picker/basic";
import Color from "../components/picker/color";
import Date from "../components/picker/date";
import Dropdown from "../components/picker/dropdown";
import Wheel from "../components/picker/wheel";

export default function Picker() {
  return (
    <main className="flex flex-col space-y-5">
      <Basic />
      <Dropdown />
      {/* react-datepicker 호환성 문제로 작동안됨 */}
      <Date />
      {/* react-color 호환성 문제로 작동안됨 */}
      <Color />
      {/* react-wheelpicker 호환성 문제로 작동안됨 */}
      {/* <Wheel /> */}
    </main>
  );
}
