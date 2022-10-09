
import {useEffect, useState} from 'react'
import styled from 'styled-components';
import {useParams, Link} from 'react-router-dom'


function Searched() {
 const [searchedRecipe, setSearchedRecipe] = useState([]);
 let params = useParams();


 const getSearched = async (name) => {

    const data = await fetch('https://calm-journey-09295.herokuapp.com/recipes');
    const recipes = await data.json();
    setSearchedRecipe(recipes)
 };

  
  useEffect(() => {
    getSearched(params.search);
    
  }, [params.search]);
 
  return (
    <Grid>
       {searchedRecipe.map((recipe) => {
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
 const Grid = styled.div `
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
     grip-grab: 3rem;
`;   

export default Searched;
