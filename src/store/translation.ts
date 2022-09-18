import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Locale } from "../types/translations";

const translationSlice = createSlice({
  name: "translation",
  initialState: navigator.language as Locale,
  reducers: {
    setTranslation(state, action: PayloadAction<Locale>) {
      return (state = action.payload);
    },
  },
});

export const translationActions = translationSlice.actions;
export default translationSlice.reducer;
