const ScoreBoard = ({ playerScore, otherScore }) => {
  return (
    <div>
      <div>
        <div>{playerScore}</div>
        <div>나</div>
      </div>
      <div>:</div>
      <div>
        <div>{otherScore}</div>
        <div>상대방</div>
      </div>
    </div>
  );
};

export default ScoreBoard;
