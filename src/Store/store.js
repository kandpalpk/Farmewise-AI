// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/userSlice";
import fieldsReducer from "../Slices/fieldsSlice";
import formReducer from "../Slices/formSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    fields: fieldsReducer,
    form: formReducer,
  },
});
