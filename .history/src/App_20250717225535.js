// import DateCounter from "./DateCounter";
import { useEffect, useReducer } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
// import Main from "./main";
import StartScreen from "./start-screen";
import Question from "./question";
import FinishScreen from "./finish-screen";

const initialState = {
  questions: [],
  // laoding, error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
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
    case "newAnswer":
      const currentQuestion = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          currentQuestion.correctOption === action.payload
            ? state.points + currentQuestion.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        state.index <=state.questions.length -1 ?
        index: state.index + 1,
        answer: null,
        : status:"finished",
      };
    default:
      throw new Error("The action is unknown");
  }
}

function App() {
  const [{ questions, status, index, answer, points }, dispach] = useReducer(
    reducer,
    initialState
  );
  const numberOfQuestion = questions.length;
  const totalPoints = questions.reduce((accumulator, current) => {
    return accumulator + current.points;
  }, 0);

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
      {status === "active" && (
        <Question
          question={questions[index]}
          answer={answer}
          dispach={dispach}
          points={points}
          index={index}
          numberOfQuestion={numberOfQuestion}
          totalPoints={totalPoints}
        />
      )}

      {status === "finished" && (
        <FinishScreen totalPoints={totalPoints} points={points} />
      )}
    </div>
  );
}

export default App;
