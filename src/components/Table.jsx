import { useDispatch, useSelector } from "react-redux";
import { resetFields } from "../Slices/fieldsSlice";
import { useState } from "react";
import DynamicForm from "../components/DynamicForm";
import { resetForm, updateFormData } from "../Slices/formSlice";

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const thTdStyle = {
  border: "1px solid black",
  padding: "8px",
  textAlign: "left",
};

const Table = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);
  const fields = useSelector((state) => state.fields);
  const fieldList = fields.fieldList;
  const fieldLen = fieldList.length;
  // console.log(fieldLen);

  const [showForm, setShowForm] = useState(false);

  const handleReset = () => {
    console.log("Reseting.. ");
    setShowForm(false);
    dispatch(resetFields());
    dispatch(resetForm());
  };

  const handleConfirm = async () => {
    console.log("Confirming..");
    await new Promise((resolve) => {
      dispatch(updateFormData(fieldList));
      setTimeout(resolve, 500); // Delay in milliseconds
    });
    setShowForm(true);
  };
  return (
    <>
      <div>
        <h2>User: {user}</h2>
        {console.log(user)}
        {console.log(fields)}
      </div>
      <div>
        {fieldLen > 0 && (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thTdStyle}>Display Name</th>
                    <th style={thTdStyle}>Field Type</th>

                    <th style={thTdStyle}>Data Type</th>
                    <th style={thTdStyle}>Min Date</th>
                    <th style={thTdStyle}>Max Date</th>
                    <th style={thTdStyle}>Max Length</th>
                    <th style={thTdStyle}>Mandatory</th>
                    <th style={thTdStyle}>Field Data</th>
                  </tr>
                </thead>
                <tbody>
                  {fieldList.map((field, index) => (
                    <tr key={index}>
                      <td style={thTdStyle}>{field.displayName}</td>
                      <td style={thTdStyle}>{field.fieldType}</td>

                      <td style={thTdStyle}>{field.dataType}</td>
                      <td style={thTdStyle}>{field.minDate}</td>
                      <td style={thTdStyle}>{field.maxDate}</td>
                      <td style={thTdStyle}>{field.maxLength}</td>
                      <td style={thTdStyle}>{field.mandatory}</td>
                      <td style={thTdStyle}>{field.fieldData}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                // backgroundColor: "red",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px 0px",
                padding: "20px 0px",
              }}
            >
              <button onClick={handleConfirm}>Confirm</button>
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
        )}
        <div></div>
        {showForm && <DynamicForm />}
        {/* {fieldLen > 0 && <DynamicForm />} */}
        {/* <DynamicForm /> */}
      </div>
    </>
  );
};

export default Table;
