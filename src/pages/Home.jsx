import Header from "../components/header";
import ExtensionsList from "../components/ExtensionsList";
import { Outlet } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Filter from "../components/Filter";

function Home({ items, darkMode, setDarkMode, handleToggle, setItems }) {
  const [filterItems, setFilterItems] = useState([]);
  const [filterSelected, setFilterSelected] = useState({
    all: false,
    active: false,
    inactive: false,
  });

  useEffect(() => {
    if (items && items.length) {
      setItems(items);
      setFilterItems(items);
    }
  }, [items, setItems]);
//Recalcula FilterItems automáticamente
  useEffect(() => {
    if (filterSelected.all) {
      setFilterItems(items);
    } else if (filterSelected.active) {
      setFilterItems(items.filter((item) => item.isActive));
    } else if (filterSelected.inactive) {
      setFilterItems(items.filter((item) => !item.isActive));
    }
   
}, [items, filterSelected, setItems]);


  const applyFilter = (type) => {
    setFilterSelected({
      all: type === "all",
      active: type === "active",
      inactive: type === "inactive",
    });
  };

  const handleToggleCard = (id, value) => {
  const updatedItems = items.map((i) =>
    i.id === id ? { ...i, isActive: value } : i
  );
  setItems(updatedItems); // Esto dispara el useEffect de filtrado
};


  const handleRemove = useCallback(
  (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems); // Esto también dispara el useEffect
  },
  [items, setItems]
);


  return (
    <>
      <section className="home-container flex justify-center items-center h-full lg:w-263 w-85 mt-5 ">
        <div className="home-child flex flex-col w-full max-w-screen items-center justify-center">
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            handleToggle={handleToggle}
          />
          {/* HEADER EXTENSIONS LIST */}
          <div className="extension-list-header w-full flex flex-row flex-wrap h-28 
          lg:h-20 mt-3 lg:justify-between items-center justify-center">
            <h1 className="extension-list-title flex text-[2.2rem] font-bold items-center">
              Extensions List
            </h1>
            <Filter
              filterSelected={filterSelected}
              applyFilter={(type) => applyFilter(type, items)}
            />
          </div>

          <ExtensionsList
            items={items}
            handleToggleCard={handleToggleCard}
            filterItems={filterItems}
            handleRemove={handleRemove}
          />

          <Outlet />
        </div>
      </section>
    </>
  );
}
export default Home;
