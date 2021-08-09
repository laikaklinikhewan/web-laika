import React from 'react'
import HeaderArticle from '../components/HeaderArticle'
import ArticlePreview2 from '../components/ArticlePreview2'
import Footer from '../components/Footer'


const ArticleMore = () => {
    const buttonArticle = [
        { text: "Artikel", linkUrl: "#"},
        { text: "Pengumuman", linkUrl: "#"}
    ]

    const listArticle = [
        {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit. ", imageUrl:"/assets/two-dogs-playing-tug-of-war-with-disc.jpg", linkUrl:"#", date:"dd/mm/yyyy hh:MM WIB"},
        {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit. ", imageUrl:"/assets/two-dogs-playing-tug-of-war-with-disc.jpg", linkUrl:"#", date:"dd/mm/yyyy hh:MM WIB"},
        {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit. ", imageUrl:"/assets/two-dogs-playing-tug-of-war-with-disc.jpg", linkUrl:"#", date:"dd/mm/yyyy hh:MM WIB"},
        {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit. ", imageUrl:"/assets/two-dogs-playing-tug-of-war-with-disc.jpg", linkUrl:"#", date:"dd/mm/yyyy hh:MM WIB"}
    ]

    return (
        <div className='h-full w-full bg-article grid justify-items-center'>
            <HeaderArticle listButton={buttonArticle}/>
            { listArticle.map((article, index)=>(
                <ArticlePreview2 
                    title={article.title}
                    linkUrl={article.linkUrl}
                    imageUrl={article.imageUrl}
                    date={article.date}
                    isLast={index === listArticle.length-1}
                    isFirst={index === 0}
                    key={index}
                />
            ))}
            <Footer/>
        </div>
    )
}

export default ArticleMore
