import { useState } from "react";

function HangManKey({ letter,keyPushed }) {
  const [isDisabled, setIsDisabled] = useState(false);

  const clickKeyHandler = (e) => {
    setIsDisabled(true);
    keyPushed(letter);
  };

  return (
    <div
      className={
        !isDisabled
          ? " bg-neutral-800 inline-block transition-all hover:scale-95 w-4/5 h-4/5 rounded-3xl shadow-md shadow-slate-100"
          : " bg-neutral-700 inline-block transition-all w-4/5 h-4/5 rounded-3xl"
      }
      onClick={!isDisabled ? clickKeyHandler : null}
    >
      <div className="h-full w-full flex justify-center items-center text-amber-100 font-semibold text-lg">
        {letter}
      </div>
    </div>
  );
}
export default HangManKey;
