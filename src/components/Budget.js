import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    let alertType = 'alert-secondary'

    const updateDecoration = () => {
        alertType = (Number(budget) === 0 )? 'alert-danger' : 'alert-secondary';
    }

    updateDecoration()

    const handleBudgetChange = (event) => {
        if (event.target.value < 0 ) return
        
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value
        })
        
        updateDecoration()
    }

    const decreaseBudget = () => {
        if (budget <= 0 ) return
        
        dispatch({
            type: 'SET_BUDGET',
            payload: budget - 10
        })

        updateDecoration()
    }

    const increaseBudget = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: Number(budget) + 10
        })
    }

    return (
<div className={`alert ${alertType}`}>
<span>Budget: £</span>
<button onClick={event => increaseBudget()}>+</button>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
<button onClick={event => decreaseBudget()}>-</button>
</div>
    );
};
export default Budget;