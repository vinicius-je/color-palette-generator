import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    const [optionSelected, setOptionSelected] = props.value;
    
    const onClick = (e) => {
        setOptionSelected(e.target.innerText);
    }

    return(
        <nav className='nav-container'>
            <ul className='nav-buttons'>
                <li className={optionSelected === 'Default' ? 'nav-btn-active nav-btn' : 'nav-btn'} onClick={onClick}>Default</li>
                <li className={optionSelected === 'Dark' ? 'nav-btn-active nav-btn' : 'nav-btn'} onClick={onClick}>Dark</li>
                <li className={optionSelected === 'Light' ? 'nav-btn-active nav-btn' : 'nav-btn'} onClick={onClick}>Light</li>
                <li className={optionSelected === 'My palette' ? 'nav-btn-active nav-btn' : 'nav-btn'} onClick={onClick}>My palette</li>              
            </ul>
        </nav>
    )
}

export default Navbar;