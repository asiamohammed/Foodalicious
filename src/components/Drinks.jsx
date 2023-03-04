import {useEffect , useState} from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Wrapper } from './Popular';
import {Link} from 'react-router-dom'


function Drinks() {
  const [drinks, setDrinks] = useState([]);
 
  
  useEffect(() => {
    fetch("http://localhost:3000/recipes" , { method: "GET"})
    
      .then((response) => response.json())
      .then((recipes) => {
        setDrinks(recipes);
      });
  }, []);
 

  return (
    <div>
      <Wrapper>
        <h3>Drinks</h3>
        <Splide 
        options={{
          perPage: 4,
          arrows: true,
          pagination:true,
          drag: "free",
          gap: "-5rem",

        }}>
          
      {drinks.filter((drinks) => drinks.variety==="drinks")
          .map((recipe) => {
          return(
            <SplideSlide key={recipe.id}>
           <Card>
            <Link to ={'/recipe/' + recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.name}</p>
            </Link>
           </Card>
           </SplideSlide>
          );
        })}
        </Splide>
      </Wrapper>
    </div>
    
  );
}
const Card = styled.div `
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
display: block;


img{
    border-radius: 2rem;
    left: 0;
    width:  350px;
    height: 350px;
    object-fit: cover;
    position: absolute,
    margin-right: 0px;
    align-items: left
    zoom: -10;
    
}
p{
    position: absolute;
    z-index:10,
    
    transform: translate(-50%,-50%);
    color: white;
    width: 100%;
    text-align: right;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display:flex;
    justify-content: center;
    align-items: center;
    position: absolute;
  top: 70px;
  left: -60px;

 
 }
`;  
export default Drinks;
