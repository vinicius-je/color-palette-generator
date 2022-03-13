import React, { createContext, useState } from "react";

export const OptionSelectedContext = createContext();

export const OptionsSelectedProvider = (props) => {
    const [optionSelected, setOptionSelected] = useState('Default');

    return(
        <OptionSelectedContext.Provider value={[optionSelected, setOptionSelected]}>
            {props.children}
        </OptionSelectedContext.Provider>
    )
}
