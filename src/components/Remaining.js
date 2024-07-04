import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { remaining } = useContext(AppContext);
    const alertType = remaining < 0 ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{remaining}</span>
        </div>
    );
};
export default Remaining;