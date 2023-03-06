import {useEffect , useState} from 'react'
import { Grid, Card} from './Curry';
// import {Link} from 'react-router-dom'
import Recipe from '../pages/Recipe';
// import {RiDeleteBinLine} from 'react-icons/ri';
// import {AiOutlinePlusCircle} from 'react-icons/ai';



 

function Drink(handleCardDelete) {

 const [drink, setDrink] = useState([]);
 
  useEffect(() => {
    fetch("http://localhost:9292/recipe" , { method: "GET"})
    
      .then((response) => response.json())
      .then((recipes) => {
        setDrink(recipes);
      });
  }, []);
  //  const handleDelete = (id) => {
    
  //   // const [recipes, setRecipes] = useState([]);
  //   fetch(`http://localhost:9292/recipe/${id}`, {
  //     method: 'DELETE',
  //   });
  //   const updatedRecipes = muffins.filter((recipe) => recipe.id !== id);
  //   setMuffins(updatedRecipes);
  // };
 
  return (
    <Grid>
       {drink.filter((drink) => drink.variety ==="drinks")
          .map((recipe) => {
          return(
            
           <Card>
          <Recipe key={recipe.id} id={recipe.id} image = {recipe.image} name={recipe.name} description={recipe.description} onDelete={handleCardDelete} />
        
</Card>
          );
         
          
        })}
    </Grid>
  );
  
}

export default Drink;
