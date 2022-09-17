import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home () {

  return (
     <div>
      <h1>Welcome to Tic Tac Toe </h1>
     <div className="game">
       <div className="game-menu">
        <p>xTurn</p>
       </div>
       <div className="game-board">
        {[...Array(9)].map((v, idx) => {
          return (
            <div
              key={idx}
              className="square">
                X
            </div>
          )
        })}
       </div>
     </div>
     </div>
  );
}
