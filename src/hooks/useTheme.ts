import { AppDispatch, RootState } from "../store/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { themeActions } from "../store/theme";

export default function useTheme() {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const dispatch: AppDispatch = useDispatch();
  const toggleTheme = () => {
    dispatch(themeActions.toggleTheme());
  };
  return { isDark, toggleTheme };
}
