import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}
  
  export default function Home() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
  
    function handleClick(index) {
      if (squares[index] || winner) return;
    
      const nextSquares = squares.slice();
      nextSquares[index] = xIsNext ? "X" : "O";
    
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }

    const winner = calculateWinner(squares);
    const status = winner
      ? `Winner: ${winner}`
      : `Next player: ${xIsNext ? "X" : "O"}`;
  
    return (
      <div className="board-layout">
        <h1 className="board-title">Zeina's Tic-Tac-Toe</h1>
        <p className="status-text">{status}</p>
  
        <div className="board">
        <>
          <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </>
        </div>
  
        <button
          className="restart-button"
          onClick={() => {
            setSquares(Array(9).fill(null));
            setXIsNext(true);
          }}
        >
          Restart
        </button>
      </div>
    );
  }
