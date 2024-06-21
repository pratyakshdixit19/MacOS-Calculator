import React, { useState } from "react";
import DisplayWindow from "./DisplayWindow";
import KeysWindow from "./KeysWindow";
import * as math from "mathjs"; 

const Calculator = () => {
  const [displayEXP, setDisplayEXP] = useState("");
  const [result, setResult] = useState("");
  const [memory, setMemory] = useState(0); 
  const [history, setHistory] = useState([]);

  const handleButton = (item) => {
    if (item === "AC") {
      setDisplayEXP("");
      setResult("");
    } else if (item === "DEL") {
      setDisplayEXP(displayEXP.slice(0, -1));
    } else if (item === "=") {
      try {
        const evalResult = math.evaluate(displayEXP);
        setResult(evalResult);
        setHistory((prevHistory) => [...prevHistory, { expression: displayEXP, result: evalResult }]);
      } catch (error) {
        setResult("Error");
      }
    } else if (item === "MC") {
      setMemory(0);
    } else if (item === "M+") {
      setMemory(memory + (result || 0));
    } else if (item === "M-") {
      setMemory(memory - (result || 0));
    } else if (item === "MR") {
      setDisplayEXP(displayEXP + memory);
    } else if (item === "+/-") {
      setDisplayEXP((prev) => (prev ? String(-1 * parseFloat(prev)) : ""));
    } else if (item === "π") {
      setDisplayEXP((prev) => prev + "pi");
    } else if (item === "÷") {
      setDisplayEXP((prev) => prev + "/");
    } else if (item === "X") {
      setDisplayEXP((prev) => prev + "*");
    }else if (item === "sin") {
      setDisplayEXP((prev) => prev + "sin(");
    } else if (item === "cos") {
      setDisplayEXP((prev) => prev + "cos(");
    } else if (item === "tan") {
      setDisplayEXP((prev) => prev + "tan(");
    } else if (item === "ln") {
      setDisplayEXP((prev) => prev + "log(");
    } else if (item === "log₁₀") {
      setDisplayEXP((prev) => prev + "log10(");
    } else if (item === "x²") {
      setDisplayEXP((prev) => prev + "^2");
    } else if (item === "x³") {
      setDisplayEXP((prev) => prev + "^3");
    } else if (item === "xʸ") {
      setDisplayEXP((prev) => prev + "^");
    } else if (item === "eˣ") {
      setDisplayEXP((prev) => prev + "exp(");
    } else if (item === "10ˣ") {
      setDisplayEXP((prev) => prev + "10^(");
    } else if (item === "¹/x") {
      setDisplayEXP((prev) => prev + "1/");
    } else if (item === "²√x") {
      setDisplayEXP((prev) => prev + "sqrt(");
    } else if (item === "³√x") {
      setDisplayEXP((prev) => prev + "cbrt(");
    } else if (item === "x!") {
      setDisplayEXP((prev) => prev + "!");
    } else {
      setDisplayEXP((prev) => prev + item);
    }
  



  };

  return (
    <div className="calculator">
  <DisplayWindow expression={displayEXP} result={result} />
  <KeysWindow handleButton={handleButton} />
  <div className="history">
    <h2>History</h2>
    <ul>
      {history.map((calculation, index) => (
        <li key={index}>
          <strong>Expression:</strong> {calculation.expression} <strong>Result:</strong> {calculation.result}
        </li>
      ))}
    </ul>
  </div>
</div>
  );
};

export default Calculator;
