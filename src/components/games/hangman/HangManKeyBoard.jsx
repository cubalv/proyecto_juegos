import HangManKeys from "./HangManKeys";
function HangManKeyBoard({ letterKeysList, keyPushed}) {
  
  return (
    <div className="w-2/3 bg-neutral-600 h-2/3 grid  grid-cols-9 grid-rows-3 py-5 px-5 rounded-xl">
      {letterKeysList.map((letter, i) => (
        <HangManKeys 
        key={`${i}_${letter}`} 
        letter={letter} 
        idKey={i} 
        keyPushed={keyPushed}
        />
        )
      )}
    </div>
  );
}
export default HangManKeyBoard;
