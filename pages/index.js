import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HOMEPAGE_URL } from "../.config";

const WINNING_COMBO = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export default function Home () {

  const [xTurn, setXturn] = useState(true)
  const [won, setWon] = useState(false)
  const [wonCombo, setWonCombo] = useState([])
  const [modalTitle, setModalTitle] = useState("")
  const [isDraw, setIsDraw] = useState(false)
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

   useEffect( () =>{
    checkWinner();
   }, [boardData])

  const updateBoardData = (idx) => {
    if(!boardData[idx]){
      //checking whether our index is empty or not 
      let value = xTurn == true ? "X" : "O"
      setBoardData ({ ...boardData, [idx]: value })
      setXturn(!xTurn)
    }
  }

  const checkDraw = () => {
    let check = Object.keys(boardData).every((v) => boardData[v])
    if(check) setIsDraw(check)
    if (check) setModalTitle("The Match is a draw😁")
  }
  const checkWinner = () => {
    WINNING_COMBO.map((bd) => {
      const [a, b, c] = bd;
      if (
        boardData[a] &&
        boardData[a] === boardData[b] &&
        boardData[a] === boardData[c]
      ) {
        setWon(true)
        setWonCombo([a, b, c]);
        setModalTitle(`Player ${!xTurn ? "X" : "O"} Won😊`)

        return
      }
    })
  }

  const reset = () => {
    setBoardData( {
      0: "", 1: "",  2: "", 3: "",  4: "", 5: "", 6: "", 7: "", 8: "",
  })

  setXturn(true);
  setWon(false);
  setWon( false)
  setIsDraw(false)
  setModalTitle("")
}

const today = new Date()
  return (
     <div>
      <h1>Welcome to Tic Tac Toe </h1>
     <div className="game">
       <div className="game-menu">
        <p>{ xTurn=== true ? "X Turn" : "O Turn"}</p>
        <p>{`Game Won: ${won}  Draw: ${isDraw} `}</p>
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
     <div className={`modal ${modalTitle ? "show" : ""}`}>
       <div className="modal-title">{modalTitle}</div>
       <button onClick={reset}>New Game🎮</button>
     </div>
     <footer>
     &copy; {today.getFullYear()}
     <a href={HOMEPAGE_URL}> Richson Simbabure</a>. All rights reserved.
     </footer>
     </div>
  );
}
// users moves at after playing 

// dont forget to add ticking time to show how many minutes they have beeen playing . the time should be at the bottom 