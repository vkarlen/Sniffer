import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import FoodRow from '../FoodRow/FoodRow';

function FoodTable() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'ADMIN_FETCH_FOOD' });
  }, []);

  const foodList = useSelector((store) => store.admin.food);

  return (
    <div>
      <table className="admin-table">
        <thead>
          <tr>
            <th id="imgHeader">Image</th>
            <th>Brand</th>
            <th>Name</th>
            <th>Ingredients</th>
          </tr>
        </thead>

        <tbody>
          {foodList.map((food) => {
            return <FoodRow food={food} key={food.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FoodTable;
