import Content from "./Components/Content";
import "./App.css";
import { ThemeProvider } from "./Components/ThemeContext";
function App() {
  return (
    <div>
      <ThemeProvider>
        <Content />
      </ThemeProvider>
    </div>
  );
}

export default App;
