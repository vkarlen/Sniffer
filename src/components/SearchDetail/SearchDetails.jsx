import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { DialogContent, DialogActions } from '@material-ui/core';

import './SearchDetails.css';

function SearchDetail({ food }) {
  const pets = useSelector((store) => store.user.userPets);

  return (
    <DialogContent id="detailContainer">
      <h3>
        {food.name} {food.description}
      </h3>
      <img src={food.image} alt={food.description} id="detailImage" />
      <p>Ingredients: {food.ingredientlist.join(', ')}</p>
      <div>
        <select>
          {pets.map((pet) => {
            return <option key={pet.id}>{pet.name}</option>;
          })}
        </select>
        <button>Set as Current</button>
        <button>Add to Log</button>
      </div>
    </DialogContent>
  );
}

export default SearchDetail;
