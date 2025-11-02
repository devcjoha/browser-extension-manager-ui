import Footer from "../components/Footer";
import Header from "../components/header";
import ExtensionsList from "../components/ExtensionsList";
// import { data } from "react-router-dom";

function Home({darkMode, setDarkMode, handleToggle}){
    console.log("DARKMODE HOME", darkMode);
    
    return(
        <>
        <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        handleToggle={handleToggle}
        />
        {darkMode? <p>ESTA EN DARK MODE</p>: <p >ESTA EN LIGHT MODE </p>}
    <ExtensionsList>
        
    </ExtensionsList>
        <Footer/>
        </>
    )
}
export default Home;