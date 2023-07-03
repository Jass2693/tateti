
import {  useEffect, useState } from 'react';
import './App.css'
import { Square } from './componentes/Square';
import { Footer } from './componentes/Footer';

const TURNS = {
  X: "X",
  O: "O"
};
const WINNER_COMBOS = [
  // HORIZONTALES
  [0,1,2],
  [3,4,5],
  [6,7,8],
  // VERTICALES
  [0,3,6],
  [1,4,7],
  [2,5,8],
  // DIAGONALES
  [0,4,8],
  [2,4,6]


]


function App() {
  const startBoard = Array(9).fill(null);
  const [board, setBoard] = useState(startBoard);
  const [turn, setTurn] = useState(TURNS.X)
  const [isSelected, setIsSelected] = useState(turn)
  const [winner, setWinner] = useState(null)

  
  const updateBoard = (index) => {
    if(board[index] || winner ) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    setIsSelected(newTurn)
    const newWinner = checkWinner(newBoard)
   
    if(newWinner) {setWinner(newWinner)
    } else if (!newBoard.includes(null)) {
      setWinner("empate")
    }
    
  }
  

  
  const checkWinner = (boarToCheck) => {
    for(let combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if( boarToCheck[a] &&
        boarToCheck[a] === boarToCheck[b] &&
        boarToCheck[a] === boarToCheck[c]
        ) {
          return boarToCheck[a]
        } 
    }

  }

   const resetGame = () => {
    setBoard(startBoard)
    setWinner(null)
   }


  return (
    <>
      <h1>TA-TE-TI</h1>
      <div className='board'>
        {
          board.map((cell,index) => {
            return (
            <Square 
                
                key={index}
                index={index}
                updateBoard={updateBoard}
            >
              {board[index]}

            </Square>
          )

            })
        }


      </div>
      <Footer isSelected={isSelected}
              />
      {(winner) ? 
      <div>
        <h3>{
           winner === "empate"
           ? "Empate"
           : `Gano ${winner}`
        }</h3>  
        <button 
        onClick={resetGame}
        >Volver a jugar</button>
      </div>
      : ""
}
    </>   )
}

export default App
