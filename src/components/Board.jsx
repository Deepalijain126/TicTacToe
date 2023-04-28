
import { useState } from 'react';
import React from 'react'
import Square from './Square'

const Board = () => {
    const [squares,setSquares] = useState(Array(9).fill(null));
    const [isNextX, setIsNextX] = useState(false);
     
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
const renderSquare = position =>{
    return (
    <Square value={squares[position]} 
    onClick={()=>handleClick(position)}></Square>);
};


  return (
    <div className='board'>
        <div className='board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            
        </div>
        <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        </div>
        <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        </div>
    </div>
  )
}

export default Board