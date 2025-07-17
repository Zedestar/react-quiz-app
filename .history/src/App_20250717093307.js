// import DateCounter from "./DateCounter";
import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./main";

const initialState = {
  questions: [],
  // laoding, error, ready, active, finished
  status: "laoding",
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
    default:
      throw new Error("The action is unknown");
  }
}

function App() {
  const [{questions, status}, dispach] = useReducer(reducer, initialState);

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
      {if( status == "loading")
        
        
        <Main>
        <p>1/15</p>
        <p>Questions</p>
      </Main>}
    </div>
  );
}

export default App;
