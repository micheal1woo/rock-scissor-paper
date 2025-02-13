import paperImg from "../assets/paper.svg";
import rockImg from "../assets/rock.svg";
import scissorImg from "../assets/scissor.svg";

const HandImages ={
  rock : rockImg,
  paper : paperImg,
  scissor : scissorImg
}
const HandDisplay =({playerHand = "rock", otherHand = "rock"})=> {
  
  return(
    <div>
      <img src = {HandImages[playerHand]} alt="바위 이미지"/>
      <span>vs</span>
      <img src = {HandImages[otherHand]} alt="바위 이미지"/>
    </div>
  )
} 