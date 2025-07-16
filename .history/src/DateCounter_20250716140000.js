import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
} from "./features/counter/counter-slice";

function DateCounter() {
  // const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  // date.setDate(date.getDate() + count);

  // const dec = function () {
  //   // setCount((count) => count - 1);
  //   setCount((count) => count - step);
  // };

  // const inc = function () {
  //   // setCount((count) => count + 1);
  //   setCount((count) => count + step);
  // };

  // const defineCount = function (e) {
  //   setCount(Number(e.target.value));
  // };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    setStep(1);
  };

  const counter = useSelector((state) => state.counter.value);
  const dispach = useDispatch();

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={() => dispach(decrement())}>-</button>
        <input
          value={counter}
          //  onChange={defineCount}
        />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
