import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value
        })
    }

    const decreaseBudget = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: budget - 10
        })
    }

    const increaseBudget = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: budget + 10
        })
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<button onClick={event => increaseBudget()}>+</button>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
<button onClick={event => decreaseBudget()}>-</button>
</div>
    );
};
export default Budget;