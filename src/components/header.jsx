import ThemeToggle from "./ThemeToggle";

function Header ({darkMode, setDarkMode}){
    console.log("DARKMODE HEADER", darkMode);
    return(
        <header
        className="flex w-screen top-0 justify-between items-center p-4  dark:bg-black bg-white text-black dark:text-white"
        >
        <h1 className="text-xl">Extensions Manager</h1>
        <ThemeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        />
        </header>
    )
}
export default Header;