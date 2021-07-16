import React from 'react'
import {ButtonProvider} from './navbar-context'
import NavButton from './navbar-button'

const PinkNavbar = () => {
    return (
        <ButtonProvider>
            <NavButton sect="Info"/>
        </ButtonProvider>
    )
}

export default PinkNavbar