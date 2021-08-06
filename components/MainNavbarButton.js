import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const MainNavbarButton = ({text, sectUrl, iconUrl, isActive, onClickFunc, height, width}) => {
    return (
        <Link href={sectUrl} passHref={true}>
            <a className={`flex self-center ${isActive ? 'font-semibold' : 'font-light'}`} onClick={onClickFunc}>
                <div className={`${text === 'Home' ? '' : 'p-0.5'} ${text === 'Artikel' ? 'md:h-home md:w-home' : ''}`}>
                    <Image src={iconUrl} alt="" height={height} width={width}/>
                </div>{text}
            </a>
        </Link>
    )
}

export default MainNavbarButton
