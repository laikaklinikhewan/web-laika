export async function fetchContents(context){
    const res = await fetch('http://laikaklinikhewan.local/graphql',{
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
            query: `
            query getContent {
                posts {
                  nodes {
                    slug
                    title
                    content
                    date
                  }
                }
              }
            `,
            variables: {
                id: context.params.slug,
                idType: 'SLUG'
            }
        })
    })

    const json = await res.json()
    return{
        props:{
            posts: json.data.posts,
        }
    }
}