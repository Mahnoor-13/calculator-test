import React, { useEffect } from "react";
import "./App.css";
import KeyPad from "./components/KeyPad";
import OutPut from "./components/OutPut";
import { useState } from "react";
import firebasedb from "./config";
import { infixToPostfix } from "infix-to-postfix";

function App(props) {
  const [state, setState] = useState("");
  const [inputs, setInputs] = useState("");
  const [data, setData] = useState(null);
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const buttonPressed = (buttonName) => {
    if (buttonName === "=") {
      calculate();
    } else if (buttonName === "C") {
      reset();
    } else if (buttonName == "CE") {
      backspace();
    } else {
      setInputs(state + buttonName);
      setState(state + buttonName);
    }
  };

  const reset = () => {
    setState("");
  };
  const backspace = () => {
    setState(state.toString().slice(0, -1));
  };
  const calculate = () => {
    try {
      setState(eval(state));
    } catch (error) {
      setState("Syntex error");
    }
  };

  useEffect(() => {
    const _data = firebasedb.database().ref("calculator");
    let newValue = [];
    _data.on("child_added", (snapshot) => {
      newValue.push({
        result: snapshot.val().result,
        input: snapshot.val().input,
        postfix: snapshot.val().postfix,
      });
      // });

      console.log("newValue", newValue);
    });
    setHistory(newValue);
  }, [2000]);

  return (
    <div className="App">
      <div className="calc-body">
        <OutPut results={state} />
        <KeyPad
          buttonPressed={buttonPressed}
          inputs={inputs}
          setInputs={setInputs}
          results={state}
        />
      </div>

      {history.map((data) => {
        return (
          <div key={props} className="values">
            <span>Infix: {data.input}</span>
            <span>Postfix: {data.postfix}</span>
            <span>Result: {data.result}</span>
            <p>---------------------</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
