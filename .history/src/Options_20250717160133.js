function Options({ question, answer, dispach }) {
  return (
    <div className="options">
      {question.options.map((option) => (
        <button
          className="btn btn-option"
          key={option}
          onClick={dispach({ type: "newAnswer", pay })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
