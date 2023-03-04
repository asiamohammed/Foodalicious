import {TbSoup} from 'react-icons/tb';
import {GiCupcake} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function Category() {
  return (
    <List>
      
      <SLink to= "/">
        <GiCupcake/>
        <h4>Home</h4>
      </SLink>
      <SLink to= "/Muffins">
        <GiCupcake/>
        <h4>Muffins</h4>
      </SLink>
      <SLink to= "/Curry">
        <TbSoup/>
        <h4>Curry</h4>
      </SLink>
     
    </List>
  );
}
const List = styled(NavLink)`
     display: flex;
     justify-content: center;
     margin: 2rem 0rem;
`;
const SLink = styled(NavLink)`
display: flex;
flex dirlction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height; 6rem;
cursor: pointer;
transform: scale(0.8);

h4{
  color: white;
  font-size:1.5 rem;
}
 svg{
    color: white;
    font-size: 1.5rem;
  }
&.active{
  background:linear-gradient(to right, #f27121, #e94057);

  svg{
    color: white;
  }
}
`

export default Category;
