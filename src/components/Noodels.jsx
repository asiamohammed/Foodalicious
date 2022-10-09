import {useEffect , useState} from 'react'
import styled from 'styled-components';
import { Grid, Card } from './Curry';
import {Link} from 'react-router-dom'

function Noodels() {
    const [noodles, setNoodles] = useState([]);
 
  
  useEffect(() => {
    fetch("http://localhost:3000/recipes" , { method: "GET"})
    
      .then((response) => response.json())
      .then((recipes) => {
        setNoodles(recipes);
      });
  }, []);
 
  return (
    <Grid>
       {noodles.filter((noodle) => noodle.type ==="noodles")
          .map((recipe) => {
          return(
            
           <Card key={recipe.id}>
            <Link to ={'/recipe/' + recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.name}</p>
            </Link>
           </Card>
        

          );
         
          
        })}
    </Grid>
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

export default Noodels;
