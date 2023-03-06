// 

import React, { useState } from 'react';

function Recipe({ id, variety, name,image, onDelete }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleViewCardClick = () => {
    fetch(`http://localhost:9292/recipe/${id}`)
      .then(response => response.json())
      .then(data => {
        setIngredients(data.ingredients);
        setInstructions(data.instructions);
        setModalOpen(true);
      })
      .catch(error => console.log(error));
  };

  const handleDeleteCardClick = () => {
    fetch(`http://localhost:9292/recipe/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(() => onDelete(id))
      .catch(error => console.log(error));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{variety}</h5>
        <p className="card-text">{name}</p>
        <img src={image} alt="" />
        <button className="btn btn-primary" onClick={handleViewCardClick}>View Recipe</button>
      </div>

      {modalOpen && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{`Recipe ${id}`}</h5>
                <button type="button" className="close" data-dismiss="modal" onClick={() => setModalOpen(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p><strong>Ingredients:</strong></p>
                <p>{ingredients}</p>
                <p><strong>Instructions:</strong></p>
                <p>{instructions}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setModalOpen(false)}>Close</button>
                <button type="button" className="btn btn-danger" onClick={handleDeleteCardClick}>Delete Recipe</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recipe;
