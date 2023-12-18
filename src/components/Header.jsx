import ButtonHeader from "./HeaderButton.jsx";
import { useState } from "react";

export default function Header() {
  const [visibleMenu, setVisibleMenu]=useState(false);
  const ButtonShowMenuHandler = ()=>{
    setVisibleMenu(!visibleMenu);
  }
  return (
    <nav className="md:flex md:justify-around md:items-center w-screen py-6 md:px-7">
      <div className="w-full flex justify-between px-4 items-center">
        <ButtonHeader 
          hlink="/  "
          classes={''}
          buttonText={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-device-gamepad-2 cursor-pointer"
              width="52"
              height="52"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z"></path>
              <path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232"></path>
              <path d="M8 9v2"></path>
              <path d="M7 10h2"></path>
              <path d="M14 10h2"></path>
            </svg>}/>
        <button
          className="flex-row justify-center text-amber-300 cursor-pointer hover:bg-stone-700 focus:ring-4 focus:outline-none focus:ring-[#4F453E]/50 font-medium rounded-lg h-14 w-16 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-70 hover:opacity-100 md:hidden"
          onClick={ButtonShowMenuHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2"
            viewBox="0 0 24 24"
            width="32"
            height="32"
            strokeWidth="2"
            fill="none"
            stroke="#fed7aa"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </button>
      </div>

      <ul
        className={`md:flex flex items-center flex-col bg-neutral-600 w-full py-3 md:flex-row md:w-auto md:bg-transparent md:h-full ${!visibleMenu?'hidden':null}`}
      >
        <li>
          <ButtonHeader hlink="/Games/Snake" buttonText="Snake"></ButtonHeader>
        </li>
        <li>
          <ButtonHeader hlink="/Games/Tetris" buttonText="Tetris"></ButtonHeader>
        </li>
        <li>
          <ButtonHeader hlink="/Games/Hangman" buttonText="Ahorcado"></ButtonHeader>
        </li>
        <li>
          <ButtonHeader hlink="/Games/TypeRacer" buttonText="TypeRacer"></ButtonHeader>
        </li>
        <li>
          <ButtonHeader hlink="/Games/Memory" buttonText="Memoria"></ButtonHeader>
        </li>
      </ul>
    </nav>
  );
}
