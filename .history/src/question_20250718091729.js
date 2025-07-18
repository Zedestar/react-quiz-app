import Options from "./Options";
import Footer from "./footer";
import NextQuestion from "./next-question";
import Progress from "./progress";
import Timer from "./timer";

function Question({
  question,
  answer,
  dispach,
  points,
  index,
  numberOfQuestion,
  totalPoints,
  timeRemaining,
}) {
  console.log(question);
  return (
    <div>
      <Progress
        index={index}
        numberOfQuestion={numberOfQuestion}
        totalPoints={totalPoints}
        points={points}
      />
      <h4>{question.question}</h4>
      <Options question={question} answer={answer} dispach={dispach} />
      <Footer>
        <Timer timeRemaining={timeRemaining} dispach={dispach} />
        <NextQuestion dispach={dispach} answer={answer} />
      </Footer>
    </div>
  );
}

export default Question;
