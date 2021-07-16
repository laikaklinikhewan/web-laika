import React, {useState, createContext} from 'react'

export const ButtonContext = createContext()

export const ButtonProvider = props => {
    const [idPushed, setIdPushed] = useState(0)
    
    return (
        <ButtonContext.Provider value={{idPushed, setIdPushed}}>
            {props.children}
        </ButtonContext.Provider>
    )
}