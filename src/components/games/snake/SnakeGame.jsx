import { useState } from "react";
import SnakeBoard from "./SnakeBoard.jsx";

function SnakeGame() {
  const [startedGame, setStartedGame ] = useState(true);
  const [textobtn, setTextobtn] = useState("Iniciar el juego");

  const startGame=()=>{
    setStartedGame(true)
  }

  return (
    <article className=" flex flex-row justify-center items-center h-full w-full" onKeyDown={e=>console.log(e.key)} autoFocus>
      {startedGame ? (
      <SnakeBoard />):
      (
        <button
          className=" text-yellow-200 cursor-pointer hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-[#4F453E]/50 font-medium rounded-md py-3 text-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 uppercase w-1/3 bg-orange-500 "
          onClick={startGame}
        >
          {textobtn}
        </button>        
      )}
    </article>
  );
}

export default SnakeGame;
