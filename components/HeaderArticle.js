import React, { useState } from 'react'
import HeaderArticleButton from './HeaderArticleButton'
import Link from 'next/link'
import Image from 'next/image'

const HeaderArticle = ({listButton}) => {
    const [ sectId, setSectId ] = useState(0)

    return (
        <div className="flex h-28 w-artNav border-b-4 border-article justify-self-center">
            {listButton.map((button, index) => (
                <HeaderArticleButton
                    isLast={index === listButton.length-1}
                    key={index}
                    text={button.text}
                    linkUrl={button.linkUrl}
                    isActive={sectId === index}
                    onClickFuction={()=>setSectId(index)}
                />
            ))}
            <Link href="#">
                <a className="mt-16 flex items-center left-tight relative"><Image src="/icons/return.svg" alt="ret" width="22" height="22"/>Kembali</a>
            </Link>
        </div>
    )
}

export default HeaderArticle