import { useState } from "react";
import { useDispatch } from "react-redux";
import { addField } from "../Slices/fieldsSlice";

const TextInput = () => {
  const dispatch = useDispatch();
  const [localFieldData, setLocalFieldData] = useState({
    fieldType: "text",

    displayName: "",
    dataType: "text",
    minDate: "1900-01-01",
    maxDate: "2100-01-01",
    maxLength: "10",
    mandatory: "no",
    fieldData: "",
  });

  const handleInputChange = (e) => {
    setLocalFieldData({ ...localFieldData, [e.target.name]: e.target.value });
  };

  const isValidFieldData = () => {
    const maxLength = parseInt(localFieldData.maxLength, 10);
    if (localFieldData.dataType === "number") {
      const numberValue = Number(localFieldData.fieldData);
      return (
        !isNaN(numberValue) &&
        localFieldData.fieldData.toString().length <= maxLength
      );
    } else if (localFieldData.dataType === "string") {
      return localFieldData.fieldData.length <= maxLength;
    }

    return true;
  };

  const handleConfirm = () => {
    if (isValidFieldData()) {
      dispatch(addField(localFieldData));
    } else {
      alert("Validation error: Field data does not meet the criteria.");
      console.error("Validation error: Field data does not meet the criteria.");
    }
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
        <p>Field Display Name</p>
        <input
          type="text"
          name="displayName"
          value={localFieldData.displayName}
          placeholder="name"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <p>Field Data Type</p>
        <select
          name="dataType"
          value={localFieldData.dataType}
          onChange={handleInputChange}
        >
          <option value="string">String</option>
          <option value="number">Number</option>
        </select>
      </div>
      <div>
        <p>Field Max length allowed</p>
        <input
          type="number"
          name="maxLength"
          value={localFieldData.maxLength}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <p>Mandatory</p>
        <select
          name="mandatory"
          value={localFieldData.mandatory}
          onChange={handleInputChange}
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div>
        <p>Field Data</p>
        <input
          type={localFieldData.dataType}
          name="fieldData"
          value={localFieldData.fieldData}
          onChange={handleInputChange}
          maxLength={parseInt(localFieldData.maxLength)}
        />
      </div>
      <div>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default TextInput;
