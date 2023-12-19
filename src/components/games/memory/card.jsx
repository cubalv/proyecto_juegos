import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";

function CardTemplate({
  idCard,
  imageFront,
  flipCardRules,
  listUnflippedCards,
  listDisablesCards,
  startedGame,
}) {
  const [isFliped, setIsFliped] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [helpActive, setHelpActive] = useState(true);

  //metodo del click
  const cardClick = (e) => {
    const flipValidation = flipCardRules(imageFront, idCard);
    flipValidation ? setIsFliped(!isFliped) : setIsFliped(isFliped);
  };
  //ussEffect que regresa las cartas que no matcheen
  useEffect(() => {
    if (listUnflippedCards.includes(idCard)) {
      setTimeout(() => setIsFliped(true), 400);
    }
  }, [listUnflippedCards]);
  //usEfect que desactiva las cartas que son iguales
  useEffect(() => {
    if (listDisablesCards.includes(idCard)) {
      setIsDisabled(true);
    }
    
  }, [listDisablesCards]);

  useEffect(() => {
    if (helpActive) {
      setTimeout(() => {
        setIsFliped(true);
        setHelpActive(false);
      }, 2000);
    }
  }, []);
  return (
    <div
      className=" bg-zinc-800 rounded-lg transition-all hover:scale-105 w-auto h-auto inline-block cursor-pointer mx-2 my-2 max-w-lg"
      onClick={!isDisabled && !helpActive ? cardClick : null}
      id={idCard}
    >
      <ReactCardFlip isFlipped={isFliped}>
        <div className="w-full h-full flex justify-center items-center py-10">
          <div className="md:text-6xl sm:text-1xl ">{imageFront}</div>
        </div>
        <div className="w-full h-full flex justify-center content-center">
          
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default CardTemplate;
