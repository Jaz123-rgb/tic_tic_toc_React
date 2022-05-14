import React, {useState} from "react";
import { calcualteWinner } from "../helpers";
import Board from "./Board";

const styles ={
  width: '200px',
  margin: '20px auto',

}

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);
  const winner = calcualteWinner(board);

  
  const handleClick = i =>{


    const boardCopy = [...board];
   // * if user click an occupied square or if game is or anwon, return  
    if (winner || boardCopy[i]) return;
  //* put an X or an O in the clicken square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setxIsNext(!xIsNext);  
  
  }
  
  const jumpTo  = () =>{

  }
  
  const renderMoves = () => ( 

     <button onClick = {() => setBoard(Array(9).fill(null))}>
     Start Game
    </button>
     
  )
  
  
  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>{winner ? 'winner: ' + winner : ' Next Player ' + (xIsNext ? 'X' : 'O')}</p>
       {renderMoves()}
      </div>
    </>
  )

}

export default Game
