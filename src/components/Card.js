import React, { useEffect, useState } from 'react';
import './Card.css'

const Card = ({value, colorPalette, item}) => {
    const {color, my_palette} = item;
    const [message, setMessage] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [selected, setSelected] = useState(false);
    const [myPalette, setMyPalette] = colorPalette;
    const colors = value;

    const style = {
        backgroundColor: color
    }

    const copyColorCode = () => {
        navigator.clipboard.writeText(color);
        setMessage(!showMessage);
    }

    const updatePalette = () => {
        let list = [...myPalette];
        list.push({color, my_palette: true});
        return list;
    }

    const onClick = () => {
        if(!my_palette){
            setMyPalette(updatePalette());
        }else{
            setMyPalette(myPalette.filter(item => item.color !== color));
        }
        setSelected(!selected);
    }

    useEffect(() => {
        localStorage.setItem('myPalette', JSON.stringify(myPalette));
    }, [myPalette])

    useEffect(() => {
        my_palette ? setSelected(true) : setSelected(false);
    }, [colors])

    return(
        <div className='card' 
            onMouseOver={() => setShowMessage(true)} 
            onMouseLeave={() => {setShowMessage(false); setMessage(true)}} 
            onClick={copyColorCode}>
            <div className='card-color' style={style}>
                {showMessage ? <span className='message'>{message ? 'Copy to clipboard': 'Copied to clipboard'}</span> : null}
            </div>
            <div className='card-footer'>
                <div className='heart-icon-container' onClick={onClick}>{selected ? '❤️': '🖤'}</div>
                <p className='color-code'>{color}</p>
            </div>
        </div>
    )
}

export default Card;