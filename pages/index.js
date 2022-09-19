import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home () {

  const [xTurn, setXturn] = useState(true)
  const [boardData, setBoardData] = useState( {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    7: "",
    8: "",
  });

  const updateBoardData = (idx) => {
    if(!boardData[idx]){
      //checking whether our index is empty or not 
      let value = xTurn == true ? "X" : "O"
      setBoardData ({ ...boardData, [idx]: value })
      setXturn(!xTurn)
    }
  }

  return (
     <div>
      <h1>Welcome to Tic Tac Toe </h1>
     <div className="game">
       <div className="game-menu">
        <p>{ xTurn=== true ? "X Turn" : "O Turn"}</p>
       </div>
       <div className="game-board">
        {[...Array(9)].map((v, idx) => {
          return (
            <div
              key={idx}
              className="square"
              onClick = { () => {
                updateBoardData(idx)
              }}>
                {boardData[idx]}
            </div>
          )
        })}
       </div>
     </div>
      <p>user to click here after playing to see the diffrence in move will you state management with count </p>
      <p>two entities will be playing this game </p>
      <p>will add react conffet after the game has completed </p>
      <p>try to add the total score</p>
     </div>
  );
}
// users moves at after playing 

// dont forget to add ticking time to show how many minutes they have beeen playing . the time should be at the bottom 