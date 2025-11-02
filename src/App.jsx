import "./index.css";
import { Route, Routes } from "react-router-dom";
import ExtensionDetail from "./pages/ExtensionDetail";
import Home from "./pages/Home";
import { useState, useEffect } from "react";

function App() {
 const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    // Retorna true si el tema guardado es 'dark', o false por defecto
    return savedTheme === 'dark';
  });
 
  useEffect(() => {
     const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);


  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

   return (
    <>
          {/* Lista extensiones */}
      <div className="h-screen w-full  dark:bg-custom-900 bg-white text-black dark:text-white">
        <div className="p-4 bg-neutral-0 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-0">
  <p>Modo actual: {darkMode ? "Oscuro" : "Claro"}</p>
</div>
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
          <Route path="/detail/:id" element={<ExtensionDetail />} />
        </Routes>
          {/* Card extensiones */}
      </div>
    </>
  );
}

export default App;
