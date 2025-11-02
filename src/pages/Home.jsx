import Header from "../components/header";
import ExtensionsList from "../components/ExtensionsList";
import { useExtensions } from "../hooks/useExtensions.js";


function Home({ darkMode, setDarkMode, handleToggle }) {
  // const [items, setItems] = useState([]);
// const [fiters, setFilters] = useState({
//   all: true,
//   active: false,
//   inactive: false
// });
const extensions = useExtensions();



  return (
    <>
     <section className="home-container w-screen lg:w-272 min-h-screen flex flex-col items-center p-4">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        handleToggle={handleToggle}
      />
      <ExtensionsList
      items={extensions}
      >
        
      </ExtensionsList>
      
      </section>
    </>
  );
}
export default Home;
