import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const maxBudget = 20000

const Budget = () => {
    const { budget, dispatch, totalExpenses } = useContext(AppContext);
    let alertType = 'alert-secondary'

    const handleBudgetChange = (event) => {
        let {value} = event.target
        if (value < 0 ) return
        if (value < totalExpenses ) value = totalExpenses 
        if (value > maxBudget ) value = maxBudget 

        dispatch({
            type: 'SET_BUDGET',
            payload: value
        })
    }

    const decreaseBudget = () => {
        if (budget <= 0 ) return
        
        dispatch({
            type: 'SET_BUDGET',
            payload: budget - 10
        })
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
<input style={{minWidth: '5rem'}} type="number" min={totalExpenses} max={maxBudget} step="10" value={budget} onChange={handleBudgetChange}></input>
<button onClick={event => decreaseBudget()}>-</button>
</div>
    );
};
export default Budget;