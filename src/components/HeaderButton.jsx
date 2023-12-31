export default function HeaderButton({ buttonText, hlink, classes }) {
  return (
    <a
      className={`flex-row justify-center text-amber-300 cursor-pointer hover:bg-stone-700 focus:ring-4 focus:outline-none focus:ring-[#4F453E]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-70 hover:opacity-100 ${classes}`}
      href={hlink}
    >
      {buttonText}
    </a>
  );
}
