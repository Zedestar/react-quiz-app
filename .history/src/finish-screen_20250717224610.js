function FinishScreen({ points, totalPoints }) {
  return (
    <p className="results">
      You have got
      {points}/{totalPoints}
    </p>
  );
}

export default FinishScreen;
