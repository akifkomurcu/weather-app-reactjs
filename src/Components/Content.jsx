import React from "react";
import Form from "./Form";
import ChangeTheme from "./ChangeTheme";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Content() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
      <ChangeTheme />
      <Form />
    </div>
  );
}

export default Content;
