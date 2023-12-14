import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";

function HangManLetterCard({ letter, guessedLetters }) {

  const [isGuessed, setIsGessed] = useState(false);
  useEffect(() => {
    if( guessedLetters.includes(letter.toUpperCase())){
      setIsGessed(true)
    }
  }, [guessedLetters]);


  return (
    <div className=" h-full w-7 inline-block bg-neutral-600 rounded-md mx-2">
      <ReactCardFlip
        isFlipped={!isGuessed}
        containerClassName={"w-full h-full "}
        flipDirection="vertical"
      >
        <div className="w-full h-full flex items-center justify-center font-medium text-amber-200 uppercase">
          {letter}
        </div>
        <div className="w-full h-full flex items-center justify-center font-medium text-amber-200 uppercase">
          ?
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default HangManLetterCard;
