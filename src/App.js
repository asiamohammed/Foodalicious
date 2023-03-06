import React from 'react';
import Pages from "./pages/Pages";
import Category from './components/Category';
import { BrowserRouter} from "react-router-dom"


function App() {
  
  return (
    <div className="App">
      
    <h1>Foodalicious</h1> 
      <BrowserRouter>
      
     <Category/>
     <Pages />
     </BrowserRouter>
    </div>
  );

}


export default App;
