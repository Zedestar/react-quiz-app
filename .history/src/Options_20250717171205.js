function Options({ question, answer, dispach }) {
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            index === question.correctOption && answer ? "correct" : "wrong"
          }`}
          key={option}
          disabled={answer}
          onClick={() => dispach({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
