import { useEffect, useState } from "react";
import HangManKeyBoard from "./HangManKeyBoard";
import HangManFigure from "./HangManFigure";
import HangManWord from "./HangManWord";
import { faker } from '@faker-js/faker/locale/es';

function HangManGame() {
  const [startedGame, setStartedGame] = useState(false);
  const [textobtn, setTextobtn] = useState("Jugar");
  const [errorsCount, setErrorCount]=useState(0)
  const [secretWord, setSecretWord]=useState("")
  const listKeyLetters =[..."ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"]
  const [guessedLetters,setGuessedLetters]=useState([]);
  const [endedGame, setEndedGame]=useState(false)
  const [endText, setEndText]=useState("")

  const startGame = () => {
    setGuessedLetters([]);
    setErrorCount(0);
    setEndedGame(false);
    setStartedGame(true);
    setSecretWord(faker.word.sample({ length: { min: 5, max: 7 }, strategy: "closest" }));
  };

  const keyPushed=(letterKey)=>{
    console.log(secretWord)
    setGuessedLetters([...guessedLetters,letterKey]);
    const auxWord = secretWord.toUpperCase().split('');
    if(!auxWord.includes(letterKey)){
      setErrorCount(errorsCount+1);
      checkLoose();
    }
      else{
        errorsCount >0 ? setErrorCount(errorsCount-1) : null
      }
      checkWin([...guessedLetters,letterKey],auxWord)
  }
  const checkLoose=()=>{
    if(errorsCount+1>6){
      lostGame(); 
    }
  }
  const checkWin=(keysPressed,secretWord)=>{
    let contador =0;
    secretWord.map((x)=> keysPressed.includes(x) ? contador++ : null)
    if(contador == secretWord.length ){
        winGame();
      }
  }
  const lostGame =()=>{
    setStartedGame(false);
    setTextobtn("Volver a jugar");
    setEndText("Ha perdido 😥");
    setEndedGame(true);
  }
  const winGame =()=>{
    setStartedGame(false);
    setTextobtn("Volver a jugar");
    setEndText("Ha ganado 🙏");
    setEndedGame(true);
  }
  return (
    <article className="flex items-center h-screen flex-col w-screen">
      <h2 className=" text-6xl text-center text-amber-200">Ahorcado</h2>
      <p className=" text-lg py-4 font-thin">
        <span className="font-medium text-red-500">Instrucciones:</span>{" "}
        Debes adivinar la palabra secreta 
      </p>
      {endedGame ? 
      (
        <p className=" text-xl py-4 font-thin">
          {endText}
        </p>
      ):null

      }
      {startedGame ? (
        <div className="w-full flex items-center flex-col">
          <HangManFigure errorsCount={errorsCount} />
          <HangManWord secretWord={secretWord.split('')} guessedLetters={guessedLetters}/>
          <HangManKeyBoard letterKeysList={listKeyLetters} keyPushed={keyPushed}/>
        </div>
      ) : (
        <div className="w-full flex justify-center">
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

export default HangManGame;
