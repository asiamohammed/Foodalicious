import Home from "./Home";

import Muffins from "../components/Muffins";
import Noodels from "../components/Muffins";
import Curry from "../components/Curry";
import { Route, Routes} from "react-router-dom"

function Pages() {
  return (
  
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Muffins" element= {<Muffins/>}/>
    <Route path="/Noodels" element= {<Noodels/>}/>

    <Route path="/Curry" element= {<Curry/>}/>
  </Routes>
  
  
  );
}

export default Pages;
