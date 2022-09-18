import { useTheme } from "../hooks";
import styles from "../styles/themeToggle.module.css";
type Props = {};

export default function DarkModeToggle(props: Props) {
  const { isDark, toggleTheme } = useTheme();
  return (
    <label
      className={styles.container}
      title={isDark ? "Activate light mode" : "Activate dark mode"}
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
    >
      <input type="checkbox" defaultChecked={!isDark} onChange={toggleTheme} />
      <div />
    </label>
  );
}
