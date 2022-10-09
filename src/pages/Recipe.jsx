import {useEffect, useState} from 'react'
import styled from 'styled-components';

function Recipe() {
   const [recipe, setRecipe] = useState([]);
 
  
  useEffect(() => {
    fetch("https://calm-journey-09295.herokuapp.com/recipes" , { method: "GET"})
    
      .then((response) => response.json())
      .then((recipes) => {
        setRecipe(recipes);
      });
  }, []);
  return (
    < DetailedWrapper>
    <div>
      <h2>{recipe.name}</h2>
      <img src= {recipe.image} alt=''/>
    </div>
    <Info>
<Button>Ingredients</Button>
<Button>Instructions</Button>
    </Info>
    
    </DetailedWrapper>
  );
}
const DetailedWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;  
    display: flex;
    .active {
      background: linear-gradient(35deg, #494949, #313131);
      color: white;
    } 
    h2{
      margin-bottom: 2rem;
    }
    li{
      font-size: 1.2 rem;
      line-height: 2.5rem;
    
    }
    ul{
      margin-top: 2rem
    }

`;
const Button = styled.button`
padding: 1rem 2rem;
color: #313131;
background; white;
border: 2px solid black;
margin-right: 2rem;
font-weight:600;
`;
const Info = styled.div`
margin-left: 10rem;
`


export default Recipe;
