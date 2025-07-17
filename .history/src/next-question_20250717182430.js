function NextQuestion(dispach, answer) {
  //   if (answer == null) return null;
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispach({ type: "nextQuestion" })}
    >
      Next Question
    </button>
  );
}

export default NextQuestion;
