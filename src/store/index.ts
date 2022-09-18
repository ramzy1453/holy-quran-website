import theme from "./theme";
import translation from "./translation";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    theme,
    translation,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
