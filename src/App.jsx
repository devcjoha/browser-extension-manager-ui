import "./index.css";
import { Route, Routes } from "react-router-dom";
import ExtensionDetailView from "./pages/ExtensionDetailView";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import { useExtensions } from "./hooks/useExtensions.js";
import ModalWrapper from "./components/ModalWrapper.jsx";

function App() {
  const extensions = useExtensions();
  const [items, setItems] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    // Retorna true si el tema guardado es 'dark', o false por defecto
    return savedTheme === "dark";
  });
  // console.log("APP", extensions);

  useEffect(() => {
    setItems(extensions);
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode, items, extensions]);

  //Toggle dark mode
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
                items={extensions}
              />
            }
          >
            <Route
              path="detail/:id"
              element={<ModalWrapper items={extensions} />}
            />
          </Route>
          <Route
            path="/detail/:id"
            items={extensions}
            element={<ExtensionDetailView items={extensions} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
