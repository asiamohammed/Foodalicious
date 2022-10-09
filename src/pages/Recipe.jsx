import {useEffect, useState} from 'react'
import styled from 'styled-components';

function Recipe() {
   const [recipe, setRecipe] = useState([]);
 
  
  useEffect(() => {
    fetch("http://localhost:3000/recipes" , { method: "GET"})
    
      .then((response) => response.json())
      .then((recipes) => {
        setRecipe(recipes);
      });
  }, []);
  return (
    <div>
      
    </div>
  );
}
const DetailedWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;  
    display: flex;
    .active {
      background: linear-gradient(35deg, #494949, #313131);
    } 
`

export default Recipe;
