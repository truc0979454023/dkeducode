import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/authReducer";
import alert from "./reducers/alertReducer";
import event from "./reducers/eventReducer";
import competition from "./reducers/competitionReducer";

export const store = configureStore({
  reducer: {
    auth,
    alert,
    event,
    competition,
  },
});
