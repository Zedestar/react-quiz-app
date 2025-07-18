import { useEffect } from "react";

function Timer({ timeRemaining }) {
  useEffect(() => {
    setInterval(() => {}, 1000);
  }, []);

  return <div className="timer">{timeRemaining}</div>;
}

export default Timer;
