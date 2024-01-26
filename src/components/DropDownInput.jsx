import { useState } from "react";
import { addField } from "../Slices/fieldsSlice";
import { useDispatch } from "react-redux";

const DropDownInput = () => {
  const dispatch = useDispatch();
  const [fieldData, setFieldData] = useState({
    fieldType: "drop-down",
    displayName: "",
    dataType: "text",
    minDate: "1900-01-01",
    maxDate: "2100-01-01",
    maxLength: "10",
    mandatory: "no",
    fieldData: "",
  });

  const handleInputChange = (e) => {
    setFieldData({ ...fieldData, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    dispatch(addField(fieldData));
    // console.log("Field Data on Confirm:", fieldData);
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
          value={fieldData.displayName}
          placeholder="name"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <p>Field Data Type</p>
        <select
          name="dataType"
          value={fieldData.dataType}
          onChange={handleInputChange}
        >
          <option value="text">Text</option>
          <option value="date">Date</option>
          <option value="Drop-down">Drop-down</option>
        </select>
      </div>

      <div>
        <p>Mandatory</p>
        <select
          name="mandatory"
          value={fieldData.mandatory}
          onChange={handleInputChange}
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      {fieldData.dataType === "text" && (
        <div>
          <p>Field Data</p>
          <input
            type="text"
            name="fieldData"
            value={fieldData.fieldData}
            onChange={handleInputChange}
          />
        </div>
      )}

      {fieldData.dataType === "date" && (
        <div>
          <p>Field Data</p>
          <input
            type="date"
            name="fieldData"
            value={fieldData.fieldData}
            onChange={handleInputChange}
          />
        </div>
      )}

      {fieldData.dataType === "Drop-down" && (
        <div>
          <p>Field Data</p>
          <input
            type="text"
            name="fieldData"
            value={fieldData.fieldData}
            onChange={handleInputChange}
          />
        </div>
      )}

      <div>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default DropDownInput;
