import DateCounter from "./DateCounter";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
} from "./features/counter/counter-slice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispach = useDispatch();
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispach(increment())}>+</button>
      <button>-</button>

      {/* <DateCounter /> */}
    </div>
  );
}

export default App;
