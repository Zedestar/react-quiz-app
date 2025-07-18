import { useEffect } from "react";

function Timer({ timeRemaining, dispach }) {
  useEffect(() => {
    setInterval(
      () => dispach({ typeof: "timeRemaining" }),

      1000
    );
  }, []);

  return <div className="timer">{timeRemaining}</div>;
}

export default Timer;
