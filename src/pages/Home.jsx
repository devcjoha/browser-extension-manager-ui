import Header from "../components/header";
import ExtensionsList from "../components/ExtensionsList";
import { Outlet } from "react-router-dom";
function Home({ items, darkMode, setDarkMode, handleToggle }) {
  // const [fiters, setFilters] = useState({
  //   all: true,
  //   active: false,
  //   inactive: false
  // });

  return (
    <>
      <section className="home-container w-screen lg:w-272 min-h-screen flex flex-col items-center p-4">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleToggle={handleToggle}
        />
        <ExtensionsList items={items} />
        <Outlet />
      </section>
    </>
  );
}
export default Home;
