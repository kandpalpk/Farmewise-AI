import { useState } from "react";
import TextInput from "./TextInput";
import DateInput from "./DateInput";
import DropDownInput from "./DropDownInput";

const CustomInputs = () => {
  const [fieldOption, setFieldOption] = useState("Text");
  const handleSelectedOption = (event) => {
    setFieldOption(event.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <p> Field Type</p>
        <div>
          <select onChange={handleSelectedOption}>
            <option value="Text">Text</option>
            <option value="Date">Date</option>
            <option value="Drop-down">Drop-down</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          {fieldOption === "Text" && <TextInput />}
          {fieldOption === "Date" && <DateInput />}
          {fieldOption === "Drop-down" && <DropDownInput />}
        </div>
      </div>
    </div>
  );
};

export default CustomInputs;
