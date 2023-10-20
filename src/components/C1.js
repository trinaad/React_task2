import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const divStyle = {
    background: "linear-gradient(270deg, #7FFFD4, #6CB4EE)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const calculatorStyle = {
    width: 300,
    height: 500,
    background: "#333",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const buttonStyle = {
    width: "70px",
    height: "70px",
    background: "#555",
    color: "white",
    borderRadius: "50%",
    fontSize: "20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
      setOutput("");
    } else if (value === "=") {
      try {
        setOutput(eval(input));
      } catch (error) {
        setOutput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  return (
    <div style={divStyle}>
      <div style={calculatorStyle}>
        <input
          type="text"
          value={input}
          readOnly
          style={{
            width: "90%",
            height: "50px",
            fontSize: "24px",
            margin: "10px 0",
            background: "#222",
            border: "none",
            color: "white",
            borderRadius: "5px",
            padding: "5px",
          }}
        />
        <input
          type="text"
          value={output}
          readOnly
          style={{
            width: "90%",
            height: "50px",
            fontSize: "24px",
            margin: "10px 0",
            background: "#222",
            border: "none",
            color: "white",
            borderRadius: "5px",
            padding: "5px",
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {buttons.map((button) => (
            <button
              key={button}
              style={buttonStyle}
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
