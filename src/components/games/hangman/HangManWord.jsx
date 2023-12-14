import { useEffect, useState } from "react";
import HangManLetterCard from "./HangManLetterCard.jsx";

function HangManWord({ secretWord, guessedLetters}) {
  console.log(secretWord)
  return (
    <div className=" w-full h-1/5 flex justify-center mb-5  ">
      {secretWord.map((letter, index) => (
        <HangManLetterCard 
        key={`${index}`} 
        letter={letter} 
        guessedLetters={guessedLetters}
        />
      ))}
    </div>
  );
}

export default HangManWord;
