import React, { useState } from "react";
import CardTemplate from "../memory/card.jsx";

function GameBoard({
  cardImageList,
  flipCardRules,
  listDisablesCards,
  listUnflippedCards,
  startedGame,
}) {
  return (
    <div className="w-2/3 h-4/5 bg-neutral-600 rounded-xl px-3 py-3 grid grid-cols-4 grid-rows-4 ">
      {cardImageList.map((card, i) => (
        <CardTemplate
          key={`${i}_${card}`}
          idCard={i}
          imageFront={card}
          flipCardRules={flipCardRules}
          listDisablesCards={listDisablesCards}
          listUnflippedCards={listUnflippedCards}
          startedGame={startedGame}
        />
      ))}
    </div>
  );
}

export default GameBoard;
