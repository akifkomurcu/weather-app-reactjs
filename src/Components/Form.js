import cities from "../cities.json";
import Fetch from "./Fetch";
import "../App.css";
import { useState } from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";
function Form() {
  const [result, setResult] = useState({
    name: "adana",
    latitude: "37.00167",
    longitude: "35.32889",
  });
  const { theme, setTheme } = useContext(ThemeContext);
  const [form, setForm] = useState(result);
  const onChangeInput = (e) => {
    setResult(cities.find((cities) => cities.name === form.name));
  };
  return (
    <div className="form">
      <span style={{ marginBottom: "20px" }}>select a city</span>
      <br />
      <select
        name={form.name}
        onChange={(e) => setForm({ name: e.target.value })}
      >
        {cities.map((e, i) => (
          <option key={i} value={e.name}>
            {e.name}
          </option>
        ))}
      </select>
      <br />
      <button
        style={{ marginTop: "10px" }}
        type="submit"
        className="btn btn-primary"
        onClick={onChangeInput}
      >
        Send
      </button>
      <Fetch result={result} />
    </div>
  );
}

export default Form;
