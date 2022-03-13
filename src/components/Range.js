import React from 'react';
import './Range.css'

const Range = (props) => {
    const {min, max, step, amount, setAmount} = props;

    const onChange = (e) => {
        setAmount(e.target.value)
    }

    return(
        <div className='range-container'>
            <input className='range' type='range' value={amount} min={min} max={max} step={step} onChange={onChange}></input>
            <h3>{amount}</h3>
        </div>
    )
}

export default Range;