import React, { useEffect, useState } from "react";
import SnakeBoardCell from "./SnakeBoardCell";

function SnakeBoard() {
  const Directions = {
    UP: "UP",
    DOWN: "DOWN",
    RIGHT: "RIGHT",
    LEFT: "LEFT",
  };

  const [boardSize, setBoardSize] = useState(20);
  const [board, setBoard] = useState([]);
  const [snakeBody, setSnakeBody] = useState([
    [7, 7],
    [6, 7],
  ]);
  const [foodPosition, setFoodPosition] = useState([4, 4]);
  
  const [direction, setDirection] = useState();

  useEffect(() => {
    setBoard(
      new Array(boardSize).fill(0).map((row) => new Array(boardSize).fill(0))
    );
  }, [boardSize]);

  const keyPressHandler = (e) => {
    changeDirection(e.key);
  };

  const changeDirection=(key)=>{
    console.log(direction)
    if(key==='ArrowLeft' && direction != Directions.RIGHT){
      console.log(Directions.RIGHT)
      console.log(direction)
      setDirection(Directions.LEFT)
    }
    if(key==='ArrowRight' && direction !== Directions.LEFT){
      setDirection(Directions.RIGHT)
    }
    if(key==='ArrowUp'){
      setDirection(Directions.UP)
    }
    if(key==='ArrowDown'){
      setDirection(Directions.DOWN)
    }    
    if(key===' '){
      setDirection(Directions.DOWN)
    }
  }

  const snakeMovement = () => {
    if (direction === Directions.DOWN) {
      const auxx = snakeBody;
      auxx.unshift([snakeBody.at(0).at(0) + 1, snakeBody.at(0).at(1)]);
      auxx.pop();
      setSnakeBody([...auxx]);
      return true;
    }
    if (direction === Directions.UP) {
      const auxx = snakeBody;
      auxx.unshift([snakeBody.at(0).at(0) - 1, snakeBody.at(0).at(1)]);
      auxx.pop();
      setSnakeBody([...auxx]);
      return true;
    }
    if (direction === Directions.RIGHT) {
      const auxx = snakeBody;
      auxx.unshift([snakeBody.at(0).at(0), snakeBody.at(0).at(1)+1]);
      auxx.pop();
      setSnakeBody([...auxx]);
      return true;
    }
    if (direction === Directions.LEFT) {
      const auxx = snakeBody;
      auxx.unshift([snakeBody.at(0).at(0), snakeBody.at(0).at(1)-1]);
      auxx.pop();
      setSnakeBody([...auxx]);
      return true;
    }
  };

  useEffect(()=>{
    const timeout = setTimeout(() => {
      snakeMovement()
    },200);
  },[snakeBody])

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      keyPressHandler(e);
    });    
    setDirection(Directions.DOWN)
  }, []);

  return (
    <div className=" drop-shadow-lg shadow-gray-800 rounded-none">
      {board.map((row, iRow) => (
        <div key={iRow} className=" h-8">
          {row.map((col, icol) => (
            <SnakeBoardCell
              key={`${iRow}_${icol}`}
              rowI={iRow}
              colI={icol}
              snakeBody={snakeBody}
              foodPosition={foodPosition}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
export default SnakeBoard;
