import { useEffect } from "react";

function Timer({ timeRemaining, dispach }) {
  useEffect(() => {
    const id = setInterval(() => {
      dispach({ type: "setTime" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispach]);

  return <div className="timer">{timeRemaining}</div>;
}

export default Timer;
