function Question({ question }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      {question.options.map((item) => (
        <button className="btn btn-option">{item}</button>
      ))}
    </div>
  );
}

export default Question;
