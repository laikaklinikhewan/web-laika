import React, { useState } from 'react'
import HeaderArticle from '../components/HeaderArticle'
import ArticlePreview2 from '../components/ArticlePreview2'
import { getPostsLink } from '../lib/wordpress'
import categoryCheck from '../lib/categoryCheck'
import Footer from '../components/Footer'
import ISOtoDate from '../lib/ISOtoDate'
import Head from 'next/head'
import { useRouter } from 'next/router'


const ArticleMore = ({posts}) => {
    const { query } = useRouter()
    const listPosts = posts
    let listArticles = []
    let listAnnouncements = []
    listPosts.map((post) =>{
        if (categoryCheck(post.categories.nodes, "Artikel")){
            listArticles = listArticles.concat(post)
        } else if (categoryCheck(post.categories.nodes,"Pengumuman")){
            listAnnouncements = listAnnouncements.concat(post)
        }
    })

    const [activePage, setActivePage] = useState(query.sect == 'pengumuman' ? 1 : 0)
    const buttonArticle = [
        { text: "Artikel", linkUrl: ""},
        { text: "Pengumuman", linkUrl: ""}
    ]

    return (
        <>
            <Head>
                <title>Artikel & Pengumuman</title>
                <link rel="icon" href="/assets/LOGO.png" />
            </Head>
            <div className='h-full w-full min-h-screen bg-article flex flex-col sm:items-center'>
                <HeaderArticle listButton={buttonArticle} activePage={activePage} setActivePage={setActivePage}/>
                <ul className={`${activePage === 0 ? 'block' : 'hidden'}`}>
                    {  listArticles.map((article, index)=>(
                        <li key={index}>
                            <ArticlePreview2
                                title={article.title}
                                linkUrl={`/artikel/${article.slug}`}
                                imageUrl={`${article.featuredImage == null ? "/assets/two-dogs-playing-tug-of-war-with-disc.jpg" : article.featuredImage.node.sourceUrl}`}
                                date={ISOtoDate(article.date)}
                                isLast={index === listArticles.length-1}
                                isFirst={index === 0}
                            />
                        </li>
                    ))}
                </ul>
                <ul className={`${activePage === 1 ? 'block' : 'hidden'}`}>
                    {  listAnnouncements.map((announcement, index)=>(
                        <li key={index}>
                            <ArticlePreview2
                                title={announcement.title}
                                linkUrl={`/artikel/${announcement.slug}`}
                                imageUrl={`${announcement.featuredImage == null ? "/assets/two-dogs-playing-tug-of-war-with-disc.jpg" : announcement.featuredImage.node.sourceUrl}`}
                                date={ISOtoDate(announcement.date)}
                                isLast={index === listAnnouncements.length-1}
                                isFirst={index === 0}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <Footer/>
        </>
    )
}

export async function getStaticProps(){
    const posts = await getPostsLink()
    return {
        props: { posts }
    }
}

export default ArticleMore
