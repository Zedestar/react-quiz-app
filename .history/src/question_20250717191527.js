import Options from "./Options";
import NextQuestion from "./next-question";
import Progress from "./progress";

function Question({ question, answer, dispach, points, index }) {
  console.log(question);
  return (
    <div>
      <Progress index={index} />
      <h4>{question.question}</h4> <p>Points {points}</p>
      <Options question={question} answer={answer} dispach={dispach} />
      <NextQuestion dispach={dispach} answer={answer} />
    </div>
  );
}

export default Question;
