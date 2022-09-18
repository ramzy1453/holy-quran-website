import { Locale } from "../types/translations";
import { AppDispatch, RootState } from "../store/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { translationActions } from "../store/translation";

export default function useTranslation() {
  const translation = useSelector((state: RootState) => state.translation);
  const dispatch: AppDispatch = useDispatch();
  const setTranslation = (locale: Locale) => {
    dispatch(translationActions.setTranslation(locale));
  };
  return { translation, setTranslation };
}
