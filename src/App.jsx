import "./index.css";
import { Route, Routes } from "react-router-dom";
import ExtensionDetailView from "./pages/ExtensionDetailView";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import { useExtensions } from "./hooks/useExtensions.js";
import ModalWrapper from "./components/ModalWrapper.jsx";

function App() {
  const extensions = useExtensions({});
  const [items, setItems] = useState([]);
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
  
  useEffect(() => {
    if (extensions.length > 0 && items.length === 0) {
      setItems(extensions);
    }
  }, [extensions, items.length]);
  
  //Toggle dark mode
  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <main className="app-main flex justify-center max-w-screen mx-auto min-h-screen dark:bg-[#09153e] bg-[#edf6fb] text-[#09153e] dark:text-[#fafdff]">
  
        <Routes>
          <Route
            path="/"
            element={
              <Home
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                handleToggle={handleToggle}
                items={items}
                setItems={setItems}
                extensions={extensions}
              />
            }
          >
            <Route
              path="detail/:id"
              element={<ModalWrapper items={items} />}
            />
          </Route>
          <Route
            path="/detail/:id"
            items={items}
            element={<ExtensionDetailView items={items} setItems={setItems} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
