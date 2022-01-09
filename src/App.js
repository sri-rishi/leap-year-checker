import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  let [value, setValue] = useState("");
  const [greet, setGreet] = useState("");
  const [error, setError] = useState("");

  const inputHandler = (event) => {
    let userInput = event.target.value;
    value = userInput;
    setValue(userInput);
  };

  const clickHandler = () => {
    if (isNaN(value)) {
      setError("Error: You have entered wrong type");
    } else {
      if ((value % 4 === 0 && value % 100 !== 0) || value % 400 === 0) {
        setGreet("Yep! Born in leap year");
      } else {
        setGreet("Sorry! not a leap year");
      }
    }
  };

  return (
    <div className="App">
      <h1>leap Year Checker</h1>
      <input onChange={inputHandler} />
      <button onClick={clickHandler}>Check</button>
      <div className="error">{error}</div>
      <div className="greet">{greet}</div>

      <footer>
        <div>
          <p className="about">About</p>
          <p>
            Have you ever wonder that year you have been born might be a leap
            year. So, you can check now by just entering your birth year.
          </p>
          <p>
            So, check and have fun with <strong>Leap Year Checker</strong>
          </p>
          <p>
            Made by{" "}
            <a href="https://rishiportfolio.netlify.app">Rishi Srivastav</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
