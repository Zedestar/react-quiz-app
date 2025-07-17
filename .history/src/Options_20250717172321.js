function Options({ question, answer, dispach }) {
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            answer != null
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={answer != null}
          onClick={() => {
            dispach({ type: "newAnswer", payload: index });
            dispach({ type: "correctAnswer", payload: question.});
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
