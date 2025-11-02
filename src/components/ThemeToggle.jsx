import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(prev => !prev)}
      className="w-12 h-12 flex justify-center items-center bg-white border border-neutral-500 dark:bg-gray-600 rounded-xl"
    >
      <img src={darkMode ? iconSun : iconMoon} alt="icon-mode" />
    </button>
  );
}

export default ThemeToggle;

