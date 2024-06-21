import React from "react";

const KeysWindow = ({ handleButton }) => {
  const keys = [
    "(", ")", "MC", "M+", "M-", "MR", "AC", "+/-", "%",
    "÷", "2nd", "x²", "x³", "xʸ", "eˣ", "10ˣ","7","8",
    "9","X","¹/x","²√x" ,"³√x", "ʸ√x","ln" , "log₁₀","4",
    "5", "6", "-","x!" ,"sin" , "cos", "tan", "e",
    "EE", "1","2" ,"3", "+", "Rad", "sinh","cosh", "tanh", "Rand","π" ,"DEL","0",".","=",
  ];

  return (
    <div className="keysWindow">  
      <div className="keys_grid">
        {keys.map((item, index) => (
          <button
            key={index}
            className={`${item >= "0" && item <= "9" ? "number" : ""} ${
              item === "=" ? "equal" : ""
            } ${item === "Merged" ? "merged" : ""}`}
            onClick={() => handleButton(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KeysWindow;
