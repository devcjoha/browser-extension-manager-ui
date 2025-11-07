import ThemeToggle from "./ThemeToggle";
import logoPage from "../assets/logo.svg";

function Header({ darkMode, setDarkMode }) {
  return (
    <>
      {/* HEADER [#fcfdff]*/}
      <header
        className="header-container flex w-full h-16 pl-3 border border-[#d6e2f5] dark:border-[#545969] lg:rounded-2xl rounded-xl
      items-center justify-between lg:p-3 dark:bg-[#212636] bg-(--prueba) shadow-lg text-black dark:text-white"
      >
        <div className="logo-container relative flex flex-row justify-between">
          <img src={logoPage} alt="logo-page" className="" />
          <span
            className="logo-name-dark hidden w-40 dark:bg-[#212636] dark:flex dark:absolute dark:top-1/2 dark:left-33 
      dark:text-[1.3rem] dark:lg:text-[1.5rem]  dark:transform dark:-translate-x-1/2 dark:-translate-y-1/2 
      dark:text-center dark:font-bold "
          >
            Extensions
          </span>
        </div>
        <div className="theme-toggle-container relative flex flex-row justify-between">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </header>
    </>
  );
}
export default Header;
