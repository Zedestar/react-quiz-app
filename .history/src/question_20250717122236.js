import Options from "./Options";

function Question({ question, answer, dispach }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} answer={answer} dispach={dispach} />
    </div>
  );
}

export default Question;
