
import React, { useState, useEffect } from "react";
import Calculator from "./components/Calculator";
import "./App.css"; 

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  return (
    <div className="App">
      <button className="theme-switcher" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <Calculator />
      <p className="developer">
        Developed by <span>Pratyaksh Dixit</span>
      </p>
    </div>
  );
};

export default App;
