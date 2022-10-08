import {useEffect , useState} from 'react'
import styled from 'styled-components';

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
    <div>{popular.map((recipe) => {
      return(
      <Wrapper>
        <h3>Delicious Recipes</h3>
        {popular.map((recipe) => {
          return(
           <Card>
            
           </Card>
          );
        })}
      </Wrapper>
      );
    })}</div>
    
  );
}
const Wrapper = styled.div `
  margin: 4rem 0rem;
`;
const Card = styled.div `
min-height: 25rem;
border-radius: 2rem;
`
export default Popular;
