import {useEffect , useState} from 'react'
import { Grid, Card } from './Curry';

function Muffins() {
 const [muffins, setMuffins] = useState([]);
 
  
  useEffect(() => {
    fetch("http://localhost:3000/recipes" , { method: "GET"})
    
      .then((response) => response.json())
      .then((recipes) => {
        setMuffins(recipes);
      });
  }, []);
 
  return (
    <Grid>
       {muffins.filter((muffin) => muffin.type ==="muffins")
          .map((recipe) => {
          return(
            
           <Card key={recipe.id}>
            
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.name}</p>
            
           </Card>
        

          );
         
          
        })}
    </Grid>
  );
}

export default Muffins;