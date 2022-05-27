import { useContext } from "react";
import ThemeContext from "./ThemeContext";
function ChangeTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="changetheme">
      <button
        className="themeButton"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        Change Theme
      </button>
    </div>
  );
}

export default ChangeTheme;
