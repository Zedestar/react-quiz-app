function FinishScreen({ points, totalPoints, dispach }) {
  return (
    <>
      <p className="results">
        You have got
        <strong>{points}</strong> out of <strong>{totalPoints}</strong>
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispach({ type: "resetQuiz" })}
      >
        Retake quiz
      </button>
    </>
  );
}

export default FinishScreen;
