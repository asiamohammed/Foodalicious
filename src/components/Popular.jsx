import {useEffect , useState} from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// import {Link} from 'react-router-dom'



function Popular() {
  const [popular, setPopular] = useState([]);
 
  
  useEffect(() => {
    fetch("http://localhost:9292/recipe" , { method: "GET"})
    
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
          arrows: true,
          pagination:true,
        
          drag: "free",
          gap: "2rem",

        }}>
        {popular.map((recipe) => {
          return(
            <SplideSlide key={recipe.id}>
           <Card>
            
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.name}</p>
            
            
           </Card>
           
           </SplideSlide>
          );
        })}
        </Splide>
      </Wrapper>
    </div>
    
  );
}
export const Wrapper = styled.div `
  margin: 4rem 0rem;
`;
 const Card = styled.div `
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
display: block;


img{
    border-radius: 2rem;
    left: 0;
    width:  410px;
    height: 300px;
    object-fit: cover;
    position: absolute,
    margin-right: 0px;
    align-items: left
    
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
  top: 8px;
  left: 16px;

 
 }
`;  





export default Popular;
