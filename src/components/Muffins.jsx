import {useEffect , useState} from 'react'
import { Grid, Card } from './Curry';
import {Link} from 'react-router-dom'
import {RiDeleteBinLine} from 'react-icons/ri';
import {AiOutlinePlusCircle} from 'react-icons/ai';



 

function Muffins() {


   const handleDelete = () => {
    const [recipes, setRecipes] = useState([]);
    fetch(`http://localhost:9292/recipe/${id}`, {
      method: 'DELETE',
    });
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

 const [muffins, setMuffins] = useState([]);
 
  useEffect(() => {
    fetch("http://localhost:9292/recipe" , { method: "GET"})
    
      .then((response) => response.json())
      .then((recipes) => {
        setMuffins(recipes);
      });
  }, []);
 
  return (
    <Grid>
       {muffins.filter((muffin) => muffin.variety ==="muffins")
          .map((recipe) => {
          return(
            
           <Card key={recipe.id}>
            <Link to ={'/recipe/' + recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.name}</p>
            </Link>
            <IconButton onClick={handleDelete} > <RiDeleteBinLine/> </IconButton>
            <AiOutlinePlusCircle/>
           </Card>
        

          );
         
          
        })}
    </Grid>
  );
}

export default Muffins;
