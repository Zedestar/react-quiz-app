function FinishScreen({ points, totalPoints, dispach, questions }) {
  return (
    <>
      <p className="result">
        You have got
        <strong>{points}</strong> out of <strong>{totalPoints}</strong>
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispach({ type: "resetQuiz", payload: questions })}
      >
        Retake quiz
      </button>
    </>
  );
}

export default FinishScreen;
