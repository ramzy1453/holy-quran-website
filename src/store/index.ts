import theme from "./theme";
import translation from "./translation";
import { configureStore } from "@reduxjs/toolkit";
import Api from "./api";
const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
    theme,
    translation,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(Api.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
