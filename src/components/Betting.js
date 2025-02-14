const Betting = ({bet ="1", setBet ="1"}) => {

  return (
    <>
    <span>배점</span>
      <input 
        type="number" 
        min="1" 
        max="9" 
        step="1" 
        value={bet} 
        onChange={setBet} 
      />
    <span>배</span>
    </>
  );
}
export default Betting;