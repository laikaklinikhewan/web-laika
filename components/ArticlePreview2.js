import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ArticlePreview2 = ({title, linkUrl, imageUrl, date, isLast, isFirst}) => {
    return (
        <Link href={linkUrl} passHref={true}>
            <a>
                <div className={`${isLast ? "mb-20" : ""} w-artPrev ${isFirst ? "mt-20" : "mt-10"} flex relative transform hover:scale-105 transition`}>
                    <Image src={imageUrl} alt="" height={120} width={192} layout="fixed"/>
                    <div className="border-b-2 w-dividerArt ml-8">
                        <h1 className="text-2xl">{title}</h1>
                        <p className="bottom-0 absolute opacity-50">{date}</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default ArticlePreview2
