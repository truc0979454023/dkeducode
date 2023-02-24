import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/authReducer";
import alert from "./reducers/alertReducer";
import feature from "./reducers/featureReducer";

export const store = configureStore({
  reducer: {
    auth,
    alert,
    feature,
  },
});

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
