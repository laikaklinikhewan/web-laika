import React from 'react'
import { fetchContents } from '../../middleware/fetchContents'
import OneComment from '../../components/OneComment'
import Image from 'next/image'

const ArticleView = () => {
    const article = {
        title:"Lorem ipsum dolor sit amet consectetur adipisicing.", imageUrl: "/assets/two-dogs-playing-tug-of-war-with-disc.jpg" ,date:"dd/mm/yyyy HH:MM WIB", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet congue lectus. Suspendisse sem sem, accumsan vitae accumsan a, dictum at tellus. Sed semper at odio vitae condimentum. Integer et elementum eros. Nunc sem eros, vestibulum id eleifend ac, gravida ultricies odio. Nunc tempor massa sit amet mi mollis convallis. Suspendisse ut mi a nisi condimentum pharetra. Nulla facilisi.Quisque aliquet ipsum ac mauris lobortis viverra. Nullam vulputate leo id ante venenatis faucibus. Donec id enim eu justo dignissim commodo at ut nibh. Phasellus ut lacinia massa. Suspendisse potenti. Curabitur sem urna, varius vel eleifend sed, gravida vel felis. Sed convallis neque nec orci consectetur, eget bibendum leo laoreet. Donec in suscipit risus. Donec quis diam urna. Aliquam erat volutpat. Phasellus pretium urna magna, facilisis fermentum elit posuere ac. Praesent consectetur orci rhoncus erat egestas consectetur. Praesent lobortis sit amet eros quis ultrices. Ut convallis, libero a dictum aliquet, eros sem tempus justo, eu tempor nunc tortor non ante. Praesent vitae consequat massa, sed aliquet velit. Ut vitae augue mattis, cursus eros et, tempor mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed gravida porta lectus, eu venenatis lacus rhoncus ac. Sed lacus risus, euismod pretium mattis vitae, convallis id magna. Nullam tincidunt, elit sed faucibus ornare, diam ante tempus velit, sed vehicula diam mi id arcu. In pellentesque faucibus fermentum. Etiam quis arcu scelerisque, interdum urna vitae, vulputate libero. Nulla facilisi. Nunc eget finibus massa. Nam congue felis ipsum, id convallis elit maximus in. Nulla nulla sem, lobortis a blandit et, ornare eget eros. Curabitur tristique tempor massa, non faucibus nulla molestie fermentum. "
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
                <div>
                    <p className="mt-8 text-justify mb-40 text-content">{article.content}</p>
                </div>
            </div>
            <div className="w-commentArt bg-comment opacity-70 mb-40">
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
        </div>
    )
}

// export async function getStaticProps(context){
//     const res = await fetch('http://laikaklinikhewan.local/graphql',{
//         method: 'POST',
//         headers:{'Content-Type': 'application/json'},
//         body: JSON.stringify({
//             query: `
//             query OnePageQuery ($id: ID!, $idType: PostIdType!) {
//                 post(id: $id, idType: $idType) {
//                   id
//                   slug
//                   title
//                   content
//                   featuredImage {
//                     node {
//                       sourceUrl
//                     }
//                   }
//                   author {
//                     node {
//                       id
//                       username
//                     }
//                   }
//                   comments {
//                     nodes {
//                       date
//                       content
//                       author {
//                         node {
//                           ... on User {
//                             id
//                             username
//                           }
//                         }
//                       }
//                       replies {
//                         nodes {
//                           content
//                           date
//                           author {
//                             node {
//                               ... on User {
//                                 id
//                                 username
//                               }
//                             }
//                           }
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             `,
//             variables: {
//                 id: context.params.slug,
//                 idType: 'SLUG'
//             }
//         })
//     })

//     const json = await res.json()
//     return{
//         props:{
//             post: json.data.post,
//         }
//     }
// }

// export async function getStaticPages(){

// }

export default ArticleView
