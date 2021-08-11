import React from 'react'
import Image from 'next/image'

const OneComment = ({author, date, content, replies}) => {
    return (
        <li className="mb-7">
            <p>{author}</p>
            <p>{date}</p>
            <p>{content}</p>
            <p className="underline hover:cursor-pointer">Reply</p>
        </li>
    )
}

export default OneComment
