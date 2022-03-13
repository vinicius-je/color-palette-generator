import React, { createContext, useState, useEffect } from 'react';

export const MyPaletteContext = createContext();

export const MyPaletteProvider = (props) => {
    const [myPalette, setMyPalette] = useState([]);

    useEffect(() => {
        let palette = JSON.parse(localStorage.getItem('myPalette'));
        if(palette !== null){
            setMyPalette(palette);
        }
    }, [])

    return(
        <MyPaletteContext.Provider value={[myPalette, setMyPalette]}>
            {props.children}
        </MyPaletteContext.Provider>
    )
}