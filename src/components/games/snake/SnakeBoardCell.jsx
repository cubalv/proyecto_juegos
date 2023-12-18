import React, { useState, useEffect } from "react";

function SnakeBoardCell({rowI, colI, snakeBody, foodPosition}){
    const [isSnake, setIsSnake] = useState(false)
    const [isFood, setIsFood] = useState(false)

    const snakeCell = "bg-lime-500 h-8 w-8 inline-block outline outline-1 outline-neutral-500"
    const foodCell = "bg-red-500 h-8 w-8 inline-block outline outline-1 outline-neutral-500"
    const nothingCell = "bg-neutral-600 w-8 h-8 inline-block outline outline-1 outline-neutral-500"

    const validateCell = () => {
        if (snakeBody.find((x) => x.at(0) == rowI && x.at(1) == colI)) {
          setIsSnake(true)
          setIsFood(false)
          return false
        }
        if (foodPosition.at(0) == rowI && foodPosition.at(1) == colI) {
          setIsSnake(false)
          setIsFood(true)
          return false
        }
        setIsSnake(false)
        setIsFood(false)
        return false
      };
      const MoveSnake=()=>{

      }
      useEffect(()=>{
        validateCell();
      },[snakeBody])
    return(
        <div className={isSnake?snakeCell:isFood?foodCell:nothingCell}>

        </div>
    );
}
export default SnakeBoardCell;