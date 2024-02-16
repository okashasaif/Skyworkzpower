import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Residential from "./Pages/Residential/Residential";
import Project from "./Pages/Projects/Project";
import Contactus from "./Pages/Contactus/Contactus";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Residential" element={<Residential/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Contactus" element={<Contactus/>}/>

      </Routes>
    </BrowserRouter>
   
  );
}
export default App;