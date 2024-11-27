import React, { useState } from 'react'


const TicTacToe = () => {
  // Add state management
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  // Check winner function
  const checkWinner = () => {
    const winningPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return board.every(cell => cell !== "") ? "Draw" : null;
  };

  // Handle click function
  const handleClick = (index) => {
    if (board[index] || winner) return;
    
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
    
    const result = checkWinner();
    if (result) setWinner(result);
  };

  // Reset function
  const handleReset = () => {
    setBoard(Array(9).fill(""));
    setIsXTurn(true);
    setWinner(null);
  };

  return (
    <div className='w-full bg-gray-800 h-[100vh] flex items-center justify-center flex-col'>
      <h1 className='bg-green-700 p-3 rounded-xl font-bold text-white'>
        {winner 
          ? winner === "Draw" 
            ? "It's a Draw!" 
            : `Player ${winner} Wins!`
          : `Current Player: ${isXTurn ? "X" : "O"}`
        }
      </h1>
      <div className='w-[400px] h-[400px] bg-green-950 p-5 m-10 rounded-xl flex flex-wrap items-center justify-center'>
        {[0, 1, 2].map((row) => (
          <div key={row} className='flex items-center justify-center gap-2'>
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              return (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className='p-2 bg-gray-800 w-[100px] h-[100px] rounded-xl cursor-pointer active:bg-gray-500 text-white text-4xl font-bold'
                >
                  {board[index]}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <button 
        onClick={handleReset}
        className='p-5 bg-yellow-500 cursor-pointer font-bold'
      >
        RESET
      </button>
    </div>
  );
};

export default TicTacToe