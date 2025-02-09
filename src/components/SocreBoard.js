const SocreBoard = ({playScore, otherScore}) => {
  return(
    <div>
      <div>
        <div>{playScore}</div>
        <div>나</div>
      </div>
      <div>:</div>
      <div>
        <div>{otherScore}</div>
        <div>상대방</div>
      </div>
    </div>
  )
}