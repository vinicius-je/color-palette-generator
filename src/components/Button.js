import React from 'react';
import './Button.css';

const Button = (props) => {
    return(
        <div className='button-container'>
            <button className='generate-btn' onClick={props.onClick}>Generate</button>
        </div>
    )
}

export default Button;