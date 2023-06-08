import Select from "react-select";

interface OptionType {
  value: string;
  label: string;
  color: string;
  isDisabled?: boolean;
}

export default function Dropdown() {
  const options: OptionType[] = [
    { value: "ocean", label: "Ocean", color: "#00B8D9" },
    { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630" },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
  ];

  return (
    <Select
      defaultValue={[options[2], options[3]]}
      isMulti
      name="options"
      options={options}
    />
  );
}
