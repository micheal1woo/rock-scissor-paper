import { useState } from "react";
import HandButton from "./components/HandButton"
import History from "./components/History"
import Betting from "./components/Betting"
import HandDisplay from "./components/HandDisplay";
import ScoreBoard from "./components/SocreBoard";
import resetImg from "./assets/ic-reset.svg";
const App = () =>{

  const [playScore, setPlayScore] = useState(0);
  
  const [otherScore, setOtherScore] = useState(0);

  const ResetButton = () =>{
    // 초기화 변수들 추가
  }





  return (
    <div>
      <h1>가위바위보</h1>
      <img
        className="App-reset" 
        src={resetImg} 
        alt="초기화"
        onClick={ResetButton} 
      />
      <div>
        <ScoreBoard playScore={playScore} otherScore={otherScore}/> {/* 양쪽 playScore 점수 추가해야함(함수) */}
      </div>
      <div className="Box App-box">
        <div>
          <HandDisplay/> {/* Hand결과에 따라 바뀌는 이미지 함수 추가해야함 */}
          <Betting/> {/* 베팅값 추가 */}
          <History/> {/* history 추가 */}
        </div>
      </div>
      <div>
        {/* 버튼 onClick시 hand전달하게 */}
        <HandButton/> 
      </div>
    </div>
  );
}
export default App;