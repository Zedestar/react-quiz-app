import { useEffect } from "react";

function Timer({ timeRemaining, dispach }) {
  useEffect(() => {
    const id = setInterval(() => {
      dispach({ type: "setTime" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispach]);

  const mins = Math.floor(timeRemaining / 60);
  const secs = Math.floor(timeRemaining % 60);

  return (
    <div className="timer">
      <strong>{mins}</strong>:<strong>{secs}</strong>
    </div>
  );
}

export default Timer;
