import { useState } from "react";
import { useDispatch } from "react-redux";
import { addField } from "../Slices/fieldsSlice";

const DateInput = () => {
  const dispatch = useDispatch();

  const [fieldData, setFieldData] = useState({
    fieldType: "date",

    displayName: "",
    dataType: "Date",
    minDate: "1900-01-01",
    maxDate: "2100-01-01",
    maxLength: "10",
    mandatory: "no",
    fieldData: "",
  });

  const handleInputChange = (e) => {
    setFieldData({ ...fieldData, [e.target.name]: e.target.value });
  };

  const isDateWithinRange = (date, minDate, maxDate) => {
    const dateVal = new Date(date);
    const min = new Date(minDate);
    const max = new Date(maxDate);
    return (
      dateVal >= min && dateVal <= max && dateVal.toString() !== "Invalid Date"
    );
  };

  const handleConfirm = () => {
    if (
      isDateWithinRange(
        fieldData.fieldData,
        fieldData.minDate,
        fieldData.maxDate
      )
    ) {
      dispatch(addField(fieldData));
      // console.log("Field Data on Confirm:", fieldData);
    } else {
      alert("Validation error: Date is not within the specified range.");
      console.error(
        "Validation error: Date is not within the specified range."
      );
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
          <option value="Date">Date</option>
        </select>
      </div>
      <div>
        <p>Date Range Validation</p>
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
            <p>Min Date</p>
            <input
              type="date"
              name="minDate"
              value={fieldData.minDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <p>Max Date</p>
            <input
              type="date"
              name="maxDate"
              value={fieldData.maxDate}
              onChange={handleInputChange}
            />
          </div>
        </div>
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
      <div>
        <p>Field Data</p>
        <input
          type="date"
          name="fieldData"
          value={fieldData.fieldData}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default DateInput;
