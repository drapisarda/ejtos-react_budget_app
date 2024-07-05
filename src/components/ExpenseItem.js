import React, { useContext } from 'react';
import { TiTimes, TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr className="expense-item">
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td className="center"><button className="expense-item__increase" onClick={event=> increaseAllocation(props.name)}><TiPlus /></button></td>
        <td className="center"><button className="expense-item__decrease" onClick={event=> decreaseAllocation(props.name)}><TiMinus/></button></td>
        <td className="center"><button className="expense-item__delete" size='1.5em' onClick={handleDeleteExpense}><TiTimes/></button></td>
        </tr>
    );
};

export default ExpenseItem;