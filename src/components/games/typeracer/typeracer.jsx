import React,{ useState } from "react";
import useCountdown from '../../utilitys/useCountdown.tsx'
import { faker } from "@faker-js/faker/locale/es_MX";


function TypeRacer(){
    
const [aux, setAux] = useState(false)
const [word, setWord]=useState("Aquí saldrán las palabras");
const [answer,setAnswer]=useState("")
const [points, setPoints]=useState(0)
const {secondsLeft, start }= useCountdown()
const [textobtn, setTextobtn]=useState("jugar")

const setRandomWord =()=>{
    setWord(faker.word.sample(  ))
}
const startGame= ()=>{
    setAux(true)
    start(20)
    setRandomWord();
    setAnswer("")
}
const textChange = (e)=>
{   
    setAnswer(e.target.value)
    const aux = e.target.value
    if(aux==word){
        setRandomWord();
        setAnswer("")
        setPoints(points+1)
        start(secondsLeft+1)
    }
}

const gameLost = () => {
    setAux(false);
    setWord("Has perdido 😭, tu puntaje fue de: ".concat(points))

}

    return(
        <article id="ContainerGame">
            <h2 className=" text-6xl text-center text-amber-200">TypeRacer</h2>
            <p className=" text-lg py-4 font-thin text-center"><span className="font-medium text-red-500">Instrucciones:</span> Aparecera una serie de palabras, debes escribirlas lo mas rapido posible. Para insertar la palabra presione el espacio</p>    
            <div className="flex w-full justify-center">            
                <p id="lblPalabra" className=" text-4xl text-center my-5 text-orange-300 block w-2/3  rounded-md  border-red-300 border-2 pb-4 pt-2" >{word}</p> 
            </div> 
            { aux ? (
                <div>
                    <input autocomplete="off" type="text" autoFocus id="tbPalabras" className="block w-full p-4 rounded-md text-center text-3xl border-2 border-amber-300" onChange={textChange} value={answer}></input> 
                    <div className=" w-full flex justify-between my-4">
                        <p className=" text-xl font-normal px-3">Tiempo restante: <span className="font-thin">{secondsLeft>0?secondsLeft:gameLost()}</span></p>
                        <p className=" text-xl font-normal px-3">Puntuación: <span className="font-thin">{points}</span></p>
                    </div>
                </div>):(
                <div className="flex justify-center">       
                    <button className=" text-amber-300 cursor-pointer hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-[#4F453E]/50 font-medium rounded-md py-3 text-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 uppercase w-1/3 bg-orange-500 " onClick={startGame}>{textobtn}</button>

                </div>)}
        </article>

        );
    };
export default TypeRacer;