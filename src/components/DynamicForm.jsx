import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DynamicForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.FormData);

  useEffect(() => {
    setLocalFormData(formData);
  }, [formData]);

  const [localFormData, setLocalFormData] = useState(formData);
  // console.log(localFormData);

  const handleChange = (e, fieldName, fieldType) => {
    const updatedFormData = localFormData.map((field) => {
      if (field.displayName === fieldName) {
        if (fieldType === "drop-down") {
          // Update the selectedValue for dropdown
          return { ...field, selectedValue: e.target.value };
        } else {
          // Update the fieldData for other types
          return { ...field, fieldData: e.target.value };
        }
      }
      return field;
    });

    setLocalFormData(updatedFormData);
  };

  const renderInputField = (field, index) => {
    if (field.fieldType === "text") {
      return (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label>{field.displayName}</label>
          <input
            type="text"
            value={field.fieldData || ""}
            maxLength={field.maxLength}
            onChange={(e) => handleChange(e, field.displayName)}
          />
        </div>
      );
    }

    if (field.fieldType === "number") {
      return (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 10px",
          }}
        >
          <label>{field.displayName}</label>
          <input
            type="number"
            value={field.fieldData || ""}
            maxLength={field.maxLength}
            onChange={(e) => handleChange(e, field.displayName)}
          />
        </div>
      );
    }

    if (field.fieldType === "date") {
      return (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 10px",
          }}
        >
          <label>{field.displayName}</label>
          <input
            type="date"
            value={field.fieldData || ""}
            min={field.minDate}
            max={field.maxDate}
            onChange={(e) => handleChange(e, field.displayName)}
          />
        </div>
      );
    }

    if (field.fieldType === "drop-down") {
      const options = field.fieldData.split(" ").map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ));

      return (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 10px",
          }}
        >
          <label>{field.displayName}</label>
          <select
            value={field.selectedValue || ""}
            onChange={(e) => handleChange(e, field.displayName, "drop-down")}
          >
            {options}
          </select>
        </div>
      );
    }
  };

  return (
    <form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        {localFormData.map(renderInputField)}
      </div>
    </form>
  );
};

export default DynamicForm;
