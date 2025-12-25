import { useState } from "react";
import "./App.css";
import Lightflower from "./Lightflower.jsx";
import Darkflower from "./Darkflower.jsx";
import { RiFlowerFill } from "react-icons/ri";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      {isDarkMode ? <Darkflower /> : <Lightflower />}

      <div
        className={`button ${isDarkMode ? "lightbutton" : "darkbutton"}`}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <RiFlowerFill />
      </div>
    </>
  );
}

export default App;
