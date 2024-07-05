import React, { useContext, useState, useCallback } from 'react';
import { AppContext } from '../context/AppContext';
import debounce from '../utility/debounce';

const maxBudget = 20000

const Budget = () => {
    const { budget, dispatch, totalExpenses } = useContext(AppContext);
    const [inputValue, setInputValue] = useState(budget)
    let alertType = 'alert-secondary'

    const handleBudgetChange = useCallback((value) => {
        if (value < 0) return;
        if (value < totalExpenses) value = totalExpenses;
        if (value > maxBudget) value = maxBudget;
        setInputValue(value);

        dispatch({
            type: 'SET_BUDGET',
            payload: value
        });
    }, [totalExpenses, dispatch]);

    const debouncedHandleBudgetChange = useCallback(
        debounce((value) => handleBudgetChange(value), 1000),
        [handleBudgetChange]
    );

    const handleValueUpdate = (value) => {
        setInputValue(value)
        debouncedHandleBudgetChange(value);
    }

    const decreaseBudget = () => {
        handleBudgetChange(budget - 10)
    }

    const increaseBudget = () => {
        handleBudgetChange(budget + 10)
    }

    return (
<div className={`alert ${alertType}`}>
<span>Budget: £</span>
<button onClick={increaseBudget}>+</button>
<input style={{minWidth: '5rem'}} type="number" step="10" value={inputValue} onChange={event => handleValueUpdate(event.target.value)}></input>
<button onClick={decreaseBudget}>-</button>
</div>
    );
};
export default Budget;