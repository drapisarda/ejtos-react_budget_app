import React, { useContext } from 'react';
import {AppContext} from '../context/AppContext';

const CurrencySelection = () => {

  const { currency, dispatch } = useContext(AppContext);

  const updateCurrency = (value) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: value
  });
  }

  return (
    <div className='currency-selection'>
      <label className='p-2'>Currency:</label>
      <select className='p-2' id="currency" onChange={e=>updateCurrency(e.target.value)}>
        <option defaultValue={currency === "$"} value="$">$ Dollar</option>
        <option defaultValue={currency === "£"}  value="£">£ Pound</option>
        <option defaultValue={currency === "€"} value="€">€ Euro</option>
        <option defaultValue={currency === "₹"} value="₹">₹ Rupee</option>
      </select>
    </div>
  )
}

export default CurrencySelection