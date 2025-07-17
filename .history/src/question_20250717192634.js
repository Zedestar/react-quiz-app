import Options from "./Options";
import NextQuestion from "./next-question";
import Progress from "./progress";

function Question({
  question,
  answer,
  dispach,
  points,
  index,
  numberOfQuestion,
  totalPoints,
}) {
  console.log(question);
  return (
    <div>
      <Progress
        index={index}
        numberOfQuestion={numberOfQuestion}
        totalPoints={totalPoints}
      />
      <h4>{question.question}</h4> <p>Points {points}</p>
      <Options question={question} answer={answer} dispach={dispach} />
      <NextQuestion dispach={dispach} answer={answer} />
    </div>
  );
}

export default Question;
