import React, {useState} from 'react'
import "../css/AddProduct.css"


function AddRecipe({ addNewRecipe }){

   
    const [variety , setVariety] = useState('')
    const [name , setName] = useState('')
    const [image, setImage] = useState('')    
    const [ingredients , setIngredients] = useState('')
    const [instructions , setInstructions] = useState('')      
   
     
     const handleSubmit = (e) =>{
        e.preventDefault()

        const newRecipe = {
            
            variety: variety,
            name: name,
            ingredients: ingredients,
            instructions: instructions,
            image: image
           
        }

        fetch('http://localhost:9292/recipe', {

        method:'POST',

        headers: {
            'Content-Type' : 'application/json'
        },

        body:JSON.stringify(newRecipe)
     })
     
     .then((resp)=> resp.json())
     .then((recipe)=> addNewRecipe(recipe))

     alert("Your Recipe Has Been Submitted, Check The Home Page")
     setIngredients('')
     setInstructions('')
     setImage('')
     setName('')    
     setVariety('')
     

    }

    return(
        <div className= "form">
                
         <form onSubmit = {handleSubmit}>
        <div className="form-group">

            <label>Variety</label>
            <input type="text" 
            required
            name ='variety' 
            value = {variety}
             className="form-control" 
             placeholder="Enter Recipe type" 
             onChange ={(e) => setVariety(e.target.value)}/>
        
        </div>

        <div className="form-group">
            <label>Name</label>
            <input type="text"
            required
             name ='name'
              value = {name}
               className="form-control"
                placeholder="Enter Recipe Name"
                 onChange ={(e) => setName(e.target.value)}/>
        </div>

        <div className="form-group">
            <label>Ingredients</label>
            <input type="text" 
            required
            name ='ingredients'
             value = {ingredients} 
             className="form-control" 
             placeholder="Enter ingridients" 
             onChange ={(e) => setIngredients(e.target.value)}/>
        </div>

        
        <div className="form-group">
            <label>Image</label>
            <input type="text" 
            required
            name ='image' 
            value = {image} 
            className="form-control"
             placeholder="Enter Image Link" 
             onChange ={(e) => setImage(e.target.value)}/>
        </div>

         <div className="form-group">
            <label>Instructions</label>
            <input type="text" 
            required
            name ='instructions' 
            value = {instructions} 
            className="form-control"
             placeholder="Enter Instructions" 
             onChange ={(e) => setInstructions(e.target.value)}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
                
                </div>
           
             
    )
    }
    export default AddRecipe;