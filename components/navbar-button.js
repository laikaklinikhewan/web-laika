import React, {useContext} from 'react'
import {ButtonContext} from './navbar-context'

const NavButton = (props) => {
    const [idPushed, setIdPushed] = useContext(ButtonContext)

    return (
        <div className="w-tbutton md:w-button bg-gray-200 text-center py-tbutton text-sm md:text-base md:py-button font-light rounded-full">
            {props.sect}
        </div>
    )
}

export default NavButton;