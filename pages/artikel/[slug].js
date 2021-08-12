import React from 'react'
import OneComment from '../../components/OneComment'
import { getArticlePaths, getOnePageContent } from '../../lib/wordpress'
import ISOtoDate from '../../lib/ISOtoDate'
import Footer from '../../components/Footer'
import Image from 'next/image'

const ArticleView = (data) => {
    const articleData = data.content.post
    let date = ISOtoDate(articleData.date)
    const fixedContent = articleData.content.replace(/(\n\n\n)/gm, "")

    const article = {
        title: articleData.title, 
        imageUrl: articleData.featuredImage == null ? "/assets/two-dogs-playing-tug-of-war-with-disc.jpg" : articleData.featuredImage.node.sourceUrl,
        date: date, 
        content: fixedContent
    }

    const comments = [
        {author:'Client1', date:'dd/mm/yyyy HH:MM WIB', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus dolor at fringilla feugiat.',
            replies:{
                author:'LaikaKlinikHewan', date:'dd/mm/yyyy HH:MM WIB', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus dolor at fringilla feugiat.'
            }
        },
        {author:'Client2', date:'dd/mm/yyyy HH:MM WIB', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus dolor at fringilla feugiat.',
            replies:{
                author:'LaikaKlinikHewan', date:'dd/mm/yyyy HH:MM WIB', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus dolor at fringilla feugiat.'
            }
        },
    ]

    return (
        <div className="flex h-full min-h-screen w-full bg-article flex-col items-center">
            <div className="w-viewArt mt-28">
                <div className=''>
                    <h1 className='text-title'>{article.title}</h1>
                    <p className='mt-2 mb-2 opacity-50'>{article.date}</p>
                </div>
                <div>
                    <Image src={article.imageUrl} alt="" height="540" width="960"/>
                </div>
                <div className="mt-8 text-justify mb-8 text-content whitespace-pre-line" dangerouslySetInnerHTML={{__html: article.content}}>
                </div>
            </div>
            <div className="w-commentArt bg-comment opacity-70 mb-36">
                <p className="underline">{`Comments (${comments.length})`}</p>
                <div className='flex flex-col items-center'>
                    <ul className='w-oneComment paw-comment mt-7'>
                        {/* Self reminder: const comments jangan dipindah karena nanti fetchnya disini */}
                        {comments.map((comment, index) => (
                            <OneComment
                                key={index}
                                author={comment.author}
                                date={comment.date}
                                content={comment.content}
                                replies={comment.replies}
                            />
                        ))}
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export async function getStaticProps(context){
    let content = await getOnePageContent(context)
    return {
        props : {
            content
        }
    }
}

export async function getStaticPaths(){
    const paths = await getArticlePaths()
    return { paths, fallback: false}
}

export default ArticleView
