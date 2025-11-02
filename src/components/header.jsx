import ThemeToggle from "./ThemeToggle";
import logoPage from "../assets/logo.svg"

function Header({ darkMode, setDarkMode }) {

  return (
    <header
      className="header-container flex flex-row w-full lg:h-16 h-16 pl-3 pt-1 pb-1 lg:mt-1 border-transparent lg:rounded-2xl rounded-xl
      justify-between items-center lg:p-3 dark:bg-[#212636] bg-[#fcfdff] text-black dark:text-white transform-none"
    >
      <img src={logoPage} alt="logo-page" />
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
}
export default Header;
