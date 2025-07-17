function Question({ question }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>

      <div className="options">
        {question.options.map((item) => (
          <button className="btn btn-option">{item}</button>
        ))}
      </div>
    </div>
  );
}

export default Question;
