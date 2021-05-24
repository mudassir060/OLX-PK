import React, {useState} from "react"
import SquareComponent from "./SquareComponent";
const initialState = ["", "", "", "", "", "", "", "", ""]
function App() {
  const [gameState, updategameState] = useState(initialState);
  const[isXChance, updateisXChance] = useState(false)
  const onSquareClicked=(index)=>{
    let strings = Array.from(gameState);
    string[index] = isXChance ? "X" : "0";
    updategameState
  }
  return (
    <div className="app-header">
      <p className="heading-text">React Tic Toc Toe - 2021</p>
      <div className="row jc-center">
      <SquareComponent className='b-bottom-right' state={gameState[0]} onClick={()=>onSquareClicked(0)}/>
      <SquareComponent className='b-bottom-right'state={gameState[1]} onClick={()=>onSquareClicked(1)}/>
      <SquareComponent className='b-bottom' state={gameState[2]} onClick={()=>onSquareClicked(2)}/>
      </div>
      <div className="row jc-center">
      <SquareComponent className='b-bottom-right' state={gameState[3]} onClick={()=>onSquareClicked(3)}/>
      <SquareComponent className='b-bottom-right' state={gameState[4]} onClick={()=>onSquareClicked(4)}/>
      <SquareComponent className='b-bottom' state={gameState[5]} onClick={()=>onSquareClicked(5)}/>
      </div>
      <div className="row jc-center">
      <SquareComponent className='b-right' state={gameState[6]} onClick={()=>onSquareClicked(6)}/>
      <SquareComponent className='b-right' state={gameState[7]} onClick={()=>onSquareClicked(7)}/>
      <SquareComponent state={gameState[8]} onClick={()=>onSquareClicked(8)}/>
      </div>
      <button className="clear-button">Clear Game</button>
      <p className="fc-aqua fw-600">Lovely Mian</p>
    </div>
  );
}

export default App;
