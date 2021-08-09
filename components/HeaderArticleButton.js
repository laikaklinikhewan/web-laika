import React from 'react'
import Link from 'next/link'

const HeaderArticleButton = ({text, linkUrl, isActive, onClickFuction, isLast}) => {
    return (
        <Link href={linkUrl} passHref={true}>
            <a className={`${isActive ? "font-semibold" : "font-light"} ${isLast ? "" : "border-r-2 border-article"} flex ml-16 mt-16 h-9 w-24 items-center`} onClick={onClickFuction}>{text}</a>
        </Link>
    )
}

export default HeaderArticleButton
