// import DateCounter from "./DateCounter";
import { useEffect, useReducer } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
// import Main from "./main";
import StartScreen from "./start-screen";
import Question from "./question";

const initialState = {
  questions: [],
  // laoding, error, ready, active, finished
  status: "loading",
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "startState":
      return {
        ...state,
        status: "active",
      };
    default:
      throw new Error("The action is unknown");
  }
}

function App() {
  const [{ questions, status, index }, dispach] = useReducer(
    reducer,
    initialState
  );
  const numberOfQuestion = questions.length;
  console.log(questions[index]);

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) =>
        dispach({
          type: "dataReceived",
          payload: data,
        })
      )
      .catch((err) =>
        dispach({
          type: "dataFailed",
        })
      );
  }, []);

  return (
    <div className="app">
      <Header />
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && (
        <StartScreen numberOfQuestion={numberOfQuestion} dispach={dispach} />
      )}
      {status === "active" && <Question />}
    </div>
  );
}

export default App;
