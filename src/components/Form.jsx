import { useState } from "react";
import CustomInputs from "./CustomInputs";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Slices/userSlice";
import Table from "./Table";
const Form = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const handleDropDown = (e) => {
    dispatch(setUser(e.target.value));
  };

  const [inputNum, setInputNum] = useState(0);
  const handleAddField = () => {
    if (inputNum < 4) {
      setInputNum(inputNum + 1);
    } else {
      alert("Cannot add more input fields");
    }
  };

  const components = [];
  for (let i = 0; i < inputNum; i++) {
    components.push(<CustomInputs key={i} />);
  }

  return (
    <>
      <div>
        <div>
          <h2>Dynamic form collection method</h2>
          <div>
            <select onChange={handleDropDown}>
              <option value="Student">Student</option>
              <option value="Self-Employed">Self-Employed</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <div>{user && <p>Selected User: {user}</p>}</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              gap: "20px",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <div>
              <button onClick={handleAddField}> Add Field </button>
            </div>
          </div>
        </div>
        <div>{components}</div>
        <div>
          <Table />
        </div>
      </div>
    </>
  );
};

export default Form;
