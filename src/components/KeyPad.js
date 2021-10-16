import React, { useState, useEffect } from "react";
import firebasedb from "../config";
import { infixToPostfix } from "infix-to-postfix";
const KeyPad = (props) => {
  const [result, setResult] = useState("");


  const buttonPressed = (e) => {
    props.buttonPressed(e.target.name);
  };

  useEffect(() => {
    setResult(props.results);
  }, [props.results]);

  const onTodo = (e) => {
    console.log(infixToPostfix(props.inputs));
    props.buttonPressed(e.target.name);
    e.preventDefault();
    const todoRef = firebasedb.database().ref("calculator");

    todoRef.push({
      result: eval(result),
      input: props.inputs,
      postfix: infixToPostfix(props.inputs),
    });
  };

  return (
    <div className="button">
      <button onClick={buttonPressed} name="(">
        (
      </button>
      <button onClick={buttonPressed} name="CE">
        CE
      </button>
      <button onClick={buttonPressed} name=")">
        )
      </button>
      <button onClick={buttonPressed} name="C">
        C
      </button>
      <button onClick={buttonPressed} name="1">
        1
      </button>
      <button onClick={buttonPressed} name="2">
        2
      </button>
      <button onClick={buttonPressed} name="3">
        3
      </button>
      <button onClick={buttonPressed} name="+">
        +
      </button>
      <button onClick={buttonPressed} name="4">
        4
      </button>
      <button onClick={buttonPressed} name="5">
        5
      </button>
      <button onClick={buttonPressed} name="6">
        6
      </button>
      <button onClick={buttonPressed} name="-">
        -
      </button>
      <button onClick={buttonPressed} name="7">
        7
      </button>
      <button onClick={buttonPressed} name="8">
        8
      </button>
      <button onClick={buttonPressed} name="9">
        9
      </button>

      <button onClick={buttonPressed} name="*">
        *
      </button>
      <button onClick={buttonPressed} name=".">
        .
      </button>
      <button onClick={buttonPressed} name="0">
        0
      </button>

      <button onClick={onTodo} name="=">
        =
      </button>

      <button onClick={buttonPressed} name="/">
        /
      </button>
      {/* <button onClick={buttonPressed} name="=">=</button> */}
      <p></p>
    </div>
  );
};

export default KeyPad;
