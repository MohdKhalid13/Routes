import './App.css';
import Navbar from './components/Navbar';
import {Routes , Route} from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/" element={<Contact/>}></Route>
    </Routes>
   </>
  );
}

export default App;
