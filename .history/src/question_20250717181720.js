import Options from "./Options";

function Question({ question, answer, dispach, points }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4> <p>Points {points}</p>
      <Options question={question} answer={answer} dispach={dispach} />
      <NextQuestion />
    </div>
  );
}

export default Question;
