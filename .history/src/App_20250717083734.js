// import DateCounter from "./DateCounter";
import { useEffect } from "react";
import Header from "./Header";
import Main from "./main";

function App() {

  useEffect({
    fetch("http://localhost:9000/questions").then()
  }, [])

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Questions</p>
      </Main>
    </div>
  );
}

export default App;
