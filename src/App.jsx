import "./index.css";
import { Route, Routes } from "react-router-dom";
import ExtensionDetailView from "./pages/ExtensionDetailView";
import Home from "./pages/Home";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    // Retorna true si el tema guardado es 'dark', o false por defecto
    return savedTheme === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
     {/* <main className="flex flex-col items-center w-screen h-screen dark:bg-[#09153e] bg-[#edf6fb] text-black dark:text-[#fafdff]"> */}
     <main className="flex flex-col items-center w-screen min-h-screen dark:bg-[#09153e] bg-[#edf6fb] text-black dark:text-[#fafdff]">

        <Routes>
          <Route
            path="/"
            element={
              <Home
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                handleToggle={handleToggle}
              />
            }
          />
          <Route path="/detail/:id" element={<ExtensionDetailView />} />
        </Routes>
</main>
    </>
  );
}

export default App;
