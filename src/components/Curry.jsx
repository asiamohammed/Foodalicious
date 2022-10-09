import {useEffect , useState} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

function Curry() {
  
    const [curry, setCurry] = useState([]);

  useEffect(() => {
    fetch("https://calm-journey-09295.herokuapp.com/recipes" , { method: "GET"})
    
      .then((response) => response.json())
      .then((recipes) => {
        setCurry(recipes);
      });
  }, []);
 
  return (
    <Grid>
       {curry.filter((currry) => currry.type ==="Curry")
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
export const Card = styled.div `
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
display: block;


img{
    border-radius: 2rem;
    left: 0;
    width:  300px;
    height: 180px;
    
}
a (
  text-decoration:none:

)

h4 {
  text-align: center
  padding: 1rem
}
]
 `
 export const Grid = styled.div `
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
     grip-grab: 3rem;
`;   

export default Curry;
