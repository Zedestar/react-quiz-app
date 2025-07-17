function Question({ question }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      {question.options.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}

export default Question;
