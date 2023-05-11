import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, remaining, currency } = useContext(AppContext);

  
    const handleChange = (e) => {
        const newBudgetValue = e.target.value;
        const totalExpenses = budget - remaining;
        if (newBudgetValue < totalExpenses) {
          alert('Budget cannot be lower than spending');
        } else if (newBudgetValue > 20000) {
            alert('Budget cannot exceed 20,000')
        } else {
          dispatch({ type: 'SET_BUDGET', payload: Number(newBudgetValue) });
        }
      };
  
    return (
      <div className='alert alert-secondary'>
        <span>Budget: {currency}
          <input 
          type='number' 
          value={budget} 
          onChange={handleChange}
          min="10"
          step="10" />
        </span>
      </div>
    );
  };
  
  export default Budget;
