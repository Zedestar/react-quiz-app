function FinishScreen({ points, totalPoints }) {
  return (
    <p className="results">
      You have got
      {points} out of{totalPoints}
    </p>
  );
}

export default FinishScreen;
