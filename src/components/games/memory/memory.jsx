import React, { useState, useEffect } from "react";
import GameBoard from "./gameBoard";
import useCountdown from "../../utilitys/useCountdown.tsx";
import { fa } from "@faker-js/faker";

function MemoryGame() {
  //estados
  const [shuffledImageCardList, setShuffledImageCardList] = useState([]);
  const [firstSelectedCard, setFirstSelectedCard] = useState({});
  const [secondSelectedCard, setSecondSelectedCard] = useState({});
  const [disabledCards, setDisabledCards] = useState([]);
  const [unflippedCards, setUnflippedCards] = useState([]);
  const [startedGame, setStartedGame] = useState(false);
  const { secondsLeft, start } = useCountdown();
  const [textobtn, setTextobtn] = useState("Iniciar el juego");
  const [lostedGame, setLostedGame] = useState(false);
  const [winnedGame, setWinnedGame] = useState(false);
  const [points, setPoints] = useState(0);
  winnedGame;

  //constantes de las cartas
  const imageCardList = [..."🌭🦄🪓🥤🐬🐥⛵🎈"];

  //metodo para asigarn un orden aleatorio al array
  const shuffle = (arr) => {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
      const rand_index = Math.floor(Math.random() * length);
      const rand = arr[rand_index];
      arr[rand_index] = arr[i];
      arr[i] = rand;
    }
    return arr;
  };
  //iniciar el juego
  const startGame = () => {
    setStartedGame(true);
    start(32);    
    setShuffledImageCardList(shuffle([
      ...imageCardList,
      ...imageCardList,
    ]));
  };
  const gameLost = () => {
    setLostedGame(true);
    setWinnedGame(false);
    setStartedGame(false);
    setTextobtn("Jugar de nuevo");
    setPoints(0);
    resetListSendCards();
    resetSelectedCards();
  };
  const gameWon=()=>{
    setLostedGame(false);
    setWinnedGame(true);
    setStartedGame(false);
    setTextobtn("Jugar de nuevo");
    setPoints(0);
    resetListSendCards();
    resetSelectedCards();
  }
  const resetListSendCards=()=>{
    setDisabledCards([]);
    setUnflippedCards([])
  }
  //reglas del juego
  //se le asignan los valores de las cartas seleciconadas
  const flipCardRules = (name, idCard) => {
    if (
      firstSelectedCard.name === name &&
      firstSelectedCard.idCard === idCard
    ) {
      return false;
    }
    if (!firstSelectedCard.name) {
      setFirstSelectedCard({ name, idCard });
    } else if (!secondSelectedCard.name) {
      setSecondSelectedCard({ name, idCard });
    }
    return true;
  };
  //se valida si ambas cartas son iguales
  const validationMatch = () => {
    if (firstSelectedCard && secondSelectedCard) {
      const match = firstSelectedCard.name === secondSelectedCard.name;
      match ? disableCards() : unflipCards();
    }
  };
  //se desactivan las cartas que son iguales
  const disableCards = () => {
    setDisabledCards([firstSelectedCard.idCard, secondSelectedCard.idCard]);
    setPoints(points+1)
    resetSelectedCards();
  };
  //se voltean las cartas que no son iguales
  const unflipCards = () => {
    setUnflippedCards([firstSelectedCard.idCard, secondSelectedCard.idCard]);
    resetSelectedCards();
  };

  //se vacian los contenedores de cartas seleccionadas
  const resetSelectedCards = () => {
    setFirstSelectedCard([]);
    setSecondSelectedCard([]);
  };
  useEffect(() => {
    if (secondSelectedCard.name) {
      validationMatch();
    }
  }, [secondSelectedCard]);

  useEffect(() => {
    if (points===imageCardList.length) {
      gameWon()
    }
  }, [points]);
  return (
    <article className="flex items-center h-full flex-col ">
      {startedGame ? (
        <div className="flex items-center h-full w-full flex-col content-between ">
          <div className="w-2/3 mb-4 flex flex-row">
            <p className="text-xl font-semibold">
              Tiempo restante:{" "}
              <span>{secondsLeft > 0 ? secondsLeft : gameLost()}</span>
            </p>
          </div>
          <GameBoard
            cardImageList={shuffledImageCardList}
            flipCardRules={flipCardRules}
            listUnflippedCards={unflippedCards}
            listDisablesCards={disabledCards}
            startedGame={startedGame}
          />
        </div>
      ) : (
        <div className="flex items-center h-full w-full flex-col ">
          <h2 className=" text-6xl text-center text-amber-200">Memoria</h2>
          <p className=" text-lg py-4 font-thin text-center">
            <span className="font-medium text-red-500">Instrucciones:</span>{" "}
            Apareceran unas tarjetas y deberas emparejarlas
          </p>
          {lostedGame ? (
            <p className="text-2xl pb-4 font-medium text-amber-50">Perdiste el juego 😥</p>
          ) : (
            <p className=" hidden">a</p>
          )}
          {winnedGame ? (
            <p className="text-2xl pb-4 font-medium  text-amber-50">Ganaste el juego 😀</p>
          ) : (
            <p className=" hidden">a</p>
          )}
          <button
            className=" text-yellow-200 cursor-pointer hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-[#4F453E]/50 font-medium rounded-md py-3 text-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 uppercase w-1/3 bg-orange-500 "
            onClick={startGame}
          >
            {textobtn}
          </button>
        </div>
      )}
    </article>
  );
}

export default MemoryGame;
