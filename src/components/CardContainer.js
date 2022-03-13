import React, { useContext } from 'react';
import { ColorContext } from '../Context/ColorsContext';
import Card from './Card';
import './CardContainer.css';

const CardContainer = () => {
    const [colors] = useContext(ColorContext);
    return(
        <div className='card-container'>
            {colors.map((item, index) => <Card item={item} key={index}/>)}
        </div>
    )
}

export default CardContainer;