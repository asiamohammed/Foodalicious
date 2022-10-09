import {useEffect , useState} from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


function Popular() {
  const [popular, setPopular] = useState([]);
 
  
  useEffect(() => {
    fetch("http://localhost:3000/recipes" , { method: "GET"})
    
      .then((response) => response.json())
      .then((recipes) => {
        setPopular(recipes);
      });
  }, []);

   

  return (
    <div>
      <Wrapper>
        <h3>Delicious Recipes</h3>
        <Splide 
        options={{
          perPage: 4,
          arrows: false,
          pagination:false,
          drag: "free",
          gap: "5rem",

        }}>
        {popular.map((recipe) => {
          return(
            <SplideSlide>
           <Card>
            <p>{recipe.name}</p>
            <img src={recipe.image} alt={recipe.name} />
           </Card>
           </SplideSlide>
          );
        })}
        </Splide>
      </Wrapper>
    </div>
    
  );
}
const Wrapper = styled.div `
  margin: 4rem 0rem;
`;
const Card = styled.div `
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;


img{
    border-radius: 2rem;
    float: left;
    width:  300px;
    height: 200px;
    object-fit: cover;
    position: absolute,
}
p{
    position: absolute;
    z-index:10,
    left: 50%;
    bottom:0%;
    transform: translate(-50%,0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display:flex;
    justify-content: canter;
    align-items: center;

 
 }
`;  


export default Popular;
