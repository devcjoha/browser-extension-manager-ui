import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="button-mode-container flex justify-center items-center w-[3.2rem] h-12 mr-[.7rem] lg:mr-0
     bg-[#ededed] dark:bg-[#2f364b] hover:bg-[#c7c7c7] dark:hover:bg-[#545969] rounded-xl cursor-pointer">
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="button-mode flex w-full h-full justify-center items-center lg:rounded-2xl rounded-xl cursor-pointer 
        focus:outline-none focus:ring-2 focus:ring-offset-2 
        focus:ring-[#c7221a]  focus:ring-offset-white 
        dark:focus:ring-[#f25c54] dark:focus:ring-offset-[#09153e]"
      >
        <img src={darkMode ? iconSun : iconMoon} alt="icon-mode" />
      </button>
    </div>
  );
}

export default ThemeToggle;
