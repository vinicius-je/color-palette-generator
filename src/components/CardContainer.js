import React from 'react';
import Card from './Card';
import './CardContainer.css';

const CardContainer = (props) => {
    const colors = props.value;
    return(
        <div className='card-container'>
            {colors.map((item, index) => <Card value={props.value} item={item} key={index}/>)}
        </div>
    )
}

export default CardContainer;