import React from 'react'
import Link from 'next/link'

const HeaderArticleButton = ({text, linkUrl, isActive, onClickFuction, isLast}) => {
    return (
        <Link href={linkUrl} passHref={true}>
            <a className={`${isActive 
                ? "font-semibold" 
                : "font-light"} 
                ${isLast 
                ? "" 
                : "border-r-2 border-article"} 
                flex md:ml-16 md:mt-16 ml-10 mt-20 h-6 w-16 md:h-9 md:w-24 items-center md:text-base text-xs`} onClick={onClickFuction}>{text}</a>
        </Link>
    )
}

export default HeaderArticleButton
