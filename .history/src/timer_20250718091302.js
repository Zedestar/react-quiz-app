import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    setInterval(() => {}, 1000);
  }, []);

  return <div className="timer">Timer</div>;
}

export default Timer;
