

import "./styles.scss"
import Board from './components/Board'
import { useState } from "react";
import { calculateWinner } from "./winner";

function App() {
  const [squares,setSquares] = useState(Array(9).fill(null));
  const [isNextX, setIsNextX] = useState(false);

  const winner = calculateWinner(squares);

  
  const nextPlayer = isNextX ? "X":"0";
  const stausMessage = winner ? `Winner is ${winner}`: `nextPlayer is ${nextPlayer}`;

   
  const handleClick = clickedPosition=>{
     
    if (squares[clickedPosition]){
      return;
    }


      setSquares(currentSquares=>{
        return  currentSquares.map((squareValue,position)=>{
                 
          if (clickedPosition === position){
              return isNextX ? "X":"0";
          }
          return squareValue;
        });
                
        }

        );
        setIsNextX((currentNextX)=> !currentNextX );
    };

  return (
    <div className="app">
      <h2> {stausMessage}</h2>
        <Board squares={squares} handleClick={handleClick}></Board>
    
    </div>
  )
}

export default App
