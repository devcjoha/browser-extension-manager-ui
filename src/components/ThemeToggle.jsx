import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="button-container  hover:bg-[#c7c7c7] dark:hover:bg-[#f25c54] dark:hover:border-2 dark:hover:border-[#f25c54] rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105 dark:hover:scale-105">
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="w-13 h-13 mr-3 lg:mr-0 flex justify-center items-center bg-[#ededed] hover:bg-[#ededed] dark:bg-[#2f364b] dark:focus:border-2 dark:focus:border-[#09153e] dark:hover:bg-[#545969] dark:hover:border-2 dark:hover:border-[#09153e] lg:rounded-2xl rounded-xl"
      >
        <img src={darkMode ? iconSun : iconMoon} alt="icon-mode" />
      </button>
    </div>
  );
}

export default ThemeToggle;
