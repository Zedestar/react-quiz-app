import DateCounter from "./DateCounter";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
} from "./features/counter/counter-slice";

function App() {
  const count = useSelector((state) => state.counterr.value);
  return (
    <div>
      <p>{count}</p>

      {/* <DateCounter /> */}
    </div>
  );
}

export default App;
