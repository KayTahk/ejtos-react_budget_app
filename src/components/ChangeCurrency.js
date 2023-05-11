import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {
  const {dispatch, currency } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
    return (
    <div className='dropdown'>  
        <span>
        <select 
            className='btn btn-success dropdown-toggle'
            style={{ backgroundColor: '#90EE90', color: 'white'}}
            id='currency'
            onChange={(event) => changeCurrency(event.target.value)}>
            <option style={{color:'black', textAlign: 'left'}} defaultValue={currency}>Currency (£ Pound)</option>
            <option style={{color:'black', textAlign: 'left'}} value='£'>£ Pound</option>
            <option style={{color:'black', textAlign: 'left'}} value='$'>$ Dollar</option>
            <option style={{color:'black', textAlign: 'left'}} value='€'>€ Euro</option>
            <option style={{color:'black', textAlign: 'left'}} value='₹'>₹ Rupee</option>
        </select>
        </span>
    </div>

      );
    };
export default ChangeCurrency;